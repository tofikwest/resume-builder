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
      <h2 className="my-2 mb-1 ml-4 block text-xl font-semibold lg:ml-11">
        Professional Summary
      </h2>
      <p className=" mb-2 ml-4 w-11/12 text-sm text-gray-400 lg:ml-11">
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </p>

      <TextArea
        handle={handleTextArea}
        mx="mx-auto md:ml-4 md:w-[95.8%]"
        name="profSummary"
        value={textArea}
      />
      <p className="ml-4 mt-[-20px] text-xs text-gray-500 md:ml-5 lg:ml-10">
        * Recruiter tip: write 50-500 characters to increase interview chances
      </p>
    </>
  )
}

export default ProfessionalSummary
