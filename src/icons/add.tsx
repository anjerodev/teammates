import { SVGIcon, SVGIconProps } from '@/components/ui/svg-icon'

export const AddIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <title id="title">Add Icon</title>
      <path
        d="M19.75 12C19.75 12.414 19.414 12.75 19 12.75H12.75V19C12.75 19.414 12.414 19.75 12 19.75C11.586 19.75 11.25 19.414 11.25 19V12.75H5C4.586 12.75 4.25 12.414 4.25 12C4.25 11.586 4.586 11.25 5 11.25H11.25V5C11.25 4.586 11.586 4.25 12 4.25C12.414 4.25 12.75 4.586 12.75 5V11.25H19C19.414 11.25 19.75 11.586 19.75 12Z"
        fill="currentColor"
      />
    </SVGIcon>
  )
}
