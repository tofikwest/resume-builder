import { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { EMPLOYMENT_HISTORY } from '../../redux/pdf/constants'
import TextArea from '../TextArea/TextArea'
import useSelectText from '../../customHooks/useSelectText'
import { addDotToSelectedLine } from '../../helpers/handleSelectText'

export interface ILocalData {
  jobTitleHistory: string
  start_date: string
  end_date: string
  employer: string
  city: string
  description: string
}

const EmploymentForm: React.FC = () => {
  const [isUnfold, setIsUnfold] = useState(true)
  const [currentWidth, setCurremtWidth] = useState<number>(window.innerWidth)
  const dispatch = useDispatch()

  const [localData, setLocalData] = useState<ILocalData>({
    jobTitleHistory: '',
    start_date: '',
    end_date: '',
    employer: '',
    city: '',
    description: '',
  })

  // custom hook
  const [selectedText, setSelectedText] = useSelectText()

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

  // * SELECTED TEXT EXEC
  function executeSelectDataToStore() {
    const modifiedDescription = addDotToSelectedLine(
      localData.description,
      selectedText,
    )
    setLocalData((prev) => ({
      ...prev,
      description: modifiedDescription,
    }))
  }

  function getCurrentWidth() {
    setCurremtWidth(window.innerWidth)
  }

  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className={`relative flex h-auto w-full select-none flex-col items-center rounded-xl border border-dashed border-additional-color md:w-[89.5%]  md:flex-wrap lg:w-[90.6%] 2xl:text-lg ${
        isUnfold && 'p-4 pb-6'
      } `}
    >
      <div
        className={`flex w-11/12 cursor-pointer items-center justify-between ${
          !isUnfold ? 'p-4 py-6 ' : 'py-2'
        }`}
        onClick={() => setIsUnfold((prev) => !prev)}
      >
        <legend className="self-start text-left font-bold 2xl:text-lg">
          (Not specified)
        </legend>
        <button
          type="button"
          className=" rounded-xl bg-additional-color p-1 text-white"
        >
          {isUnfold ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 12h-15"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
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
              className="mb-2 inline font-light  text-gray-400 md:w-[50%]"
            >
              Job Title
              <input
                className={` mb-2 mt-1 block h-12 w-full  rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-light focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-10/12`}
                type="text"
                id="jobTitleHistory"
                name="jobTitleHistory"
                onChange={handleForm}
                value={localData.jobTitleHistory}
              />
            </label>

            <label
              htmlFor="employer"
              className="mb-2 font-light text-gray-400 md:flex md:w-[50%] md:flex-col md:self-end "
            >
              <p className="mb-1 md:ml-14 lg:ml-[65px] xl:ml-12 2xl:ml-[62px]">
                Employer
              </p>
              <input
                className="mb-2 block h-12 w-full self-end rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-light focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-10/12"
                type="text"
                id="employer"
                name="employer"
                onChange={handleForm}
                value={localData.employer}
              />
            </label>

            <label
              htmlFor="date"
              className="mb-2 font-light text-gray-400 md:w-[50%]"
            >
              Start & End Date
              <div className="mb-4 flex items-center justify-between pt-1 md:flex md:w-10/12 ">
                <input
                  className="mr-2  block h-12 w-5/12 rounded border border-solid bg-input-bg p-1 text-center text-xs text-gray-800 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
                  type="date"
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
                  className=" block h-12 w-5/12 rounded border border-solid bg-input-bg p-1 text-center text-xs text-gray-800 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
                  type="date"
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
              className="mb-2  font-light text-gray-400 md:flex md:w-[50%] md:flex-col md:self-end "
            >
              <p className="mb-1 md:ml-14 lg:ml-[65px] xl:ml-12 2xl:ml-[62px]">
                City
              </p>
              <input
                className="mb-10 block h-12 w-full rounded border border-solid bg-input-bg p-2 py-1 text-gray-800 placeholder:font-light focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-10/12 md:self-end"
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
            setData={(val: string) => setSelectedText(val)}
            executeSelectDataToStore={executeSelectDataToStore}
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
