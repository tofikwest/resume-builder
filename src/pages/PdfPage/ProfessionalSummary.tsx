import React, { useState, ChangeEvent } from 'react'
import TextArea from '../../components/TextArea/TextArea'
import { ADD } from '../../redux/pdf/pdfSlice'
import { useDispatch } from 'react-redux'
import TextAreaBtns from '../../components/TextAreaBTNS/TextAreaBtns'

const ProfessionalSummary: React.FC = () => {
  const [textArea, settextAreaValue] = useState('')
  const dispatch = useDispatch()

  function handleTextArea(e: ChangeEvent<HTMLTextAreaElement>) {
    settextAreaValue(e.target.value)

    setTimeout(() => {
      dispatch(
        ADD({
          section: 'professionalSummary',
          data: textArea,
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
      <p className=" mb-2 ml-11 w-10/12 text-sm text-gray-400">
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </p>

      <TextAreaBtns left={'16'} />
      <TextArea handle={handleTextArea} mx="mx-auto" name="profSummary" />
      <p className="ml-11 mt-2 text-xs text-gray-500">
        * Recruiter tip: write 50-200 characters to increase interview chances
      </p>
    </>
  )
}

export default ProfessionalSummary
