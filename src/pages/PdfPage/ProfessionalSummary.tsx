import React, { useState, useEffect, ChangeEvent } from 'react'
import TextArea from '../../components/TextArea/TextArea'
import { ADD } from '../../redux/pdf/pdfSlice'
import { useDispatch } from 'react-redux'
import { PROF_SUMMARY } from '../../redux/pdf/constants'

const ProfessionalSummary: React.FC = () => {
  const [textArea, settextAreaValue] = useState('')
  const dispatch = useDispatch()

  function handleTextArea(e: ChangeEvent<HTMLTextAreaElement>) {
    settextAreaValue(e.target.value)

    setTimeout(() => {
      dispatch(
        ADD({
          section: PROF_SUMMARY,
          data: { summary: e.target.value },
        }),
      )
    }, 300)
  }
  return (
    <>
      {/* // * Professional Summary */}
      <h2 className="my-2 mb-1 ml-11 block text-xl font-semibold">
        Professional Summary
      </h2>
      <p className=" mb-2 ml-11 w-11/12 text-sm text-gray-400">
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </p>

      <TextArea
        handle={handleTextArea}
        mx="mx-auto"
        name="profSummary"
        value={textArea}
      />
      <p className="ml-10 mt-[-20px] text-xs text-gray-500">
        * Recruiter tip: write 50-500 characters to increase interview chances
      </p>
    </>
  )
}

export default ProfessionalSummary
