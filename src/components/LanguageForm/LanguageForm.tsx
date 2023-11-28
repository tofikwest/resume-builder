import { ChangeEvent, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { RootState } from '../../redux/store'
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
      className=" mx-10 my-4 flex h-full w-7/12 select-none   justify-between rounded-xl  border border-dashed border-gray-300 p-4 font-form-family"
    >
      <div className="">
        <label htmlFor="language" className="font-light text-gray-400">
          Language
        </label>
        <input
          className={`  block w-full rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none `}
          type="text"
          id="language"
          name="language"
          onChange={handleForm}
          value={localData.language}
        />
      </div>

      {/* ====== */}
      <div>
        <label htmlFor="level" className="block font-light text-gray-400">
          Level
        </label>
        <input
          className="  block w-full self-end rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none "
          type="text"
          id="levelLang"
          name="level"
          onChange={handleForm}
          value={localData.level}
        />
      </div>
      <button
        onClick={handleSubmit}
        className=" h-[42px] self-end rounded  bg-additional-color p-2 text-gray-100"
      >
        Save
      </button>
    </form>
  )
}

export default LanguageForm
