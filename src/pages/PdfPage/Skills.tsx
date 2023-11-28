import { useState } from 'react'
import SkillsForm from '../../components/SkillsForm/SkillsForm'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { ISkills } from '../../redux/pdf/types'
import { ADD, DEL } from '../../redux/pdf/pdfSlice'
import { SKILLS } from '../../redux/pdf/constants'

const Skills = () => {
  const [btnAddTrigger, setBtnAddTrigger] = useState<boolean>(false)
  const skillsList = useSelector((state: RootState) => state.pdf.skills)

  const suggestionsList = [
    'Project Management Skills',
    'Communication',
    'Highly Organized',
  ]
  const dispatch = useDispatch()

  function handleBtnAddTrigger() {
    setBtnAddTrigger((prev) => !prev)
  }

  function handleDeleteSkill(e: React.MouseEvent<HTMLButtonElement>) {
    dispatch(
      DEL({
        section: SKILLS,
        id: e.currentTarget.id,
      }),
    )
  }

  function handleAddSuggestions(e: React.MouseEvent<HTMLLIElement>) {
    dispatch(
      ADD({
        section: SKILLS,
        data: { skill: e.currentTarget.textContent!, level: 'Expert' },
      }),
    )
  }

  return (
    <>
      <h2 className="my-2 mb-1 ml-11 block text-xl font-semibold">Skills</h2>
      <p className=" mb-2 ml-11 w-10/12 text-sm text-gray-400">
        Choose 5 important skills that show you fit the position. Make sure they
        match the key skills mentioned in the job listing (especially when
        applying via an online system).
      </p>

      <ul
        id="skills-to-suggest"
        className="mb-4 ml-11 flex w-full max-w-xl flex-wrap gap-2"
      >
        {suggestionsList.map((el) => (
          <li
            onClick={handleAddSuggestions}
            className="flex cursor-pointer items-center justify-between gap-2 bg-gray-200 p-2"
            key={el}
          >
            {el}
          </li>
        ))}
      </ul>

      <button
        onClick={handleBtnAddTrigger}
        type="button"
        className="mb-3 ml-11 flex w-[20%]  items-center gap-1 text-left text-sm text-additional-color hover:text-additional-hover-color"
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
            <p>Add skill</p>
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

            <p>Hide skill panel</p>
          </>
        )}
      </button>

      <ul
        id="skills-list"
        className="ml-11 flex w-full max-w-xl flex-wrap gap-2"
      >
        {skillsList.map(({ skill, id }: ISkills) => (
          <li
            key={id}
            className="flex items-center justify-between gap-2 bg-gray-200 p-2"
          >
            {skill}
            <button id={id} onClick={handleDeleteSkill}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
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
