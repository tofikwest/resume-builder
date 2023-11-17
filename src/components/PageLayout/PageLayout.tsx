import { ElementType } from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'

interface PageLayoutProps {
  Component: ElementType
}
const PageLayout: React.FC<PageLayoutProps> = ({ Component }) => {
  return (
    <div>
      <SideBar />
      <div id="contentPart" className="w-11/12 float-right h-screen py-8 ">
        <Header />
        <Component />
      </div>
    </div>
  )
}

export default PageLayout
