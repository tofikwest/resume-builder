const ProgresBar = () => {
  const progressBarStyle = {
    width: `${15}%`,
  }
  return (
    <>
      {/* // * PROGRES BAR */}
      <div className="mb-2 flex flex-col px-11">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className=" rounded bg-primary-red p-1 text-center text-sm text-white ">
              15%
            </div>
            <div className="text-sm text-gray-500">Resume score</div>
          </div>

          <div className="flex w-4/12 items-center justify-end gap-2">
            <div className="rounded bg-primary-green p-1 text-center text-sm text-primary-green">
              +25%
            </div>
            <div className="text-sm text-gray-500">Add employment history</div>
            <button className="rounded-xl text-center" type="button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-green-900"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative mt-2 h-1 bg-gray-200">
          <div className="h-full bg-primary-red" style={progressBarStyle}></div>
        </div>
      </div>
    </>
  )
}

export default ProgresBar
