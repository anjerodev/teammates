import { SVGIcon, SVGIconProps } from '@/components/ui/svg-icon'

export const WebsiteIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <title id="title">Website Icon</title>
      <path
        d="M12 1.25C6.072 1.25 1.25 6.073 1.25 12C1.25 17.927 6.072 22.75 12 22.75C17.928 22.75 22.75 17.927 22.75 12C22.75 6.073 17.928 1.25 12 1.25ZM21.212 11.25H17.162C17.031 8.507 16.187 5.71201 14.727 3.16101C18.27 4.25701 20.903 7.43 21.212 11.25ZM12.73 2.78699C14.486 5.39799 15.509 8.36 15.662 11.25H8.33801C8.49001 8.36 9.51399 5.39799 11.27 2.78699C11.512 2.76799 11.754 2.75 12 2.75C12.246 2.75 12.489 2.76799 12.73 2.78699ZM9.27301 3.16101C7.81301 5.71201 6.96901 8.507 6.83801 11.25H2.78799C3.09699 7.43 5.73001 4.25701 9.27301 3.16101ZM2.78799 12.75H6.83801C6.96901 15.493 7.81301 18.288 9.27301 20.839C5.73001 19.743 3.09699 16.57 2.78799 12.75ZM11.27 21.213C9.51399 18.602 8.49101 15.64 8.33801 12.75H15.662C15.51 15.64 14.486 18.602 12.73 21.213C12.488 21.232 12.246 21.25 12 21.25C11.754 21.25 11.511 21.232 11.27 21.213ZM14.727 20.839C16.187 18.288 17.031 15.493 17.162 12.75H21.212C20.903 16.57 18.27 19.743 14.727 20.839Z"
        fill="currentColor"
      />
    </SVGIcon>
  )
}
