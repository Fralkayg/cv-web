export interface ExperienceEntry {
  company: string
  role: string
  /** ISO 'YYYY-MM'. */
  startDate: string
  /** ISO 'YYYY-MM', or null if this is the current job. */
  endDate: string | null
  bullets: string[]
  technologies: string
}

export interface DurationLabels {
  present: string
  yearSingular: string
  yearPlural: string
  monthSingular: string
  monthPlural: string
}

export interface CVContent {
  meta: {
    htmlLang: string
    pageTitle: string
  }
  name: string
  title: string
  initials: string
  contact: {
    emailLabel: string
    email: string
    locationLabel: string
    location: string
    linkedinLabel: string
    linkedinUrl: string
    githubLabel: string
    githubUrl: string
  }
  nav: {
    summary: string
    experience: string
    contact: string
    viewExperience: string
  }
  hero: {
    greeting: string
    tagline: string
    ctaDownload: string
    ctaContact: string
  }
  sectionTitles: {
    summary: string
    experience: string
    contact: string
  }
  summary: string[]
  experience: ExperienceEntry[]
  technologiesLabel: string
  contactMessage: string
  qrCaption: string
  duration: DurationLabels
}
