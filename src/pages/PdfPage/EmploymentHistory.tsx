import React, { useState } from 'react'
import EmploymentForm from '../../components/EmploymentForm/EmploymentForm'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import UIEmploymentForm from '../../components/EmploymentForm/UIEmploymentForm'
import { DEL } from '../../redux/pdf/pdfSlice'
import { EMPLOYMENT_HISTORY } from '../../redux/pdf/constants'

const EmploymentHistory: React.FC = () => {
  const [btnAddTrigger, setBtnAddTrigger] = useState<boolean>(false)
  const employmnetList = useSelector(
    (state: RootState) => state.pdf.employmentHistory,
  )
  const dispatch = useDispatch()

  function handleBtnAddTrigger() {
    setBtnAddTrigger((prev) => !prev)
  }

  function handleDelEducation(e: React.MouseEvent<HTMLButtonElement>) {
    dispatch(
      DEL({
        section: EMPLOYMENT_HISTORY,
        id: e.currentTarget.id,
      }),
    )
  }
  return (
    <>
      <h2 className="my-2 mb-1 ml-4 block text-xl font-semibold lg:ml-11">
        Employment History
      </h2>
      <p className=" mb-2 ml-4 w-10/12 text-sm text-gray-400 lg:ml-11">
        Show your relevant experience
      </p>
      <button
        type="button"
        className="ml-4 flex w-fit items-center  gap-1 text-left text-sm text-additional-color hover:text-additional-hover-color lg:ml-11"
        onClick={handleBtnAddTrigger}
      >
        {!btnAddTrigger ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            <p>Add employment</p>{' '}
          </>
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                clip-rule="evenodd"
              />
            </svg>

            <p>Hide employment panel</p>
          </>
        )}
      </button>

      <ul>
        {employmnetList.map((el) => (
          <li key={el.id}>
            <div className="flex items-start">
              <UIEmploymentForm el={el} />
              <button
                className="absolute top-0 h-full text-gray-300 hover:text-additional-hover-color lg:mt-8"
                id={el.id}
                onClick={handleDelEducation}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-8 w-8  "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
                  />
                </svg>
              </button>
            </div>
          </li>
        ))}
      </ul>

      {btnAddTrigger && <EmploymentForm />}
    </>
  )
}

export default EmploymentHistory
