import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { ILanguage } from '../../redux/pdf/types'
import { LANGUAGES } from '../../redux/pdf/constants'

const LanguageForm: React.FC = () => {
  const [localData, setLocalData] = useState<ILanguage>({
    language: '',
    level: '',
  })

  const dispatch = useDispatch()
  // const pdf = useSelector((state: RootState) => state.pdf)

  function handleForm(e: ChangeEvent<HTMLInputElement>) {
    setLocalData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  function handleSubmit() {
    if (localData.language && localData.level) {
      dispatch(
        ADD({
          section: LANGUAGES,
          data: localData,
        }),
      )
    }
    setLocalData({ level: '', language: '' })
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className=" mx-4 ml-4 flex h-full select-none flex-col justify-between rounded-xl border border-dashed   border-gray-300 p-4  md:w-[58%] lg:w-[48%] 2xl:text-lg"
    >
      <div className="lg:flex lg:gap-14 xl:gap-5 ">
        <label htmlFor="language" className="font-light text-gray-400">
          Language
          <input
            className={`mt-1  block w-full rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none `}
            type="text"
            id="language"
            name="language"
            onChange={handleForm}
            value={localData.language}
          />
        </label>

        <label
          htmlFor="level"
          className="mt-2 block font-light text-gray-400 lg:mt-0"
        >
          Level
          <input
            className="mt-1  block w-full self-end rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none"
            type="text"
            id="levelLang"
            name="level"
            onChange={handleForm}
            value={localData.level}
          />
        </label>
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

export default LanguageForm
