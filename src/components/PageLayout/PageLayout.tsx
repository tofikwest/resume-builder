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
      <div
        id="contentPart"
        className="float-right  mx-4  h-screen w-10/12 max-w-[1440px] py-5 "
      >
        <Header />
        <Component />
      </div>
    </div>
  )
}

export default PageLayout
