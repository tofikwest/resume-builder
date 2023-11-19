const Skills = () => {
  return (
    <>
      <h2 className="ml-14 block my-2 mb-1 text-xl font-semibold">Skills</h2>
      <p className=" ml-14 text-gray-400 text-sm mb-2 w-10/12">
        Choose 5 important skills that show you fit the position. Make sure they
        match the key skills mentioned in the job listing (especially when
        applying via an online system).
      </p>
      <button
        type="button"
        className="ml-14 mb-3 w-[11%] gap-1  flex items-center text-left text-sm text-additional-color hover:text-additional-hover-color"
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

        <p>Add skill</p>
      </button>

      <ul id="skills-list" className="ml-14 w-[628px] flex flex-wrap gap-2">
        <li className="flex gap-2 justify-between items-center bg-gray-200 p-2">
          Project Management Skills
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
        <li className="flex gap-2 justify-between items-center bg-gray-200 p-2">
          Communication
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
        <li className="flex gap-2 justify-between items-center bg-gray-200 p-2">
          Highly Organized
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </li>
      </ul>
    </>
  )
}

export default Skills
