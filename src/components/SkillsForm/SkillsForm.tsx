import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { ISkills } from '../../redux/pdf/types'
import { SKILLS } from '../../redux/pdf/constants'

interface IProps {
  handleBtnAddTrigger: () => void
}
const SkillsForm: React.FC<IProps> = (props) => {
  const { handleBtnAddTrigger } = props
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
      className=" mx-4 ml-4 flex h-full select-none flex-col justify-between rounded-xl border   border-dashed border-gray-300  p-4  md:w-[58%] lg:w-[62%] 2xl:text-lg"
    >
      <div className=" lg:flex lg:gap-14 xl:gap-5">
        <label htmlFor="skill" className="font-light text-gray-400">
          Skill
          <input
            className={`mt-1  block w-full rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none `}
            type="text"
            id="skill"
            name="skill"
            onChange={handleForm}
            value={localData.skill}
          />
        </label>

        <label
          htmlFor="level"
          className="mt-2 block font-light text-gray-400 lg:mt-0 "
        >
          Level
          <input
            className="mt-1  block w-full self-end rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none"
            type="text"
            id="level"
            name="level"
            onChange={handleForm}
            value={localData.level}
          />
        </label>
      </div>

      <div className="mt-4  flex gap-2 self-end  md:w-7/12">
        <button
          onClick={handleSubmit}
          className=" mt-4 h-[42px] w-full rounded  bg-additional-color p-2  text-gray-100 hover:bg-additional-hover-color focus:bg-additional-hover-color"
        >
          Save
        </button>
        <button
          onClick={handleBtnAddTrigger}
          className=" mt-4 h-[42px]  rounded bg-red-400 p-2 text-gray-100 hover:bg-red-500 focus:bg-red-500 "
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default SkillsForm
