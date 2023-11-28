import { ElementType, useRef } from 'react'
import SideBar from '../SideBar/SideBar'

interface PageLayoutProps {
  Component: ElementType
}
const HomePageLayout: React.FC<PageLayoutProps> = ({ Component }) => {
  const tag = useRef<any>(null)
  return (
    <div id="pageLayout" className="relative  flex h-screen  ">
      <div className="w-[95px] ">
        <SideBar />
      </div>

      <div id="contentPart" className="mx-10  h-screen w-11/12   py-5 ">
        <Component />
      </div>
    </div>
  )
}

export default HomePageLayout
