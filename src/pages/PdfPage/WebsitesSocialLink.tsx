import React from 'react'

const WebsitesSocialLink = () => {
  return (
    <>
      <h2 className="my-2 mb-1 ml-11 block text-xl font-semibold">
        Websites & Social Links
      </h2>
      <p className=" mb-2 ml-11 w-10/12 text-sm text-gray-400">
        You can add links to websites you want hiring managers to see! Perhaps
        It will be a link to your portfolio, LinkedIn profile, or personal
        website
      </p>
      <button
        type="button"
        className="ml-11 flex w-[13%]  items-center gap-1 text-left text-sm text-additional-color hover:text-additional-hover-color"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v12m6-6H6"
          />
        </svg>

        <p>Add link</p>
      </button>
    </>
  )
}

export default WebsitesSocialLink
