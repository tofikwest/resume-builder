import { ElementType } from 'react'
import Header from '../Header/Header'
import SideBar from '../SideBar/SideBar'

interface PageLayoutProps {
  Component: ElementType
}
const PageLayout: React.FC<PageLayoutProps> = ({ Component }) => {
  return (
    <div className="relative">
      <SideBar />
      <div className="w-11/12 float-right">
        <Header />
        <Component />
      </div>
    </div>
  )
}

export default PageLayout
