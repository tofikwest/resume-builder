export interface IPersonalDetails {
  jobTitle?: string
  first_name?: string
  email?: string
  country?: string
  photo?: File | null
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

export interface IProfessionalSummary {
  summary?: string
}

export interface IEmploymentHistory {
  jobTitleHistory?: string
  description?: string
  start_date?: string
  end_date?: string
  employer?: string
  city?: string
  id?: string
}

export interface IEducation {
  id?: string
  school?: string
  start_date?: string
  end_date?: string
  degree?: string
  city?: string
  description?: string
}

export interface IWebSitesSocLink {
  id?: string
  label?: string
  link?: string
}

export interface ISkills {
  id?: string
  skill?: string
  level?: string
}

export interface ITitle {
  title?: string
}

export interface ILanguage {
  id?: string
  language?: string
  level?: string
}

export interface ICurrentTemplateName {
  currentTemplateName?: string | null
}

export interface IPdfState {
  [key: string]: any
  templateName: ICurrentTemplateName
  title: ITitle
  personalDetails: IPersonalDetails
  professionalSummary: IProfessionalSummary
  employmentHistory: IEmploymentHistory[]
  education: IEducation[]
  websitesSocialLink: IWebSitesSocLink[]
  skills: ISkills[]
  languages: ILanguage[]
}
