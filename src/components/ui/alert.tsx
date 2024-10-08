import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const alertVariants = cva(
  'relative w-full rounded-lg p-4 [&:has(svg)]:pl-16 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4',
  {
    variants: {
      variant: {
        default: 'bg-tertiaryContainer text-onTertiaryContainer',
        success: 'bg-success text-onSuccess',
        info: 'bg-info text-onInfo',
        warning: 'bg-warning text-onWarning',
        error: 'bg-error text-onError',
        destructive:
          'bg-error text-onError dark:bg-errorContainer dark:text-onErrorContainer',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

const AlertRoot = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
AlertRoot.displayName = 'AlertRoot'

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn('mb-1 font-medium leading-none tracking-tight', className)}
    {...props}
  />
))
AlertTitle.displayName = 'AlertTitle'

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('text-sm [&_p]:leading-relaxed', className)}
    {...props}
  />
))
AlertDescription.displayName = 'AlertDescription'

const Alert = Object.assign(AlertRoot, {
  Title: AlertTitle,
  Description: AlertDescription,
})

export { Alert }
