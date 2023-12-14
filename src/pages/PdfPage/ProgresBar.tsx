import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import {
  PERSONAL_DETAILS,
  PROF_SUMMARY,
  TITLE,
} from '../../redux/pdf/constants'
import {
  findSectionForAdding,
  findTruthyParentObjects,
} from '../../helpers/calculationSectionTips'

const sectionsNameMarks: string[] = [
  'Add personal details',
  'Add profile summary',
  'Add employment history',
  'Add education',
  'Add websites & social links',
  'Add skills',
  'Add languages',
]
export interface ICountObj {
  left: number
  right: number
  nextSect: string
}
const ProgresBar = () => {
  const [questionMark, setQuestionMark] = useState<boolean>(false)
  const [currentWidth, setCurrentWidth] = useState(window.innerWidth)

  const allState = useSelector((state: RootState) => state.pdf)

  const [countObj, setCountObj] = useState<ICountObj>({
    left: 0,
    right: 20,
    nextSect: sectionsNameMarks[0],
  })

  const [progressBarStyle, setProgressBarStyle] = useState<{ width: string }>({
    width: `0%`,
  })

  useEffect(() => {
    calculateBar()
  }, [allState])

  useEffect(() => {
    setCurrentWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [currentWidth])

  function handleResize(): void {
    setCurrentWidth(window.innerWidth)
  }

  function calculateBar() {
    let persent = 0
    const sectionsData = findTruthyParentObjects(allState) // flag map

    const nextSectionTip = findSectionForAdding(sectionsData) // witch section need to add next

    for (const item in sectionsData) {
      if (sectionsData[item]) {
        if (item === TITLE) {
          continue
        }

        if (item === PERSONAL_DETAILS || item === PROF_SUMMARY) {
          persent += 10
        } else {
          persent += 16
        }
      }
    }

    setCountObj({
      left: persent,
      right: 100 - persent,
      nextSect: nextSectionTip[0],
    })

    setProgressBarStyle({
      width: `${persent}%`,
    })
    return {
      width: `${persent}%`,
    }
  }

  return (
    <>
      <div className="sticky top-0 z-10  mb-2 flex flex-col bg-white p-3">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2  xl:w-full">
            <div className="rounded bg-additional-color p-1 text-center text-xs  text-white md:text-xs">
              {countObj.left}%
            </div>
            <div className="gray-500 w-max  text-[12px] md:text-sm 2xl:text-sm">
              Resume score
            </div>
          </div>

          <div className="flex w-10/12 items-center justify-end gap-2 md:w-4/12 xl:w-full">
            <div className="hidden rounded bg-primary-green p-1 text-center text-xs text-primary-green md:block md:text-xs">
              +{countObj.right}%
            </div>

            <div className="animated-text text-xs text-gray-500 md:text-sm 2xl:text-sm">
              {countObj.nextSect}
            </div>
            <div className="group relative">
              <button
                className="rounded-xl pt-2 text-center"
                type="button"
                onMouseEnter={() => setQuestionMark(true)}
                onMouseLeave={() => setQuestionMark(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-green-900"
                >
                  <path
                    fillRule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {questionMark && (
                <div className="absolute left-[-450%] top-[180%] max-w-[100px] rounded-xl bg-gray-200 p-2 text-xs shadow-md 2xl:max-w-[200px] 2xl:text-sm">
                  Your resume is evaluated every time
                </div>
              )}
            </div>
          </div>
        </div>

        <div className=" mt-2  h-1 bg-gray-200">
          <div
            className={`h-full bg-additional-color transition-all  duration-700 ease-in-out`}
            style={progressBarStyle}
          ></div>
        </div>
      </div>
    </>
  )
}

export default ProgresBar
