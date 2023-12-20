import girlPic from '../../assets/icons/girl.png'

const HeroBlock = () => {
  return (
    <div className="hr relative flex h-[451px] w-full   justify-center rounded-3xl border border-solid bg-[rgb(209,212,255)] md:h-[65%]">
      <div className="relative flex h-full max-w-[1440px] flex-col-reverse  items-center  before:block before:h-5/6 before:w-10/12 before:content-[''] md:flex-row md:justify-between ">
        <img
          src={girlPic}
          alt="girl with resume table in her hand"
          className=" absolute bottom-0 left-1/2 z-[1] h-4/6 -translate-x-1/2 transform md:left-[-2%] md:h-[80%] md:-translate-x-0  lg:left-[-10%] xl:left-10 2xl:left-0 2xl:min-h-[531px]"
        />
        {/* right down */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="absolute left-[69%] top-[27%] h-10 w-10 rounded-lg shadow-xl md:left-[45%] md:top-[12%] 2xl:left-[42%] 2xl:top-[14%]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
          />
        </svg>

        {/* left up */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className=" absolute left-[11%] top-[29%] h-10 w-10 rounded-lg shadow-xl md:left-[2.5%] md:top-[9%] 2xl:left-[0%] 2xl:top-[10%] "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
          />
        </svg>

        {/* right up */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="absolute left-[88%] top-[45%] h-10 w-10 -translate-x-1/2 rounded-lg shadow-xl md:left-[52%] md:top-[51%] 2xl:left-[45%] 2xl:top-[44%] "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7.5 14.25v2.25m3-4.5v4.5m3-6.75v6.75m3-9v9M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
          />
        </svg>

        {/* left down */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className=" absolute left-[6%] top-[54%] h-10 w-10 rounded-lg shadow-xl md:left-[2%] md:top-[44%]   2xl:left-[-10%] 2xl:top-[44%] "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
          />
        </svg>

        <div className=" float-right px-2 md:w-2/6 2xl:w-5/6">
          <h1 className=" shadow-3xl mb-2 pt-4 text-center text-base font-bold tracking-wide underline md:mb-8  md:w-3/6 md:pt-0 md:text-left md:text-5xl 2xl:text-7xl">
            <span className="animated-text text-additional-color">S</span>tart b
            <span className="animated-text text-additional-color">u</span>ilding
            you
            <span className="animated-text text-additional-color">r</span> resum
            <span className="animated-text text-additional-color">e</span>
            <span className="text-additional-color ">.</span>
          </h1>
          <p className="text-center text-xs font-bold  tracking-wide md:text-left md:text-sm 2xl:mb-4 2xl:text-2xl">
            Create an awesome resume in minutes, without leaving your web
            browser.
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroBlock
