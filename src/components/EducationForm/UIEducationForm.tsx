import React, { useEffect, useRef, useState } from 'react'
import { IEducation } from '../../redux/pdf/types'
import { useDispatch } from 'react-redux'
import { CHANGE } from '../../redux/pdf/pdfSlice'
import { EDUCATION } from '../../redux/pdf/constants'

interface IProps {
  el: IEducation
  handleDelEducation: (e: React.MouseEvent<HTMLButtonElement>) => void
}
const UIEducationForm: React.FC<IProps> = ({ el, handleDelEducation }) => {
  const formRef = useRef<HTMLFormElement>(null)

  const [isUnfold, setIsUnfold] = useState(false)
  const [height, setHeight] = useState(formRef.current?.clientHeight!)

  const [input, setChangeInput] = useState<IEducation>({
    school: el.school,
    start_date: el.start_date,
    end_date: el.end_date,
    degree: el.degree,
    city: el.city,
    description: el.description,
  })

  useEffect(() => {
    const form = formRef.current

    if (form) {
      const updateFormHeight = () => {
        setHeight(form.clientHeight)
        console.log(height)
      }

      updateFormHeight()

      const resizeObserver = new ResizeObserver(updateFormHeight)
      resizeObserver.observe(form)

      // Clean up the observer when the component unmounts
      return () => {
        resizeObserver.disconnect()
      }
    }
  }, [])

  const dispatch = useDispatch()

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
      ref={formRef}
      id={el.id}
      onSubmit={handleSubmit}
      className="relative flex h-auto w-full select-none flex-col items-center rounded-xl border border-solid border-additional-color p-4 font-form-family  md:flex-wrap lg:ml-12 lg:w-9/12"
    >
      <div className="my-2 flex w-11/12 items-center justify-between">
        <legend className="self-start text-left font-bold">
          {input.school}
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

        <button
          className={`absolute hidden ${
            height <= 78
              ? 'md:right-[-8%] md:top-[30%] md:block'
              : 'md:right-[-8%] md:top-[4%] md:block'
          }  h-auto text-gray-300 hover:text-additional-hover-color lg:mt-8`}
          id={el.id}
          onClick={handleDelEducation}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-8 w-8  "
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
            />
          </svg>
        </button>
      </div>

      {isUnfold && (
        <>
          <div
            className={
              'flex h-auto w-11/12 select-none flex-col rounded border-blue-300 font-form-family     md:flex-row md:flex-wrap lg:my-20'
            }
          >
            <label
              htmlFor="school"
              className="mb-2 inline w-full font-extralight text-gray-400 md:w-[50%]"
            >
              School
              <input
                className={`mb-2 mt-1 block h-12 w-full rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-10/12 `}
                type="text"
                id="school"
                name="school"
                value={input.school}
                onChange={handleInput}
              />
            </label>

            <label
              htmlFor="degree_edu_ren"
              className="mb-2 w-full font-extralight text-gray-400 md:flex md:w-[50%] md:flex-col md:self-end lg:ml-[50px]"
            >
              <p className="mb-1 md:ml-14">Degree</p>
              <input
                className="mb-2 block h-12 w-full self-end rounded border border-solid bg-input-bg p-2 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-10/12"
                type="text"
                id="degree_edu_ren"
                name="degree"
                onChange={handleInput}
                value={input.degree}
              />
            </label>

            <label
              htmlFor="edu_date"
              className="mb-2 font-extralight text-gray-400 md:w-[50%]"
            >
              Start & End Date
              <div className="mb-4 mt-1 flex items-center justify-between pt-1 md:flex md:w-10/12">
                <input
                  className="mr-2  block h-12 w-5/12 rounded border border-solid bg-input-bg p-2 text-center text-sm text-gray-400 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
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
                  className="block h-12 w-5/12 rounded border border-solid bg-input-bg p-2 text-center text-sm text-gray-400 focus:border-b-2 focus:border-b-additional-color focus:outline-none"
                  type="month"
                  lang="en"
                  id="end_date"
                  name="end_date"
                  onChange={handleInput}
                  value={input.end_date}
                />
              </div>
            </label>

            <label
              htmlFor="city_edu_ren"
              className="mb-2  font-extralight text-gray-400 md:flex md:w-[50%] md:flex-col md:self-end lg:ml-[50px]"
            >
              <p className="mb-1 md:ml-14">City</p>
              <input
                className="mb-10 block h-12 w-full rounded border border-solid bg-input-bg p-2 py-1 placeholder:font-extralight focus:border-b-2 focus:border-b-additional-color focus:outline-none md:w-10/12 md:self-end "
                type="text"
                id="city_edu_ren"
                name="city"
                onChange={handleInput}
                value={input.city}
              />
            </label>
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
          <button
            className={`absolute right-[10%] top-[93.5%]
                 h-auto text-gray-300
              hover:text-additional-hover-color  md:hidden `}
            id={el.id}
            onClick={handleDelEducation}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-8 w-8  "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z"
              />
            </svg>
          </button>
        </>
      )}
    </form>
  )
}

export default UIEducationForm
