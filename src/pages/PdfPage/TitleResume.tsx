import React from 'react'

const TitleResume = () => {
  return (
    <div className="relative w-3/3 h-10 text-center  mb-2 text-xl flex flex-col justify-center items-center">
      {/* //Title Of Resume  */}
      <input
        type="text"
        className="shadow-sm border border-solid border-x-0 border-t-0   focus:outline-none focus:outline bg-slate-50 rounded"
      />
      <button
        className="absolute right-[518px] 
        rounded-xl text-center "
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-4 h-4 text-additional-color
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
