import { SVGIcon, SVGIconProps } from '@/components/ui/svg-icon'

export const MenuIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <title id="title">Menu Icon</title>
      <path
        d="M21 6.75H10C9.586 6.75 9.25 6.414 9.25 6C9.25 5.586 9.586 5.25 10 5.25H21C21.414 5.25 21.75 5.586 21.75 6C21.75 6.414 21.414 6.75 21 6.75ZM21.75 12C21.75 11.586 21.414 11.25 21 11.25H3C2.586 11.25 2.25 11.586 2.25 12C2.25 12.414 2.586 12.75 3 12.75H21C21.414 12.75 21.75 12.414 21.75 12ZM14.75 18C14.75 17.586 14.414 17.25 14 17.25H3C2.586 17.25 2.25 17.586 2.25 18C2.25 18.414 2.586 18.75 3 18.75H14C14.414 18.75 14.75 18.414 14.75 18Z"
        fill="currentColor"
      />
    </SVGIcon>
  )
}
