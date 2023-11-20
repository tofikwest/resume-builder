import React, { ChangeEvent, useState } from 'react'
import { IPdfStructure } from '../BuilderPage/BuilderPage'
import { useDispatch, useSelector } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { RootState } from '../../redux/store'

const TitleResume: React.FC = () => {
  const [title, setTitle] = useState('')

  const dispatch = useDispatch()

  function handleTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value)

    dispatch(
      ADD({
        section: 'title',
        data: title,
      }),
    )
  }

  return (
    <div className="w-3/3 relative mb-2 flex  h-10 flex-col items-center justify-center text-center text-xl">
      {/* //Title Of Resume  */}
      <input
        onChange={handleTitle}
        type="text"
        className="rounded border border-x-0 border-t-0 border-solid   bg-slate-50 shadow-sm focus:outline-none focus:outline"
      />
      <button
        className="absolute right-[408px] 
        rounded-xl text-center "
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-4 w-4 text-additional-color
           hover:text-additional-hover-color"
        >
          <path
            fill-rule="evenodd"
            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
  )
}

export default TitleResume
