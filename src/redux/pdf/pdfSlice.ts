import { createSlice } from '@reduxjs/toolkit'
import {
  IEducation,
  IEmploymentHistory,
  ILanguage,
  IPdfState,
  IPersonalDetails,
  IProfessionalSummary,
  ISkills,
  ITitle,
  IWebSitesSocLink,
} from './types'
import type { PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { PERSONAL_DETAILS, PROF_SUMMARY, TITLE } from './constants'

export interface IPayloadAdd {
  section: string
  data:
    | ISkills
    | ILanguage
    | IWebSitesSocLink
    | IEducation
    | IEmploymentHistory
    | IProfessionalSummary
    | IPersonalDetails
    | ITitle
}

export interface IPayloadDel {
  section: string
  id: string
}

export interface IPayloadChange {
  section: string
  id: string
  data: IEducation | IEmploymentHistory
}

const initialState: IPdfState = {
  title: {},
  personalDetails: {},
  professionalSummary: {
    summary: '',
  },
  employmentHistory: [],
  education: [],
  websitesSocialLink: [],
  skills: [],
  languages: [],
}

export const pdfSlice = createSlice({
  name: 'pdf',
  initialState,
  reducers: {
    ADD: (
      state,
      { payload: { section, data } }: PayloadAction<IPayloadAdd>,
    ) => {
      if (
        section === PERSONAL_DETAILS ||
        section === PROF_SUMMARY ||
        section === TITLE
      ) {
        return {
          ...state,
          [section]: {
            ...data,
          },
        }
      }

      const obj:
        | ISkills
        | ILanguage
        | IWebSitesSocLink
        | IEducation
        | IEmploymentHistory = {
        id: nanoid(),
        ...data,
      }

      state[section].push(obj)
      return state
    },
    DEL: (state, { payload: { section, id } }: PayloadAction<IPayloadDel>) => {
      return {
        ...state,
        [section]: state[section].filter((el: { id: string }) => el.id !== id),
      }
    },

    CHANGE: (
      state,
      { payload: { section, id, data } }: PayloadAction<IPayloadChange>,
    ) => {
      return {
        ...state,
        [section]: state[section].map((el: IEducation | IEmploymentHistory) => {
          if (el.id === id) {
            return {
              id,
              ...data,
            }
          }
          return el
        }),
      }
    },
  },
})

export const { ADD, DEL, CHANGE } = pdfSlice.actions
export default pdfSlice.reducer
