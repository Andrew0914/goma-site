export interface Job {
  title: string
  image: string
  description: string
  slug: string
  url: string
  type: string
  mainTech: string
  date: string

}

export const jobs: Job[] = [
  {
    title: "Refactor/138 reorganize css",
    image: "/images/works/1.png",
    description: "I sent a PR to phoenix dashboard, Phoenix is the web framework for Elixir.",
    slug: "pr-for-phoenix-live-dashboard",
    url: "https://github.com/phoenixframework/phoenix_live_dashboard/pull/227",
    type: "PR",
    mainTech: "CSS HTML Elixir",
    date: "2020-12-10",
  }
]
