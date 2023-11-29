import { ElementType, useRef } from 'react'
import SideBar from '../SideBar/SideBar'
import MyResume from '../MyResume/MyResume'

interface PageLayoutProps {
  Component: ElementType
}
const PageLayout: React.FC<PageLayoutProps> = ({ Component }) => {
  const tag = useRef<any>(null)
  return (
    <div id="pageLayout" className="builderPage  relative flex  h-screen ">
      <div className="hidden w-[95px]">
        <SideBar />
      </div>

      <div id="contentPart" className="  h-screen w-full py-5 xl:w-6/12 ">
        <Component />
      </div>
      {/* <div
        id="resumeViews"
        ref={tag}
        className="fixed right-[-2%] top-[-11%] h-[100vh] w-5/12 flex-1 scale-[70%] py-24"
      >
        <MyResume />
      </div> */}
    </div>
  )
}

export default PageLayout
