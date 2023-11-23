import React, { ChangeEvent } from 'react'

interface IProps {
  mx: string
  name: string
  value?: string
  handle: (e: ChangeEvent<HTMLTextAreaElement>) => void
  placeholder?: string
}
const TextArea: React.FC<IProps> = ({
  handle,
  mx = 'mx-auto',
  name,
  placeholder = 'e.g. HR with 5 years experiance',
  value,
}) => {
  return (
    <textarea
      onChange={handle}
      name={name}
      id={name}
      className={` ${mx} mb-4  w-11/12 rounded border border-solid bg-input-bg p-4 pt-10 font-light  focus:outline-none`}
      rows={10}
      placeholder={placeholder}
      value={value}
      maxLength={200}
    ></textarea>
  )
}

export default TextArea
