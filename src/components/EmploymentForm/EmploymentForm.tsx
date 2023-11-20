import { ChangeEvent, useState, useEffect } from 'react'
import TextArea from '../TextArea/TextArea'
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import TextAreaBtns from '../TextAreaBTNS/TextAreaBtns'

const EmploymentForm: React.FC = () => {
  const [localData, setLocalData] = useState({
    jobTitleHistory: '',
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
          section: 'employmentHistory',
          data: localData,
        }),
      )
    }, 300)
  }, [localData])

  function handleForm(e: ChangeEvent<HTMLTextAreaElement>) {
    setLocalData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <form className="mx-auto my-2 flex h-[510px] w-11/12 select-none flex-col   rounded  border-blue-300 font-form-family">
      <div className=" my-2 flex h-[210px] w-11/12 select-none flex-col flex-wrap  rounded  border-blue-300 font-form-family">
        <label
          htmlFor="jobTitleHistory"
          className="mb-2 inline font-extralight text-gray-400"
        >
          Job Title
        </label>
        <input
          className={`mb-2 block h-12 w-5/12 rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none `}
          type="text"
          id="jobTitleHistory"
          name="jobTitleHistory"
          required
        />
        {/* ======== */}
        <label htmlFor="date" className="mb-2 font-extralight text-gray-400">
          Start & End Date
        </label>
        <div className="mb-4 flex w-5/12 items-center justify-between">
          <input
            className="block h-12 w-5/12  rounded border border-solid bg-input-bg p-2 text-center text-gray-400 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
            type="date"
            id="date"
            name="start_date"
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
            id="end_date"
            name="end_date"
            required
          />
        </div>
        {/* ====== */}
        <label
          htmlFor="employer"
          className="mb-2 ml-[78px] font-extralight text-gray-400"
        >
          Employer
        </label>
        <input
          className="mb-2 block h-12 w-5/12 self-end rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none "
          type="text"
          id="employer"
          name="employer"
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
          required
        />
      </div>
      <TextAreaBtns left={2} />
      <TextArea
        mx=""
        handle={handleForm}
        name="description"
        placeholder={'e.g Close 3 Senior PR Manager roles in first 2 month.'}
      />
    </form>
  )
}

export default EmploymentForm
