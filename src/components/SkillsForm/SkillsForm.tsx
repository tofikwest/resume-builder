import { ChangeEvent, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { RootState } from '../../redux/store'

const SkillsForm: React.FC = () => {
  const [localData, setLocalData] = useState({
    skill: '',
    level: '',
  })

  const dispatch = useDispatch()
  // const pdf = useSelector((state: RootState) => state.pdf)

  useEffect(() => {
    setTimeout(() => {
      if (localData.skill && localData.level) {
        console.log('object')
        dispatch(
          ADD({
            section: 'skills',
            data: localData,
          }),
        )
        setLocalData({ skill: '', level: '' })
      }
    }, 1000)
  }, [localData])

  function handleForm(e: ChangeEvent<HTMLInputElement>) {
    setLocalData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form className="mx-auto my-4 flex h-full w-11/12 select-none justify-between   rounded-xl  border border-dashed border-gray-300 p-4 font-form-family">
      <div className="h-12 w-5/12">
        <label htmlFor="skill" className="font-light text-gray-400">
          Skill
        </label>
        <input
          className={`mb-2 mt-3 block w-full rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none `}
          type="text"
          id="skill"
          name="skill"
          onChange={handleForm}
          value={localData.skill}
          required
        />
      </div>

      {/* ====== */}
      <div className='className="h-12 flex-1"> w-5/12'>
        <label htmlFor="level" className="mb-2   font-light text-gray-400">
          Level
        </label>
        <input
          className="mb-2 mt-3 block w-full self-end rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none "
          type="text"
          id="level"
          name="level"
          onChange={handleForm}
          value={localData.level}
          required
        />
      </div>
    </form>
  )
}

export default SkillsForm
