import React from 'react'

const Education = () => {
  return (
    <>
      <h2 className="ml-14 block my-2 mb-1 text-xl font-semibold">Education</h2>
      <p className=" ml-14 text-gray-400 text-sm mb-2 w-10/12">
        A varied education on your resume sums up the value that your learnings
        and background will bring to job.
      </p>
      <button
        type="button"
        className="ml-14  w-[11%] gap-1  flex items-center text-left text-sm text-additional-color hover:text-additional-hover-color"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>

        <p>Add education</p>
      </button>
    </>
  )
}

export default Education
