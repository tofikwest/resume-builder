import { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { IEducation } from '../../redux/pdf/types'
import { EDUCATION } from '../../redux/pdf/constants'
import { RootState } from '../../redux/store'
import useSelectText from '../../customHooks/useSelectText'
import {
  addDotToSelectedLine,
  selectedTextFunc,
} from '../../helpers/handleSelectText'

const EducationForm: React.FC = () => {
  const edu = useSelector((state: RootState) => state.pdf.education)

  const [isUnfold, setIsUnfold] = useState(true)

  const [localData, setLocalData] = useState<IEducation>({
    school: '',
    start_date: '',
    end_date: '',
    degree: '',
    city: '',
    description: '',
  })

  // custom hook
  const [selectedText, setSelectedText] = useSelectText()

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

  const dispatch = useDispatch()

  function handleSubmit() {
    if (Object.values(localData).some(Boolean)) {
      dispatch(
        ADD({
          section: EDUCATION,
          data: localData,
        }),
      )

      setLocalData({
        school: '',
        start_date: '',
        end_date: '',
        degree: '',
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

  return (
    <>
      <form
        id={edu.at(-1)?.id}
        onSubmit={(e) => e.preventDefault()}
        className={`relative flex h-auto w-full select-none flex-col items-center rounded-xl  ${
          isUnfold && 'border border-dashed border-additional-color p-4 pb-6 '
        }  2xl:text-lg`}
      >
        <div
          className={`flex w-full cursor-pointer items-center justify-between  ${
            !isUnfold
              ? 'rounded-2xl border border-dashed border-additional-color  p-4 py-6 shadow-lg '
              : 'py-2'
          }`}
          onClick={() => setIsUnfold((prev) => !prev)}
        >
          <legend className="ml-3 self-start font-bold md:ml-7 lg:ml-11 xl:ml-5 2xl:ml-9 2xl:text-lg">
            (Not specified)
          </legend>
          <button
            type="button"
            className=" rounded-xl bg-additional-color p-1 text-white hover:bg-additional-hover-color focus:bg-additional-hover-color"
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
            <div className="flex h-auto w-11/12 select-none flex-col rounded border-blue-300  md:flex-row md:flex-wrap ">
              <label
                htmlFor="school"
                className="mb-2 inline w-full font-light text-gray-400 md:w-[50%]"
              >
                School
                <input
                  className={`mb-2 mt-1 block h-12 w-full rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-light focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-10/12 `}
                  type="text"
                  id="school"
                  name="school"
                  onChange={handleForm}
                  value={localData.school}
                />
              </label>

              <label
                htmlFor="degree"
                className="mb-2 w-full font-light text-gray-400 md:flex md:w-[50%] md:flex-col md:self-end "
              >
                <p className="mb-1">Degree</p>
                <input
                  className="mb-2 block h-12 w-full self-end rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-light focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-full"
                  type="text"
                  id="degree"
                  name="degree"
                  onChange={handleForm}
                  value={localData.degree}
                />
              </label>

              <label
                htmlFor="edu_date"
                className="mb-2 font-light text-gray-400 md:w-[50%]"
              >
                Start & End Date
                <div className="mb-4 mt-1 flex items-center justify-between pt-1 md:flex md:w-10/12 ">
                  <input
                    className="mr-2  block h-12 w-5/12 rounded border border-solid bg-input-bg p-1 text-center text-[10px] text-gray-800 focus:border-b-2  focus:border-b-additional-color focus:outline-none md:text-xs"
                    type="date"
                    lang="en"
                    id="edu_date"
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
                    className="mb-2 h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                    />
                  </svg>

                  <input
                    className="  block h-12 w-5/12 rounded border border-solid bg-input-bg p-1 text-center text-[10px] text-gray-800 focus:border-b-2 focus:border-b-additional-color focus:outline-none md:text-xs"
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
                htmlFor="city_edu"
                className="mb-2  font-light text-gray-400 md:flex md:w-[50%] md:flex-col md:self-end "
              >
                <p className="mb-1">City</p>
                <input
                  className="mb-10 block h-12 w-full rounded border border-solid bg-input-bg p-2 py-1 text-gray-800 placeholder:font-light focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-full md:self-end "
                  type="text"
                  id="city_edu"
                  name="city"
                  onChange={handleForm}
                  value={localData.city}
                />
              </label>
            </div>
            <div className="flex w-11/12 items-center  py-2 ">
              <button
                onClick={executeSelectDataToStore}
                type="button"
                className=" w-fit rounded-sm border border-solid border-gray-300 bg-slate-200 px-1 text-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 4.75A.75.75 0 016.75 4h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.75zM6 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 10zm0 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM1.99 4.75a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 15.25a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 10a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V10z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <p className="ml-2 text-xs text-gray-400">
                - Select all line and click to button
              </p>
            </div>
            <textarea
              onChange={handleForm}
              onSelect={() => selectedTextFunc(setSelectedText)}
              name="description"
              id="description"
              className={`mx-0 mb-4  w-11/12 rounded border border-solid bg-input-bg p-4  font-light  text-gray-800 focus:outline-none `}
              rows={10}
              placeholder="e.g something"
              value={localData.description}
              maxLength={200}
            ></textarea>
            <button
              onClick={handleSubmit}
              className=" h-full  w-5/12 rounded  bg-additional-color p-2 text-gray-100"
            >
              Submit
            </button>
          </>
        )}
      </form>
    </>
  )
}

export default EducationForm
