import { useState } from 'react'
import EducationForm from '../../components/EducationForm/EducationForm'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import UIEducationForm from '../../components/EducationForm/UIEducationForm'
import { DEL } from '../../redux/pdf/pdfSlice'
import { EDUCATION } from '../../redux/pdf/constants'

const Education = () => {
  const [btnAddTrigger, setBtnAddTrigger] = useState<boolean>(true)

  const edu = useSelector((state: RootState) => state.pdf.education)
  const dispatch = useDispatch()

  function handleBtnAddTrigger() {
    setBtnAddTrigger((prev) => !prev)
  }

  function handleDelEducation(e: React.MouseEvent<HTMLButtonElement>) {
    dispatch(
      DEL({
        section: EDUCATION,
        id: e.currentTarget.id,
      }),
    )
  }

  return (
    <>
      <h2 className="my-2 mb-1 ml-4 block text-xl font-semibold 2xl:text-2xl ">
        Education
      </h2>
      <p className=" mb-2 ml-4 w-10/12 text-sm text-gray-400 2xl:text-base">
        A varied education on your resume sums up the value that your learnings
        and background will bring to job.
      </p>
      <button
        onClick={handleBtnAddTrigger}
        type="button"
        className="ml-4 flex  w-fit items-center  gap-1 text-left text-sm text-additional-color hover:text-additional-hover-color 2xl:text-base"
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
            <p>Add education</p>
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
                fillRule="evenodd"
                d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                clipRule="evenodd"
              />
            </svg>

            <p>Hide education panel</p>
          </>
        )}
      </button>

      <ul className="relative">
        {edu.map((el) => (
          <li key={el.id} className="mb-2">
            <div className="relative flex items-start px-4">
              <UIEducationForm
                el={el}
                handleDelEducation={handleDelEducation}
              />
            </div>
          </li>
        ))}
      </ul>

      <div className="px-4 ">{btnAddTrigger && <EducationForm />}</div>
    </>
  )
}

export default Education
