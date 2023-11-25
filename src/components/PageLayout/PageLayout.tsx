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
    <div className="relative   flex justify-between">
      <div className="w-[95px]">
        <SideBar />
      </div>

      <div id="contentPart" className="  mx-4 h-screen  w-5/12   py-5 ">
        <Component />
      </div>
      <div className="fixed left-[53.3%] top-0 h-screen w-1 border border-solid bg-black"></div>
      <div id="resumeViews" ref={tag} className="sticky   mx-4   w-5/12 py-5 ">
        <MyResume />
      </div>
    </div>
  )
}

export default PageLayout
