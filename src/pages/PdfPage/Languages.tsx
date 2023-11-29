import { useState } from 'react'

import LanguageForm from '../../components/LanguageForm/LanguageForm'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { ILanguage } from '../../redux/pdf/types'
import { ADD, DEL } from '../../redux/pdf/pdfSlice'
import { LANGUAGES } from '../../redux/pdf/constants'

const Languages = () => {
  const [btnAddTrigger, setBtnAddTrigger] = useState<boolean>(false)

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
      <h2 className="my-2 mb-2 ml-4 block text-xl font-semibold lg:ml-11">
        Languages
      </h2>

      <ul
        id="languages-list"
        className=" mb-4 ml-4 flex w-full max-w-xl flex-wrap gap-2 lg:ml-11"
      >
        {suggestionLangList.map((el) => (
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
        className="mb-3 ml-4 flex w-fit items-center  gap-1 text-left text-sm text-additional-color hover:text-additional-hover-color lg:ml-11"
      >
        {!btnAddTrigger ? (
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
        ) : (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                clip-rule="evenodd"
              />
            </svg>

            <p>Hide language panel</p>
          </>
        )}
      </button>

      <ul
        id="skills-list"
        className="ml-4 flex w-full max-w-xl flex-wrap gap-2 lg:ml-11"
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

      {btnAddTrigger && <LanguageForm />}
    </>
  )
}

export default Languages
