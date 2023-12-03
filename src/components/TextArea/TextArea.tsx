import React, { ChangeEvent } from 'react'
import { selectedTextFunc } from '../../helpers/handleSelectText'

interface IProps {
  mx: string
  name: string
  value?: string
  handle: (e: ChangeEvent<HTMLTextAreaElement>) => void
  //new adding_dot_to_selected_line setData
  executeSelectDataToStore: () => void
  setData: (value: string) => void
  placeholder?: string
}
const TextArea: React.FC<IProps> = ({
  handle,
  mx = 'mx-auto',
  name,
  placeholder = 'e.g. HR with 5 years experiance',
  value,
  setData,
  executeSelectDataToStore,
}) => {
  return (
    <>
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
              fill-rule="evenodd"
              d="M6 4.75A.75.75 0 016.75 4h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 4.75zM6 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75A.75.75 0 016 10zm0 5.25a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zM1.99 4.75a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 15.25a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1v-.01zM1.99 10a1 1 0 011-1H3a1 1 0 011 1v.01a1 1 0 01-1 1h-.01a1 1 0 01-1-1V10z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <p className="ml-2 text-xs text-gray-400">
          - Select all line and click to button
        </p>
      </div>
      <textarea
        onSelect={() => selectedTextFunc(setData)}
        onChange={handle}
        name={name}
        id={name}
        className={` ${mx} mb-4  w-11/12 rounded border border-solid bg-input-bg p-4  font-light  focus:outline-none`}
        rows={10}
        placeholder={placeholder}
        value={value}
        maxLength={500}
      ></textarea>
    </>
  )
}

export default TextArea
