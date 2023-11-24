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
import { IPdfState } from '../../redux/pdf/types'

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

  function calculateBar() {
    let persent = 0
    const sectionsData = findTruthyParentObjects(allState) // flag map

    const nextSectionTip = findSectionForAdding(sectionsData) // witch section need to add next

    for (const item in sectionsData) {
      if (sectionsData[item]) {
        if (item === PERSONAL_DETAILS || item === PROF_SUMMARY) {
          persent += 16
        } else persent += 17
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

  const backgroundColor =
    countObj.left <= 20
      ? 'bg-primary-red'
      : countObj.left <= 50
        ? 'bg-gradient-to-r from-primary-red via-primary-orange to-primary-yellow'
        : countObj.left <= 70
          ? 'bg-gradient-to-r from-primary-orange via-primary-yellow to-primary-green'
          : 'bg-primary-green'

  return (
    <>
      <div className=" mb-2 flex flex-col px-11">
        <div className=" flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="rounded bg-additional-color p-1 text-center text-sm text-white">
              {countObj.left}%
            </div>
            <div className="text-sm text-gray-500">Resume score</div>
          </div>

          <div className="flex w-4/12 items-center justify-end gap-2">
            <div className="rounded bg-primary-green p-1 text-center text-sm text-primary-green">
              +{countObj.right}%
            </div>
            <div className="text-sm text-gray-500">{countObj.nextSect}</div>
            <div className="group relative">
              <button
                className="rounded-xl text-center"
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
                <div className="absolute right-[-125px] top-[-60px] rounded-lg bg-gray-200 p-2 text-xs shadow-sm">
                  Your resume is evaluated every time
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-2 h-1 bg-gray-200">
          <div
            className={`h-full bg-additional-color transition-all duration-700  ease-in-out`}
            style={progressBarStyle}
          ></div>
        </div>
      </div>
    </>
  )
}

export default ProgresBar
