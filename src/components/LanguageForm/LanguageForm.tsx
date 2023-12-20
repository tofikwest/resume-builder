import { ChangeEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { ILanguage } from '../../redux/pdf/types'
import { LANGUAGES } from '../../redux/pdf/constants'

interface IProps {
  handleBtnAddTrigger: () => void
}

const LanguageForm: React.FC<IProps> = (props: IProps) => {
  const { handleBtnAddTrigger } = props
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
      className="my-4 ml-4 flex h-full w-11/12 select-none flex-col justify-between gap-4 rounded-xl border border-dashed border-gray-300  p-4 font-form-family  md:h-[105px]  md:w-[96%] md:flex-row lg:w-[96.4%] 2xl:text-lg"
    >
      <div className="md:flex md:gap-14 xl:gap-5">
        <label htmlFor="language" className="font-light text-gray-400">
          Language
          <input
            className={` block w-full rounded border border-solid bg-input-bg p-2 text-black placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none `}
            type="text"
            id="language"
            name="language"
            onChange={handleForm}
            value={localData.language}
          />
        </label>

        <label
          htmlFor="levelLang"
          className="mt-2 block font-light text-gray-400  md:mt-0 lg:mt-0"
        >
          Level
          <input
            className="block w-full self-end rounded border border-solid bg-input-bg p-2 text-black placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none"
            type="text"
            id="levelLang"
            name="level"
            onChange={handleForm}
            value={localData.level}
          />
        </label>
      </div>

      <div className="flex justify-center gap-2 md:mb-[6px] md:w-4/12 md:self-end  lg:mb-[6px] 2xl:mb-[-1.5px]">
        <button
          onClick={handleSubmit}
          className="w-6/12 rounded bg-additional-color  p-1   text-gray-100 hover:bg-additional-hover-color focus:bg-additional-hover-color"
        >
          Save
        </button>
        <button
          onClick={handleBtnAddTrigger}
          className="rounded bg-slate-600 p-2 text-gray-100 hover:bg-slate-700 focus:bg-slate-700 "
        >
          Cancel
        </button>
      </div>
    </form>
  )
}

export default LanguageForm
