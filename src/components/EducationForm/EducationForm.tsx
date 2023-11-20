import { ChangeEvent, useState, useEffect } from 'react'
import TextArea from '../TextArea/TextArea'
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import TextAreaBtns from '../TextAreaBTNS/TextAreaBtns'

const EducationForm: React.FC = () => {
  const [localData, setLocalData] = useState({
    school: '',
    start_date: '',
    end_date: '',
    employer: '',
    city: '',
    description: '',
  })

  const dispatch = useDispatch()

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        ADD({
          section: 'education',
          data: localData,
        }),
      )
    }, 300)
  }, [localData])

  function handleForm(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setLocalData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form className="mx-auto my-2 flex h-[510px] w-11/12 select-none flex-col   rounded  border-gray-300 font-form-family">
      <div className=" my-2 flex h-[210px] w-11/12 select-none flex-col flex-wrap  rounded  border-blue-300 font-form-family">
        <label
          htmlFor="school"
          className="mb-2 inline font-extralight text-gray-400"
        >
          School
        </label>
        <input
          className={`mb-2 block h-12 w-5/12 rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none `}
          type="text"
          id="school"
          name="school"
          onChange={handleForm}
          required
        />
        {/* ======== */}
        <label
          htmlFor="edu_date"
          className="mb-2 font-extralight text-gray-400"
        >
          Start & End Date
        </label>
        <div className="mb-4 flex w-5/12 items-center justify-between">
          <input
            className="block h-12 w-5/12  rounded border border-solid bg-input-bg p-2 text-center text-gray-400 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
            type="date"
            id="edu_date"
            name="start_date"
            onChange={handleForm}
            required
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="mb-2 h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>

          <input
            className=" block h-12 w-5/12 rounded border border-solid bg-input-bg p-2 text-center text-gray-400 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
            type="date"
            id="edu_date"
            name="end_date"
            onChange={handleForm}
            required
          />
        </div>
        {/* ====== */}
        <label
          htmlFor="employer"
          className="mb-2 ml-[78px] font-extralight text-gray-400"
        >
          Degree
        </label>
        <input
          className="mb-2 block h-12 w-5/12 self-end rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none "
          type="text"
          id="employer"
          name="employer"
          onChange={handleForm}
          required
        />
        <label
          htmlFor="city"
          className="mb-2 ml-[78px] font-extralight text-gray-400"
        >
          City
        </label>
        <input
          className="block h-12 w-5/12 self-end rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none "
          type="text"
          id="city"
          name="city"
          onChange={handleForm}
          required
        />
      </div>
      <TextAreaBtns left={2} />
      <TextArea
        mx=""
        handle={handleForm}
        name="description"
        placeholder={'e.g Graduated with High Honors'}
      />
    </form>
  )
}

export default EducationForm
