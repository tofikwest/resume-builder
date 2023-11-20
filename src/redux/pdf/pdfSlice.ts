import { createSlice } from '@reduxjs/toolkit'
import { IPdfState } from './types'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface IPayload {
  section: string
  data: any
}

const initialState: IPdfState = {
  title: {},
  personalDetails: {},
  professionalSummary: {},
  employmentHistory: {},
  education: {},
  websitesSocialLink: {},
  skills: {},
  languages: {},
}

export const pdfSlice = createSlice({
  name: 'pdf',
  initialState,
  reducers: {
    ADD: (state, { payload: { section, data } }: PayloadAction<IPayload>) => {
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
  },
})

export const { ADD } = pdfSlice.actions
export default pdfSlice.reducer
