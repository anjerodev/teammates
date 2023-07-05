import { SVGIcon, SVGIconProps } from '@/components/ui/svg-icon'

export const CloseIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <title id="title">Close Icon</title>
      <path
        d="M18.53 17.47C18.823 17.763 18.823 18.238 18.53 18.531C18.384 18.677 18.192 18.751 18 18.751C17.808 18.751 17.616 18.678 17.47 18.531L12 13.061L6.52999 18.531C6.38399 18.677 6.19199 18.751 5.99999 18.751C5.80799 18.751 5.61599 18.678 5.46999 18.531C5.17699 18.238 5.17699 17.763 5.46999 17.47L10.94 12L5.46999 6.53005C5.17699 6.23705 5.17699 5.76202 5.46999 5.46902C5.76299 5.17602 6.238 5.17602 6.531 5.46902L12.001 10.939L17.471 5.46902C17.764 5.17602 18.239 5.17602 18.532 5.46902C18.825 5.76202 18.825 6.23705 18.532 6.53005L13.062 12L18.53 17.47Z"
        fill="currentColor"
      />
    </SVGIcon>
  )
}
