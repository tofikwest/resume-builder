import { Link } from 'react-router-dom'
import { routes_list } from '../../../routes/routesList'

const ResumesBlock = () => {
  return (
    <div className="homePage-resumeBlock bottom-0 right-0 z-10 flex h-[130%]  min-h-[500px] items-center justify-center rounded-[25px] border-[8px] border-solid border-black bg-mobSize p-1 md:absolute md:min-h-0 md:w-1/3 md:bg-cover ">
      <Link
        to={routes_list[1].path}
        className="hover:bg- absolute left-1/2 z-10 w-5/12 -translate-x-1/2 cursor-pointer rounded-xl bg-browser-pdf p-6 text-center text-sm font-bold text-white shadow-xl hover:bg-black focus:bg-black lg:text-lg "
      >
        Build Resume
      </Link>
    </div>
  )
}

export default ResumesBlock
