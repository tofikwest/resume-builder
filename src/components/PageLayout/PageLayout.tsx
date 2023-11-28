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
    <div id="pageLayout" className="relative  flex h-screen   ">
      <div className="w-[95px] ">
        <SideBar />
      </div>

      <div id="contentPart" className="mx-4  h-screen w-6/12    py-5 ">
        <Component />
      </div>
      <div
        id="resumeViews"
        ref={tag}
        className="fixed right-0 top-[-11%] h-[100vh] w-5/12 flex-1 scale-[70%] py-5"
      >
        <h2 className=" mb-5 text-center font-form-family text-2xl font-bold tracking-wider  text-white">
          PDF Preview
        </h2>
        <MyResume />
      </div>
    </div>
  )
}

export default PageLayout
