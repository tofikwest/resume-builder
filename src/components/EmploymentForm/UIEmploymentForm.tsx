import React, { useRef, useState } from 'react'
import { IEmploymentHistory } from '../../redux/pdf/types'
import { useDispatch } from 'react-redux'
import { CHANGE } from '../../redux/pdf/pdfSlice'
import { EMPLOYMENT_HISTORY } from '../../redux/pdf/constants'
import useSelectText from '../../customHooks/useSelectText'
import {
  addDotToSelectedLine,
  selectedTextFunc,
} from '../../helpers/handleSelectText'

interface IProps {
  el: IEmploymentHistory
  handleDelEmployment: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const UIEmploymentForm: React.FC<IProps> = ({ el, handleDelEmployment }) => {
  const formRef = useRef<HTMLFormElement>(null)

  const [isUnfold, setIsUnfold] = useState(false)
  const [input, setChangeInput] = useState<IEmploymentHistory>({
    jobTitleHistory: el.jobTitleHistory,
    start_date: el.start_date,
    end_date: el.end_date,
    employer: el.employer,
    city: el.city,
    description: el.description,
  })

  const dispatch = useDispatch()

  // custom hook
  const [selectedText, setSelectedText] = useSelectText()

  function handleInput(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) {
    setChangeInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    dispatch(
      CHANGE({
        section: EMPLOYMENT_HISTORY,
        data: input,
        id: el.id!,
      }),
    )
  }

  // * SELECTED TEXT EXEC
  function executeSelectDataToStore() {
    const modifiedDescription = addDotToSelectedLine(
      input.description,
      selectedText,
    )
    setChangeInput((prev) => ({
      ...prev,
      description: modifiedDescription,
    }))
  }

  return (
    <form
      ref={formRef}
      id={el.id}
      onSubmit={handleSubmit}
      className={`relative flex h-auto w-full select-none flex-col items-center rounded-xl  ${
        isUnfold && 'border border-solid border-additional-color p-4 pb-6 '
      }  2xl:text-lg`}
    >
      <div
        className={`flex w-full cursor-pointer items-center justify-between  ${
          !isUnfold
            ? 'rounded-2xl border border-solid border-additional-color  p-4 py-6 shadow-lg '
            : 'py-2'
        }`}
        onClick={() => setIsUnfold((prev) => !prev)}
      >
        <legend className="ml-3 self-start font-bold md:ml-7 lg:ml-11 xl:ml-5 2xl:ml-9 2xl:text-lg">
          {input.jobTitleHistory}
        </legend>

        {/*  BUTTONS LIST */}
        <div className="btnList flex gap-4">
          <button
            type="button"
            className=" rounded-xl bg-additional-color p-1 text-white hover:bg-additional-hover-color"
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
                stroke-width="1.5"
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            )}
          </button>
          <button
            className={`  rounded-xl bg-additional-color p-1 text-white  hover:bg-additional-hover-color focus:bg-additional-hover-color`}
            id={el.id}
            onClick={handleDelEmployment}
          >
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>
          </button>
        </div>
      </div>

      {isUnfold && (
        <>
          <div
            className={
              'flex h-auto w-11/12 select-none flex-col rounded border-blue-300     md:flex-row md:flex-wrap '
            }
          >
            <label
              htmlFor="jobTitleHistory"
              className="mb-2 inline font-light  text-gray-400 md:w-[50%]"
            >
              Job Title
              <input
                className={` mb-2 mt-1 block h-12 w-full  rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-light focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-10/12  `}
                type="text"
                id="jobTitleHistory"
                name="jobTitleHistory"
                onChange={handleInput}
                value={input.jobTitleHistory}
              />
            </label>

            <label
              htmlFor="employer"
              className="mb-2 font-light text-gray-400 md:flex md:w-[50%] md:flex-col md:self-end "
            >
              <p className="mb-1">Employer</p>
              <input
                className="mb-2 block h-12 w-full self-end rounded border border-solid bg-input-bg p-2 text-gray-800 placeholder:font-light focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-full "
                type="text"
                id="employer"
                name="employer"
                onChange={handleInput}
                value={input.employer}
              />
            </label>

            <label
              htmlFor="edu_date_ren"
              className="mb-2 font-light text-gray-400 md:w-[50%]"
            >
              Start & End Date
              <div className="mb-4 flex items-center justify-between pt-1 md:flex md:w-10/12 ">
                <input
                  className="mr-2 block h-12 w-5/12 rounded border border-solid bg-input-bg p-1 text-center text-[10px] text-gray-800 focus:border-b-2 focus:border-b-additional-color focus:outline-none  md:text-xs"
                  type="date"
                  lang="en"
                  id="edu_date_ren"
                  name="start_date"
                  onChange={handleInput}
                  value={input.start_date}
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
                  className=" block h-12 w-5/12 rounded border border-solid bg-input-bg p-1 text-center text-[10px] text-gray-800  focus:border-b-2 focus:border-b-additional-color focus:outline-none md:text-xs"
                  type="date"
                  lang="en"
                  id="end_date"
                  name="end_date"
                  onChange={handleInput}
                  value={input.end_date}
                />
              </div>
            </label>

            <label
              htmlFor="city_employment_ren"
              className="mb-2  font-light text-gray-400 md:flex md:w-[50%] md:flex-col md:self-end"
            >
              <p className="mb-1">City</p>
              <input
                className="mb-10 block h-12 w-full rounded border border-solid bg-input-bg p-2 py-1 text-gray-800 placeholder:font-light focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-full md:self-end "
                type="text"
                id="city_employment_ren"
                name="city_employment_ren"
                onChange={handleInput}
                value={input.city}
              />
            </label>
          </div>
          {/* DOT LIST BTN */}
          <div className="flex w-11/12 items-center   py-2 ">
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
            onSelect={() => selectedTextFunc(setSelectedText)}
            name={'description'}
            id={'description'}
            className={` mx-0 mb-4  w-11/12 rounded border border-solid bg-input-bg p-4  font-light  text-gray-800 focus:outline-none `}
            rows={10}
            placeholder={'something e.g'}
            maxLength={200}
            value={input.description}
            onChange={handleInput}
          ></textarea>
          <button
            type="submit"
            className=" mb-4  h-full w-5/12  rounded bg-additional-color p-2 text-gray-100"
          >
            Change
          </button>
        </>
      )}
    </form>
  )
}

export default UIEmploymentForm
