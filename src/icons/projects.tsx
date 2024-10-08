import { SVGIcon, SVGIconProps } from '@/components/ui/svg-icon'

export const ProjectsIcon = (props: SVGIconProps) => {
  return (
    <SVGIcon {...props}>
      <title id="title">Projects Icon</title>
      <path
        d="M18 20.75H6C3.582 20.75 2.25 19.418 2.25 17V7C2.25 4.582 3.582 3.25 6 3.25H10C10.199 3.25 10.39 3.329 10.53 3.47L13.3101 6.25H18C20.418 6.25 21.75 7.582 21.75 10V17C21.75 19.418 20.418 20.75 18 20.75ZM6 4.75C4.423 4.75 3.75 5.423 3.75 7V17C3.75 18.577 4.423 19.25 6 19.25H18C19.577 19.25 20.25 18.577 20.25 17V10C20.25 8.423 19.577 7.75 18 7.75H13C12.801 7.75 12.61 7.671 12.47 7.53L9.68994 4.75H6Z"
        fill="currentColor"
      />
    </SVGIcon>
  )
}
