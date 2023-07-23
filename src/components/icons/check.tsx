import { SVGIcon, SVGIconProps } from '@/components/ui/svg-icon'

export const CheckIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <title id="title">Check Icon</title>
      <path
        d="M9 18C8.999 18 8.998 18 8.996 18C8.729 17.999 8.47499 17.892 8.28799 17.702L4.288 13.64C3.9 13.246 3.905 12.613 4.299 12.226C4.693 11.839 5.325 11.843 5.713 12.237L9.006 15.581L18.294 6.29398C18.685 5.90298 19.317 5.90298 19.708 6.29398C20.099 6.68398 20.099 7.31798 19.708 7.70798L9.70799 17.708C9.51999 17.895 9.265 18 9 18Z"
        fill="currentColor"
      />
    </SVGIcon>
  )
}
