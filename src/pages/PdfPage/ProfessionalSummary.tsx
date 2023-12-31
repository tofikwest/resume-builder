import React, { useState, ChangeEvent } from 'react'
import TextArea from '../../components/TextArea/TextArea'
import { ADD } from '../../redux/pdf/pdfSlice'
import { useDispatch } from 'react-redux'
import { PROF_SUMMARY } from '../../redux/pdf/constants'
import useSelectText from '../../customHooks/useSelectText'
import { addDotToSelectedLine } from '../../helpers/handleSelectText'
import debounce from 'debounce'

const ProfessionalSummary: React.FC = () => {
  const [textArea, settextAreaValue] = useState('')
  const dispatch = useDispatch()

  const debouncedDispatch = debounce((inputValue: string) => {
    dispatch(
      ADD({
        section: PROF_SUMMARY,
        data: { summary: inputValue },
      }),
    )
  }, 500)

  function handleTextArea(e: ChangeEvent<HTMLTextAreaElement>) {
    settextAreaValue(e.target.value)
    debouncedDispatch(e.target.value)
  }

  // custom hook
  const [selectedText, setSelectedText] = useSelectText()

  // * SELECTED TEXT EXEC
  function executeSelectDataToStore() {
    const modifiedDescription = addDotToSelectedLine(textArea, selectedText)
    settextAreaValue(modifiedDescription)
  }

  return (
    <div className=" px-4">
      {/* // * Professional Summary */}
      <h2 className="my-2 mb-1  block text-xl font-semibold 2xl:text-2xl">
        Professional Summary
      </h2>
      <p className=" mb-2  w-11/12 text-sm text-gray-400 2xl:text-base">
        Write 2-4 short & energetic sentences to interest the reader! Mention
        your role, experience & most importantly - your biggest achievements,
        best qualities and skills.
      </p>

      <TextArea
        handle={handleTextArea}
        mx="mx-auto   w-[99.95%] "
        name="profSummary"
        value={textArea}
        setData={(val: string) => setSelectedText(val)}
        executeSelectDataToStore={executeSelectDataToStore}
      />
      <p className="mt-[-15px] w-[95%] text-xs text-gray-500  2xl:text-sm">
        * Recruiter tip: write 50-500 characters to increase interview chances
      </p>
    </div>
  )
}

export default ProfessionalSummary
