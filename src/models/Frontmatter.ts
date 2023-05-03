interface Frontmatter {
  date: string
  formattedDate?: string
  standardDate?: string
  title: string
  banner: string
  bannerAttribution?: string
  socialImage?: {
    publicURL: string
  }
}

export default Frontmatter
