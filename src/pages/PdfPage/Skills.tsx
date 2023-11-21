import { useState } from 'react'
import SkillsForm from '../../components/SkillsForm/SkillsForm'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { ISkills } from '../../redux/pdf/types'

const Skills = () => {
  const [btnAddTrigger, setBtnAddTrigger] = useState<boolean>(false)
  const skillsList = useSelector((state: RootState) => state.pdf.skills)

  function handleBtnAddTrigger() {
    setBtnAddTrigger((prev) => !prev)
    console.log(btnAddTrigger)
  }

  console.log(skillsList)
  return (
    <>
      <h2 className="my-2 mb-1 ml-11 block text-xl font-semibold">Skills</h2>
      <p className=" mb-2 ml-11 w-10/12 text-sm text-gray-400">
        Choose 5 important skills that show you fit the position. Make sure they
        match the key skills mentioned in the job listing (especially when
        applying via an online system).
      </p>
      <button
        onClick={handleBtnAddTrigger}
        type="button"
        className="mb-3 ml-11 flex w-[13%]  items-center gap-1 text-left text-sm text-additional-color hover:text-additional-hover-color"
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

        <p>Add skill</p>
      </button>

      <ul id="skills-list" className="ml-11 flex w-[628px] flex-wrap gap-2">
        <li className="flex items-center justify-between gap-2 bg-gray-200 p-2">
          Project Management Skills
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
        <li className="flex items-center justify-between gap-2 bg-gray-200 p-2">
          Communication
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
        <li className="flex items-center justify-between gap-2 bg-gray-200 p-2">
          Highly Organized
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
        {skillsList.map(({ level, skill }: ISkills) => (
          <li className="flex items-center justify-between gap-2 bg-gray-200 p-2">
            {skill} {level}
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
      {btnAddTrigger && <SkillsForm />}
    </>
  )
}

export default Skills
