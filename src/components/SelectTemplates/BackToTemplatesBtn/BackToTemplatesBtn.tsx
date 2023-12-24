interface IProps {
  wrapperSwitchToTemplates: () => void
}

const BackToTemplatesBtn: React.FC<IProps> = ({ wrapperSwitchToTemplates }) => {
  return (
    <button
      onClick={wrapperSwitchToTemplates}
      className="0 fixed bottom-5 left-[4%] z-30 flex h-fit items-center justify-center gap-2 rounded-xl bg-additional-color p-2 text-xs hover:bg-additional-hover-color md:bottom-5 md:p-3 xl:left-[72%] xl:top-2 xl:bg-inherit xl:p-2 xl:hover:bg-slate-600 2xl:left-[74%] 2xl:top-3"
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className=" h-6 w-6 text-gray-300  "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
          />
        </svg>
      </div>
      <p className="text-white  2xl:text-sm">Select template</p>
    </button>
  )
}

export default BackToTemplatesBtn
