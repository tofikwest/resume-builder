import { ElementType, useRef } from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'
import MyResume from '../MyResume/MyResume'

interface PageLayoutProps {
  Component: ElementType
}
const PageLayout: React.FC<PageLayoutProps> = ({ Component }) => {
  const tag = useRef<any>(null)
  return (
    <div className="relative   flex h-screen ">
      <div className="w-[95px]">
        <SideBar />
      </div>

      <div id="contentPart" className="  mx-4 h-screen  w-5/12   py-5 ">
        <Component />
      </div>
      <div className="fixed left-[53.3%] top-0 h-screen w-[0.5px] border border-solid bg-gray-500"></div>
      <div
        id="resumeViews"
        ref={tag}
        className="fixed right-0 top-[-10%] mx-4 h-[100vh] w-5/12 scale-[70%] py-5"
      >
        <h2 className=" mb-5 text-center font-garamond text-2xl font-bold tracking-wider">
          PDF Preview
        </h2>
        <MyResume />
      </div>
    </div>
  )
}

export default PageLayout
