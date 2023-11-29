import { ElementType, useRef } from 'react'
import SideBar from '../SideBar/SideBar'

interface PageLayoutProps {
  Component: ElementType
}
const HomePageLayout: React.FC<PageLayoutProps> = ({ Component }) => {
  return (
    <div id="pageLayout" className="relative  flex h-screen  ">
      <div className="hidden w-[95px] lg:block">
        <SideBar />
      </div>

      <div id="contentPart" className="mx-10  h-screen w-11/12   py-5 ">
        <Component />
      </div>
    </div>
  )
}

export default HomePageLayout
