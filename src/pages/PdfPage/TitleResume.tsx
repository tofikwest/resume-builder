import { ChangeEvent, useState, FC } from 'react'
import { useDispatch } from 'react-redux'
import { ADD } from '../../redux/pdf/pdfSlice'
import { TITLE } from '../../redux/pdf/constants'

const TitleResume: FC = () => {
  const untitle = 'Untitled'
  const [title, setTitle] = useState('Untitled')
  const [questionMark, setQuestionMark] = useState<boolean>(false)

  // const [needToShow, setToShow]= useState<boolean>(false)
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
    <div className="relative mb-2  flex   flex-col items-center justify-center text-center text-xl">
      {/* Title Of Resume */}
      <input
        onChange={handleTitle}
        type="text"
        value={title}
        placeholder={title}
        className=" h-8  w-5/12 p-2 text-center text-sm font-bold uppercase tracking-wide outline-none placeholder:text-black focus:border-b-[1px]  md:w-3/12 md:p-1 md:text-base 2xl:w-2/12 2xl:text-lg"
      />
      <div className="group relative">
        <button
          onMouseEnter={() => setQuestionMark(true)}
          onMouseLeave={() => setQuestionMark(false)}
          className="absolute right-[-130px]  top-[-25px] rounded-xl text-center  transition-all duration-300 ease-in-out hover:bg-gray-200 "
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-4 w-4 text-additional-color hover:text-additional-hover-color"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        {questionMark && (
          <div className="absolute right-[-65px] top-[13px] h-auto w-[90px] rounded-lg bg-gray-200 p-1 text-xs   shadow-md transition duration-300 ease-in-out 2xl:w-60 2xl:text-base">
            Your resume title name.
          </div>
        )}
      </div>
    </div>
  )
}

export default TitleResume
