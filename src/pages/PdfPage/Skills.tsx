import { useState } from 'react'
import SkillsForm from '../../components/SkillsForm/SkillsForm'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/store'
import { ISkills } from '../../redux/pdf/types'
import { ADD, DEL } from '../../redux/pdf/pdfSlice'
import { SKILLS } from '../../redux/pdf/constants'

const Skills = () => {
  const [btnAddTrigger, setBtnAddTrigger] = useState<boolean>(true)
  const skillsList = useSelector((state: RootState) => state.pdf.skills)

  const suggestionsList = [
    {
      id: 1,
      skill: 'Project Management Skills',
    },
    {
      id: 2,
      skill: 'Communication',
    },
    {
      id: 3,
      skill: 'Highly Organized',
    },
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
      <h2 className="my-2 mb-1 block pl-5 text-xl font-semibold 2xl:text-2xl">
        Skills
      </h2>
      <p className=" mb-2 w-10/12 pl-4 text-sm text-gray-400 2xl:text-base">
        Choose 5 important skills that show you fit the position. Make sure they
        match the key skills mentioned in the job listing (especially when
        applying via an online system).
      </p>

      <ul
        id="skills-to-suggest"
        className="mb-4 flex w-full max-w-xl flex-wrap gap-2 pl-5 2xl:text-base"
      >
        {suggestionsList
          .filter((el) => !skillsList.some((s) => s.skill === el.skill))
          .map(({ skill, id }) => (
            <li
              onClick={handleAddSuggestions}
              className="flex cursor-pointer items-center justify-between gap-2 bg-gray-200 p-2"
              key={id}
            >
              {skill}
            </li>
          ))}
      </ul>

      <button
        onClick={handleBtnAddTrigger}
        type="button"
        className="mb-3 ml-4 flex w-fit items-center  gap-1 text-left text-sm text-additional-color hover:text-additional-hover-color 2xl:text-base"
      >
        {!btnAddTrigger && (
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
        )}
      </button>

      <ul
        id="skills-list"
        className=" mb-4 ml-5 flex w-[98%] max-w-xl flex-wrap gap-2 pr-4 2xl:text-base"
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
      {btnAddTrigger && (
        <SkillsForm handleBtnAddTrigger={handleBtnAddTrigger} />
      )}
    </>
  )
}

export default Skills
