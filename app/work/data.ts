export enum JobColor {
  Blue = "blue",
  Red = "red",
  Green = "green",
  Yellow = "yellow"
}

export interface JobGraphic {
  src: string
  alt: string
  width: number
  height: number
}

export interface Job {
  title: string
  image: string
  description: string
  slug: string
  url: string
  type: string
  mainTech: string
  date: string
  graphic: JobGraphic
  color: JobColor
}

export const jobs: Job[] = [
  {
    title: "Refactor/138 reorganize css",
    image: "/images/works/work-1-phoenix138.png",
    description: "I sent a PR to phoenix dashboard, Phoenix is the web framework for Elixir.",
    slug: "pr-for-phoenix-live-dashboard",
    url: "https://github.com/phoenixframework/phoenix_live_dashboard/pull/227",
    type: "PR",
    mainTech: "CSS HTML Elixir",
    date: "2020-12-10",
    graphic: {
      src: "/images/works/work-1-graphic-phoenix138.png",
      alt: "Refactor/138 reorganize css",
      width: 769,
      height: 495,
    },
    color: JobColor.Blue,
  }
]
