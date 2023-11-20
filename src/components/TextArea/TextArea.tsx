import React, { ChangeEvent } from 'react'

interface IProps {
  mx: string
  name: string
  placeholder?: string
  handle: (e: ChangeEvent<HTMLTextAreaElement>) => void
}
const TextArea: React.FC<IProps> = ({
  handle,
  mx = 'mx-auto',
  name,
  placeholder = 'e.g. HR with 5 years experiance',
}) => {
  return (
    <textarea
      onChange={handle}
      name={name}
      id={name}
      className={` ${mx} my-0 w-11/12 rounded border border-solid bg-input-bg p-4 pt-10 font-light  focus:outline-none`}
      rows={10}
      placeholder={placeholder}
      minLength={50}
      maxLength={200}
      required
    ></textarea>
  )
}

export default TextArea
