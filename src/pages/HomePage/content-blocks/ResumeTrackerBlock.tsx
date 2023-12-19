import graphicPic from '../../../assets/icons/graphic.png'

const ResumeTracker = () => {
  return (
    <div className="flex h-full flex-col items-center rounded-3xl border-4 border-solid border-black bg-[#515161] p-4 pt-6 text-center font-bold tracking-wide text-white blur-[0.5px] md:w-1/3">
      <h3 className="mb-2 text-base blur-sm">Resume Tracker</h3>

      <div className="flex h-full w-full items-center justify-between">
        <img
          src={graphicPic}
          alt="graphic"
          className="h-5/6 rounded-lg pb-10 blur-sm"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-24 blur-sm"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
          />
        </svg>
      </div>

      <p className="absolute top-[45%] text-center text-3xl font-extrabold">
        Will be available soon
      </p>
    </div>
  )
}

export default ResumeTracker
