import { ChangeEvent, useState, FC } from 'react'
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { TITLE } from '../../redux/pdf/constants'

const TitleResume: FC = () => {
  const untitle = 'Untitled'
  const [title, setTitle] = useState('Untitled')

  const dispatch = useDispatch()

  function validateTitle(title: string) {
    return !title ? untitle : title
  }

  function handleTitle(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.target.value)

    setTimeout(() => {
      dispatch(
        ADD({
          section: TITLE,
          data: { title: validateTitle(e.target.value) },
        }),
      )
    }, 300)
  }

  return (
    <div className="relative mb-2  flex   flex-col items-center justify-center text-xl md:pl-2 lg:items-start">
      {/* Title Of Resume */}
      <input
        id="title"
        onChange={handleTitle}
        type="text"
        value={title}
        placeholder={'E.g: HR Manager Resume'}
        className=" bg-slate-150  h-8 w-5/12  border-b-[1px] p-2 text-center text-sm font-semibold uppercase tracking-wide outline-none placeholder:text-slate-400 focus:border-b-2 focus:border-additional-color md:w-3/12 md:pl-1 md:text-center md:text-xs lg:text-start 2xl:w-4/12 2xl:text-xs"
      />
      <label
        htmlFor="title"
        className="mt-[-5px] h-8 w-5/12 cursor-pointer text-center  text-[10px] font-semibold tracking-wide text-gray-500 md:w-3/12 md:pl-1 lg:text-start 2xl:w-2/12"
      >
        resume title
      </label>
    </div>
  )
}

export default TitleResume
