import React, { useState } from 'react'
import { IEducation } from '../../redux/pdf/types'
import { useDispatch } from 'react-redux'
import { CHANGE } from '../../redux/pdf/pdfSlice'
import { EDUCATION } from '../../redux/pdf/constants'

interface IProps {
  el: IEducation
  btnClicked: () => void
  isUnfold: boolean
}
const UIEducationForm: React.FC<IProps> = ({ el, isUnfold, btnClicked }) => {
  const dispatch = useDispatch()

  const [input, setChangeInput] = useState<IEducation>({
    school: el.school,
    start_date: el.start_date,
    end_date: el.end_date,
    degree: el.degree,
    city: el.city,
    description: el.description,
  })

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
        section: EDUCATION,
        data: input,
        id: el.id!,
      }),
    )
  }

  return (
    <form
      id={el.id}
      onSubmit={handleSubmit}
      className="flex h-auto w-full select-none flex-col items-center rounded-xl border border-solid border-additional-color p-4 font-form-family lg:mx-2 lg:ml-12   lg:w-9/12 lg:rounded-xl lg:border-dashed"
    >
      <div className="my-2 flex w-11/12 items-center justify-between">
        <legend className="self-start text-left font-bold">
          {input.school}
        </legend>
        <button
          onClick={btnClicked}
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
          <div
            className={
              'mb-4 flex h-auto w-11/12 select-none flex-col rounded  border-blue-300  font-form-family lg:flex-wrap'
            }
          >
            <label
              htmlFor="school"
              className="mb-2 inline font-extralight text-gray-400"
            >
              School
            </label>
            <input
              className={`mb-2 block h-12 w-full rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none lg:w-5/12 `}
              type="text"
              id="school"
              name="school"
              value={input.school}
              onChange={handleInput}
            />
            {/* ======== */}
            <label
              htmlFor="edu_date"
              className="mb-2 font-extralight text-gray-400"
            >
              Start & End Date
            </label>
            <div className="mb-4 flex items-center justify-between lg:w-5/12">
              <input
                className="block h-12 w-5/12 rounded  border border-solid bg-input-bg p-2 text-center text-sm text-gray-400 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
                type="month"
                lang="en"
                id="edu_date"
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
                className="mb-2 h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                />
              </svg>

              <input
                className=" block h-12 w-5/12 rounded border border-solid bg-input-bg p-2 text-center text-sm text-gray-400 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
                type="month"
                lang="en"
                id="end_date"
                name="end_date"
                onChange={handleInput}
                value={input.end_date}
              />
            </div>
            {/* ====== */}
            <label
              htmlFor="degree_edu_ren"
              className="mb-2 font-extralight text-gray-400 lg:ml-[50px]"
            >
              Degree
            </label>
            <input
              className="mb-2 block h-12 w-full self-end rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none lg:w-5/12 "
              type="text"
              id="degree_edu_ren"
              name="degree_edu_ren"
              onChange={handleInput}
              value={input.degree}
            />
            <label
              htmlFor="city_edu_ren"
              className="mb-2 font-extralight text-gray-400 lg:ml-[50px]"
            >
              City
            </label>
            <input
              className="block h-12 w-full self-end rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none lg:w-5/12 "
              type="text"
              id="city_edu_ren"
              name="city"
              onChange={handleInput}
              value={input.city}
            />
          </div>

          <textarea
            name={'description'}
            id={'description'}
            className={` mx-0 mb-4  w-11/12 rounded border border-solid bg-input-bg p-4 pt-2 font-light  focus:outline-none`}
            rows={10}
            placeholder={'something e.g'}
            maxLength={200}
            value={input.description}
            onChange={handleInput}
          ></textarea>
          <button
            type="submit"
            className=" h-full  w-5/12 rounded  bg-additional-color p-2 text-gray-100"
          >
            Change
          </button>
        </>
      )}
    </form>
  )
}

export default UIEducationForm
