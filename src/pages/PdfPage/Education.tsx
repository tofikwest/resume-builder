import { useState } from 'react'
import EducationForm from '../../components/EducationForm/EducationForm'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import UIEducationForm from '../../components/EducationForm/UIEducationForm'

const Education = () => {
  const [btnAddTrigger, setBtnAddTrigger] = useState<boolean>(false)

  const edu = useSelector((state: RootState) => state.pdf.education)

  function handleBtnAddTrigger() {
    setBtnAddTrigger((prev) => !prev)
    console.log(btnAddTrigger, edu)
  }

  console.log(edu)
  return (
    <>
      <h2 className="my-2 mb-1 ml-11 block text-xl font-semibold">Education</h2>
      <p className=" mb-2 ml-11 w-10/12 text-sm text-gray-400">
        A varied education on your resume sums up the value that your learnings
        and background will bring to job.
      </p>
      <button
        onClick={handleBtnAddTrigger}
        type="button"
        className="ml-11  flex w-[13%]  items-center gap-1 text-left text-sm text-additional-color hover:text-additional-hover-color"
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

        <p>Add education</p>
      </button>

      <ul>
        {edu.map((el) => (
          <li>
            <UIEducationForm el={el} />
          </li>
        ))}
      </ul>

      {btnAddTrigger && <EducationForm />}
    </>
  )
}

export default Education
