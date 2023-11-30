import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { EMPLOYMENT_HISTORY } from '../../redux/pdf/constants'
import TextArea from '../TextArea/TextArea'

const EmploymentForm: React.FC = () => {
  const [isUnfold, setIsUnfold] = useState(false)
  const [currentWidth, setCurremtWidth] = useState<number>(window.innerWidth)
  const dispatch = useDispatch()

  const [localData, setLocalData] = useState({
    jobTitleHistory: '',
    start_date: '',
    end_date: '',
    employer: '',
    city: '',
    description: '',
  })

  useEffect(() => {
    window.addEventListener('resize', getCurrentWidth)

    return () => window.removeEventListener('resize', getCurrentWidth)
  }, [currentWidth])

  function handleSubmit() {
    if (Object.values(localData).some(Boolean)) {
      dispatch(
        ADD({
          section: EMPLOYMENT_HISTORY,
          data: localData,
        }),
      )
      setLocalData({
        jobTitleHistory: '',
        start_date: '',
        end_date: '',
        employer: '',
        city: '',
        description: '',
      })
    }
  }

  function handleForm(e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setLocalData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  function getCurrentWidth() {
    setCurremtWidth(window.innerWidth)
    console.log(window.innerWidth)
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="relative flex h-auto w-full select-none flex-col items-center rounded-xl border border-dashed border-additional-color p-4    md:flex-wrap lg:ml-3 lg:w-[91.6%]"
    >
      <div className="my-2 flex w-11/12 items-center justify-between">
        <legend className="self-start text-left font-bold">
          (Not specified)
        </legend>
        <button
          onClick={() => setIsUnfold((prev) => !prev)}
          type="button"
          className=" rounded-xl bg-additional-color p-1 text-white"
        >
          {isUnfold ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clip-rule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      {isUnfold && (
        <>
          <div className=" flex h-auto w-11/12 select-none flex-col rounded border-blue-300    md:flex-row md:flex-wrap ">
            <label
              htmlFor="jobTitleHistory"
              className="mb-2 inline font-extralight  text-gray-400 md:w-[50%]"
            >
              Job Title
              <input
                className={` mb-2 mt-1 block h-12 w-full  rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-10/12`}
                type="text"
                id="jobTitleHistory"
                name="jobTitleHistory"
                onChange={handleForm}
                value={localData.jobTitleHistory}
              />
            </label>

            <label
              htmlFor="employer"
              className="mb-2 font-extralight text-gray-400 md:flex md:w-[50%] md:flex-col md:self-end "
            >
              <p className="mb-1 md:ml-14 lg:ml-[65px] xl:ml-12">Employer</p>
              <input
                className="mb-2 block h-12 w-full self-end rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-10/12"
                type="text"
                id="employer"
                name="employer"
                onChange={handleForm}
                value={localData.employer}
              />
            </label>

            <label
              htmlFor="date"
              className="mb-2 font-extralight text-gray-400 md:w-[50%]"
            >
              Start & End Date
              <div className="mb-4 flex items-center justify-between pt-1 md:flex md:w-10/12 ">
                <input
                  className="mr-2  block h-12 w-5/12 rounded border border-solid bg-input-bg p-2 text-center text-sm text-gray-800 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
                  type="month"
                  lang="en"
                  id="date"
                  name="start_date"
                  onChange={handleForm}
                  value={localData.start_date}
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="mr-2 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                  />
                </svg>

                <input
                  className=" block h-12 w-5/12 rounded border border-solid bg-input-bg p-2 text-center text-sm text-gray-800 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
                  type="month"
                  lang="en"
                  id="end_date"
                  name="end_date"
                  onChange={handleForm}
                  value={localData.end_date}
                />
              </div>
            </label>

            <label
              htmlFor="city_employment"
              className="mb-2  font-extralight text-gray-400 md:flex md:w-[50%] md:flex-col md:self-end "
            >
              <p className="mb-1 md:ml-14 lg:ml-[65px] xl:ml-12">City</p>
              <input
                className="mb-10 block h-12 w-full rounded border border-solid bg-input-bg p-2 py-1 text-gray-800 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-10/12 md:self-end"
                type="text"
                id="city_employment"
                name="city"
                onChange={handleForm}
                value={localData.city}
              />
            </label>
          </div>
          <TextArea
            mx="text-gray-800"
            handle={handleForm}
            value={localData.description}
            name="description"
            placeholder={
              'e.g Close 3 Senior PR Manager roles in first 2 month.'
            }
          />
          <button
            onClick={handleSubmit}
            className=" h-full  w-5/12 rounded  bg-additional-color p-2 text-gray-100"
          >
            Submit
          </button>
        </>
      )}
    </form>
  )
}

export default EmploymentForm
