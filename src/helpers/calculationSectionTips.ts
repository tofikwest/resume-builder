import { TITLE } from '../redux/pdf/constants'

export interface IFlagObj {
  personalDetails: boolean
  professionalSummary: boolean
  employmentHistory: boolean
  education: boolean
  websitesSocialLink: boolean
  skills: boolean
  languages: boolean
  [key: string]: boolean
}
export const findTruthyParentObjects = (
  obj: any = {},
  flags: any = {},
  currentPath = '',
) => {
  let hasTruthyProperty = false

  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const value = obj[key]
      const newPath = currentPath ? `${currentPath}` : key

      if (value && typeof value === 'object') {
        // If the value is an object, recursively check its properties
        if (findTruthyParentObjects(value, flags, newPath)) {
          hasTruthyProperty = true
        }
      } else if (Array.isArray(value)) {
        // If the value is an array, check each element for truthy properties
        for (let i = 0; i < value.length; i++) {
          if (findTruthyParentObjects(value[i], flags, newPath)) {
            hasTruthyProperty = true
          }
        }
      } else if (value) {
        // If the value is truthy and not an object or array, set the flag
        flags[currentPath] = true
        hasTruthyProperty = true
      }
    }
  }

  if (!hasTruthyProperty && !currentPath.includes(TITLE)) {
    flags[currentPath] = false
  }

  return flags
}

export const findSectionForAdding = (
  flagObj: IFlagObj,
  dictionary: Record<string, string> = {
    personalDetails: 'Add personal details',
    professionalSummary: 'Add profile summary',
    employmentHistory: 'Add employment history',
    education: 'Add education',
    websitesSocialLink: 'Add websites & social links',
    skills: 'Add skills',
    languages: 'Add languages',
  },
) => {
  for (const property in flagObj) {
    if (flagObj.hasOwnProperty(property) && flagObj[property] === false) {
      return [dictionary[property]]
    }
  }
  return ['']
}
