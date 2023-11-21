import { createSlice } from '@reduxjs/toolkit'
import { ILanguage, IPdfState, ISkills, IWebSitesSocLink } from './types'
import type { PayloadAction } from '@reduxjs/toolkit'
import { nanoid } from 'nanoid'
import { LANGUAGES, SKILLS, WEBSITE_SOC_LINK } from './constants'

export interface IPayloadAdd {
  section: string
  data: ISkills | ILanguage | IWebSitesSocLink
}

export interface IPayloadDel {
  section: string
  id: string
}

const initialState: IPdfState = {
  title: {},
  personalDetails: {},
  professionalSummary: {},
  employmentHistory: {},
  education: {},
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
        section === SKILLS ||
        section === LANGUAGES ||
        section === WEBSITE_SOC_LINK
      ) {
        const id = nanoid()

        const obj: ISkills | ILanguage | IWebSitesSocLink = {
          id,
          ...data,
        }

        state[section].push(obj)
        return state
      }
      if (typeof data === 'object') {
        return {
          ...state,
          [section]: {
            ...data,
          },
        }
      }
      console.log(state)
      return {
        ...state,
        [section]: {
          data,
        },
      }
    },
    DEL: (state, { payload: { section, id } }: PayloadAction<IPayloadDel>) => {
      return {
        ...state,
        [section]: state[section].filter((el: { id: string }) => el.id !== id),
      }
    },
  },
})

export const { ADD, DEL } = pdfSlice.actions
export default pdfSlice.reducer
