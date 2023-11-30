import { useState } from 'react'
import WebSitesSocLinkForm from '../../components/WebSitesSocLinkForm/WebSitesSocLinkForm'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { IWebSitesSocLink } from '../../redux/pdf/types'
import { Link } from 'react-router-dom'
import { DEL } from '../../redux/pdf/pdfSlice'
import { WEBSITE_SOC_LINK } from '../../redux/pdf/constants'

const WebsitesSocialLink = () => {
  const [btnAddTrigger, setBtnAddTrigger] = useState<boolean>(false)

  const socLinks = useSelector(
    (state: RootState) => state.pdf.websitesSocialLink,
  )

  const dispatch = useDispatch()

  function handleBtnAddTrigger() {
    setBtnAddTrigger((prev) => !prev)
  }

  function handleDeleteWebSoc(e: React.MouseEvent<HTMLButtonElement>) {
    const id = e.currentTarget.id

    dispatch(
      DEL({
        id,
        section: WEBSITE_SOC_LINK,
      }),
    )
  }

  return (
    <>
      <h2 className="my-2 mb-1 block pl-4 text-xl font-semibold 2xl:text-2xl">
        Websites & Social Links
      </h2>
      <p className=" mb-2 w-10/12 pl-4 text-sm text-gray-400 2xl:text-base">
        You can add links to websites you want hiring managers to see! Perhaps
        It will be a link to your portfolio, LinkedIn profile, or personal
        website
      </p>
      <button
        onClick={handleBtnAddTrigger}
        type="button"
        className="ml-4 flex w-fit items-center  gap-1 text-left text-sm text-additional-color hover:text-additional-hover-color 2xl:text-base"
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
            <p>Add link</p>
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

            <p>Hide link panel</p>
          </>
        )}
      </button>
      {btnAddTrigger && <WebSitesSocLinkForm />}
      <ul
        id="websitesLink-list"
        className=" ml-5 flex w-full max-w-xl flex-wrap gap-2 2xl:text-base "
      >
        {socLinks.map(({ id, label, link }: IWebSitesSocLink) => (
          <li
            key={id}
            className="flex h-full items-center justify-between gap-2 bg-gray-200 p-2"
          >
            <a
              href={'https://' + link!}
              target="_blank"
              className="text underline"
            >
              {label}
            </a>
            <button id={id} onClick={handleDeleteWebSoc}>
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
    </>
  )
}

export default WebsitesSocialLink
