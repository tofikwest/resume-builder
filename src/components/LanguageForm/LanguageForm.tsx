import { ChangeEvent, useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { RootState } from '../../redux/store'

const LanguageForm: React.FC = () => {
  const [localData, setLocalData] = useState({
    language: '',
    level: '',
  })

  const dispatch = useDispatch()
  // const pdf = useSelector((state: RootState) => state.pdf)

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        ADD({
          section: 'languages',
          data: localData,
        }),
      )
    }, 300)
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
        <label htmlFor="language" className="font-light text-gray-400">
          Language
        </label>
        <input
          className={`mb-2 mt-3 block w-full rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none `}
          type="text"
          id="language"
          name="language"
          onChange={handleForm}
          required
        />
      </div>

      {/* ====== */}
      <div className='className="h-12 flex-1"> w-5/12'>
        <label htmlFor="levelLang" className="mb-2   font-light text-gray-400">
          Level
        </label>
        <input
          className="mb-2 mt-3 block w-full self-end rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none "
          type="text"
          id="levelLang"
          name="level"
          onChange={handleForm}
          required
        />
      </div>
    </form>
  )
}

export default LanguageForm
