import { ElementType } from 'react'

interface PageLayoutProps {
  Component: ElementType
}

const HomePageLayout: React.FC<PageLayoutProps> = ({ Component }) => {
  return (
    <div id="pageLayout" className="relative h-screen w-screen ">
      <div id="contentPart">
        <Component />
      </div>
    </div>
  )
}

export default HomePageLayout
