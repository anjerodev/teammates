import { SVGIcon, SVGIconProps } from '@/components/ui/svg-icon'

export const CircleIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <title id="title">Circle Icon</title>
      <path
        d="M12 1.25C6.072 1.25 1.25 6.073 1.25 12C1.25 17.927 6.072 22.75 12 22.75C17.928 22.75 22.75 17.927 22.75 12C22.75 6.073 17.928 1.25 12 1.25ZM12 21.25C6.899 21.25 2.75 17.101 2.75 12C2.75 6.899 6.899 2.75 12 2.75C17.101 2.75 21.25 6.899 21.25 12C21.25 17.101 17.101 21.25 12 21.25Z"
        fill="currentColor"
      />
    </SVGIcon>
  )
}
