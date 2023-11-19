import React from 'react'

const WebsitesSocialLink = () => {
  return (
    <>
      <h2 className="ml-14 block my-2 mb-1 text-xl font-semibold">
        Websites & Social Links
      </h2>
      <p className=" ml-14 text-gray-400 text-sm mb-2 w-10/12">
        You can add links to websites you want hiring managers to see! Perhaps
        It will be a link to your portfolio, LinkedIn profile, or personal
        website
      </p>
      <button
        type="button"
        className="ml-14 w-[11%] gap-1  flex items-center text-left text-sm text-additional-color hover:text-additional-hover-color"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6"
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
