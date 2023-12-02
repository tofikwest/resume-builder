import { ElementType, useEffect, useRef, useState } from 'react'
import SideBar from '../SideBar/SideBar'
import MyResume from '../MyResume/MyResume'
import { bk } from '../../helpers/breakpoints'

interface PageLayoutProps {
  Component: ElementType
}
const PageLayout: React.FC<PageLayoutProps> = ({ Component }) => {
  const [width, setWidth] = useState<number>(window.innerWidth)
  const [isClicked, setIsClicked] = useState<boolean>(false)
  const tag = useRef<any>(null)

  useEffect(() => {
    window.addEventListener('resize', currentWidth)
    return () => window.removeEventListener('resize', currentWidth)
  }, [width])

  function currentWidth() {
    setWidth(window.innerWidth)
    console.log(window.innerWidth)
  }

  let resume = (
    <div
      id="resumeViews"
      ref={tag}
      className="lg:w-/12 fixed  left-0 top-0 h-[100vh] w-[100vw] flex-1 bg-browser-pdf md:hidden"
    >
      <MyResume
        style={{
          width: '110%',
          height: '100vh',
          backgroundColor: 'rgb(42 42 46)',
          color: 'black',
          transform: 'scale(0.9)',
          marginLeft: '-20px',
          paddingTop: '5%',
        }}
        style_download_link={{
          position: 'absolute',
          top: '138%',
          right: '50%',
          fontWeight: 'semibold',
          width: '25%',
          color: 'white',
          borderRadius: '5pt',
          padding: '10pt',
          textAlign: 'center',
          backgroundColor: 'rgb(35 35 76)',
        }}
      />
    </div>
  )

  let tabletResume = (
    <div
      id="resumeViews"
      ref={tag}
      className="fixed left-0 top-0 h-[100vh] w-[100vw] flex-1 bg-browser-pdf  "
    >
      <MyResume
        style={{
          position: 'absolute',
          left: '0%',
          top: '0%',
          width: '110%',
          height: '100%',
          backgroundColor: 'rgb(42 42 46)',
          color: 'black',
          transform: 'scale(0.8)',
          marginTop: '-70px',
          marginLeft: '-35px',
        }}
        style_download_link={{
          position: 'absolute',
          top: '138%',
          right: '50%',
          fontWeight: 'semibold',
          width: '25%',
          color: 'white',
          borderRadius: '5pt',
          padding: '10pt',
          textAlign: 'center',
          backgroundColor: 'rgb(35 35 76)',
        }}
      />
    </div>
  )

  let bigAndLaptop = (
    <div
      id="resumeViews"
      ref={tag}
      className=" fixed right-[3%] top-[-11%]  w-5/12 flex-1 scale-[70%] "
    >
      <MyResume
        style={{
          width: '110%',
          height: '100vh',
          backgroundColor: 'rgb(42 42 46)',
          color: 'black',
          transform: 'scale(1.0)',
          marginLeft: '-15px',
          marginRight: '-15px',
        }}
        style_download_link={{
          position: 'absolute',
          top: '110%',
          right: '31%',
          fontWeight: 'bold',
          fontSize: '14pt',
          width: '35%',
          color: 'white',
          borderRadius: '5pt',
          padding: '15pt',
          textAlign: 'center',
          backgroundColor: 'rgb(112 112 229)',
        }}
      />
    </div>
  )

  return (
    <div id="pageLayout" className="builderPage  relative flex  h-screen ">
      <div className="hidden xl:block xl:w-[60px]">
        <SideBar />
      </div>

      <div id="contentPart" className="  h-screen w-full py-5 xl:w-6/12 ">
        <Component />
      </div>

      {isClicked && width <= bk.laptop.small && width < bk.tablet && resume}

      {isClicked &&
        width >= bk.tablet &&
        width <= bk.laptop.medium &&
        tabletResume}

      {width >= bk.laptop.medium && bigAndLaptop}

      <div className="fixed bottom-5 right-9 flex items-center  justify-center gap-5 rounded-2xl  lg:h-16 lg:w-16 xl:hidden">
        <button
          onClick={() => setIsClicked((prev) => !prev)}
          className=" flex  items-center justify-center rounded-2xl bg-additional-color p-2 text-blue-50 hover:bg-additional-hover-color focus:bg-additional-hover-color   "
        >
          {!isClicked ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-6 w-6 md:h-8 md:w-7 lg:h-8 lg:w-8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a.75.75 0 01-.75.75H4.66l2.1 1.95a.75.75 0 11-1.02 1.1l-3.5-3.25a.75.75 0 010-1.1l3.5-3.25a.75.75 0 111.02 1.1l-2.1 1.95h12.59A.75.75 0 0118 10z"
                clip-rule="evenodd"
              />
            </svg>
          )}
        </button>

        {isClicked && (
          <button className=" flex  items-center justify-center rounded-2xl bg-additional-color p-2 text-blue-50 hover:bg-additional-hover-color focus:bg-additional-hover-color   ">
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
                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
              />
            </svg>
          </button>
        )}
      </div>
    </div>
  )
}

export default PageLayout
