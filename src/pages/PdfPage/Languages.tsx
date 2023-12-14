import { useState } from 'react'

import LanguageForm from '../../components/LanguageForm/LanguageForm'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { ILanguage } from '../../redux/pdf/types'
import { ADD, DEL } from '../../redux/pdf/pdfSlice'
import { LANGUAGES } from '../../redux/pdf/constants'

const Languages = () => {
  const [btnAddTrigger, setBtnAddTrigger] = useState<boolean>(true)

  const dispatch = useDispatch()

  const languageList = useSelector((state: RootState) => state.pdf.languages)

  const suggestionLangList = ['English', 'Ukrainian', 'Russian']

  function handleBtnAddTrigger() {
    setBtnAddTrigger((prev) => !prev)
  }

  function handleDeleteLang(e: React.MouseEvent<HTMLButtonElement>) {
    const id = e.currentTarget.id
    dispatch(
      DEL({
        section: LANGUAGES,
        id,
      }),
    )
  }

  function handleAddSuggestLang(e: React.MouseEvent<HTMLLIElement>) {
    const text = e.currentTarget.textContent!
    dispatch(
      ADD({
        section: LANGUAGES,
        data: {
          language: text,
          level: 'Expert',
        },
      }),
    )
  }

  return (
    <>
      <h2 className="my-2 mb-2 block pl-6 text-xl font-semibold 2xl:text-2xl">
        Languages
      </h2>

      <ul
        id="languages-list"
        className=" mb-4 flex w-full max-w-xl flex-wrap gap-2 pl-5 2xl:text-base"
      >
        {suggestionLangList
          .filter((el) => !languageList.some((l) => l.language === el))
          .map((el) => (
            <li
              onClick={handleAddSuggestLang}
              key={el}
              className="flex cursor-pointer items-center justify-between  bg-gray-200 p-2"
            >
              {el}
            </li>
          ))}
      </ul>

      <button
        onClick={handleBtnAddTrigger}
        type="button"
        className="mb-3 ml-4 flex w-fit items-center  gap-1 text-left text-sm text-additional-color hover:text-additional-hover-color 2xl:text-base"
      >
        {!btnAddTrigger && (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v12m6-6H6"
              />
            </svg>
            <p>Add language</p>
          </>
        )}
      </button>

      <ul
        id="skills-list"
        className="mb-5 flex w-full max-w-xl flex-wrap gap-2 pl-5 2xl:text-base"
      >
        {languageList.map(({ id, language }: ILanguage) => (
          <li
            key={id}
            className="flex cursor-pointer items-center justify-between gap-2 bg-gray-200 p-2"
          >
            {language}
            <button id={id} onClick={handleDeleteLang}>
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>

      {btnAddTrigger && (
        <LanguageForm handleBtnAddTrigger={handleBtnAddTrigger} />
      )}
    </>
  )
}

export default Languages
