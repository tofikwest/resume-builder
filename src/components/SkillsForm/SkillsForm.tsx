import { ChangeEvent, useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { ISkills } from '../../redux/pdf/types'
import { SKILLS } from '../../redux/pdf/constants'

const SkillsForm: React.FC = () => {
  const [localData, setLocalData] = useState<ISkills>({
    skill: '',
    level: '',
  })

  const dispatch = useDispatch()

  function handleSubmit() {
    if (localData.skill && localData.level) {
      dispatch(
        ADD({
          section: SKILLS,
          data: localData,
        }),
      )
    }
    setLocalData({ skill: '', level: '' })
  }
  function handleForm(e: ChangeEvent<HTMLInputElement>) {
    setLocalData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className=" mx-4 ml-4 flex h-full select-none flex-col justify-between rounded-xl border   border-dashed border-gray-300  p-4 font-form-family lg:mx-10 lg:w-7/12 lg:flex-row"
    >
      <div className="">
        <label htmlFor="skill" className="font-light text-gray-400">
          Skill
        </label>
        <input
          className={`  block w-full rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none `}
          type="text"
          id="skill"
          name="skill"
          onChange={handleForm}
          value={localData.skill}
        />
      </div>

      {/* ====== */}
      <div>
        <label htmlFor="level" className="mt-2 block font-light text-gray-400 ">
          Level
        </label>
        <input
          className="  block w-full self-end rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none "
          type="text"
          id="level"
          name="level"
          onChange={handleForm}
          value={localData.level}
        />
      </div>
      <button
        onClick={handleSubmit}
        className=" mt-4 h-[42px] w-full  self-end rounded  bg-additional-color p-2 text-gray-100"
      >
        Save
      </button>
    </form>
  )
}

export default SkillsForm
