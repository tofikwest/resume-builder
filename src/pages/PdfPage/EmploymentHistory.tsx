import React, { useState } from 'react'
import EmploymentForm from '../../components/EmploymentForm/EmploymentForm'

const EmploymentHistory: React.FC = () => {
  const [btnAddTrigger, setBtnAddTrigger] = useState<boolean>(false)

  function handleBtnAddTrigger() {
    setBtnAddTrigger((prev) => !prev)
    console.log(btnAddTrigger)
  }

  return (
    <>
      <h2 className="my-2 mb-1 ml-11 block text-xl font-semibold">
        Employment History
      </h2>
      <p className=" mb-2 ml-11 w-10/12 text-sm text-gray-400">
        Show your relevant experience
      </p>
      <button
        type="button"
        className="ml-11 flex w-[13%]  items-center gap-1 text-left text-sm text-additional-color hover:text-additional-hover-color"
        onClick={handleBtnAddTrigger}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>

        <p>Add employment</p>
      </button>
      {btnAddTrigger && <EmploymentForm />}
    </>
  )
}

export default EmploymentHistory
