export interface IPersonalDetails {
  jobTitle?: string
  first_name?: string
  email?: string
  country?: string
  photo?: string
  last_name?: string
  phone?: string
  city?: string
  address?: string
  driving_license?: string
  place_birth?: string
  postalCode?: string
  nationality?: string
  date_birth?: string
}

export interface ITitle {
  title?: string
}

export interface IProfessionalSummary {
  summary?: string
}

export interface IEmploymentHistory {
  jobTitleHistory?: string
  start_date?: string
  end_date?: string
  employer?: string
  city?: string
}

export interface IEducation {
  school?: ''
  start_date?: ''
  end_date?: ''
  employer?: ''
  city?: ''
  description?: ''
}

export interface IWebSitesSocLink {
  label?: ''
  link?: ''
}

export interface ISkills {
  skill?: ''
  level?: ''
}

export interface ILanguage {
  language?: ''
  level?: ''
}

export interface IPdfState {
  title: ITitle
  personalDetails: IPersonalDetails
  professionalSummary: IProfessionalSummary
  employmentHistory: IEmploymentHistory
  education: IEducation
  websitesSocialLink: IWebSitesSocLink
  skills: ISkills
  languages: ILanguage
}
