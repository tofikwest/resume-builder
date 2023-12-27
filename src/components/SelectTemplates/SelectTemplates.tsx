import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { TEMPLATE_NAME } from '../../redux/pdf/constants'
import { templatesName } from '../../helpers/constants/resumeTemplateNames'
import { ADD } from '../../redux/pdf/pdfSlice'

import templateArr from '../../helpers/resumeTemplatesList'

// templateArr [Dublin, London]

const SelectTemplates: React.FC = () => {
  const [templateIdx, setTemplateIdx] = useState<number>(0)
  const dispatch = useDispatch()

  const dispatchSender = (inputValue: string) => {
    dispatch(
      ADD({
        section: TEMPLATE_NAME,
        data: { currentTemplateName: inputValue },
      }),
    )
  }

  function reportAboutCurrentTemplate() {
    if (templateIdx === 0) {
      dispatchSender(templatesName.dublin)
    } else {
      dispatchSender(templatesName.london)
    }
  }

  function accardion(direction: string = 'right') {
    if (direction === 'right') {
      if (templateArr[templateIdx + 1]) {
        setTemplateIdx((prev) => prev + 1)
      } else {
        setTemplateIdx(0)
      }
    } else {
      if (templateArr[templateIdx - 1]) {
        setTemplateIdx((prev) => prev - 1)
      } else {
        setTemplateIdx(1)
      }
    }
  }

  return (
    <div className="fixed right-0 top-0 z-20 float-right flex h-screen w-screen items-center  justify-center bg-gray-900 xl:right-0 xl:top-[5%] xl:w-6/12 xl:gap-20 xl:bg-inherit">
      <div className="relative flex flex-col items-center justify-center p-2   xl:gap-10">
        {/* CURRENT TEMPLATE */}
        {templateArr[templateIdx]}

        <div className="mt-10 flex gap-20">
          {/* LEFT */}
          <button
            onClick={() => accardion('left')}
            className="h-fit text-white hover:text-slate-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {/* RIGHT */}
          <button
            onClick={() => accardion('right')}
            className="h-fit text-white hover:text-slate-900"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
            >
              <path
                fillRule="evenodd"
                d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* BTN FOR CHOOSE CURRENT TEMPLATE */}
        <button
          onClick={reportAboutCurrentTemplate}
          className="absolute top-[42%] max-w-[50%] self-center rounded-lg border border-additional-color bg-additional-color  p-3 text-center text-gray-100  shadow-[0px_6px_30px_3px_rgba(34,60,80,0.2)] shadow-gray-700 hover:bg-additional-hover-color xl:right-[40.5%]"
        >
          Use this template
        </button>
      </div>
    </div>
  )
}

export default SelectTemplates
