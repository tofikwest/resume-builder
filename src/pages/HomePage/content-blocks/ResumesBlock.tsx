import { Link } from 'react-router-dom'
import { resume_img_base64 } from '../../../assets/icons/resume-icon.base64'
import { routes_list } from '../../../routes/routesList'

const ResumesBlock = () => {
  return (
    <div className="bottom-0 right-0 z-10 flex  h-[130%] items-center justify-center rounded-[25px] border-[8px] border-solid border-black bg-gray-500 p-1 md:absolute md:w-1/3 ">
      <img
        src={
          'https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/481/persistent-resource/london-resume-templates.jpg'
        }
        alt="example resume 1"
        className="h-5/6 max-h-[241px] max-w-[220px] rounded p-2  shadow-lg shadow-black lg:max-h-none xl:mr-5   2xl:mr-12 2xl:max-h-[330px] 2xl:w-5/12 2xl:max-w-[230px]"
      />
      <img
        src={resume_img_base64}
        alt="example resume 2"
        className="hidden h-5/6 w-5/12 max-w-[220px] rounded p-2 shadow-lg shadow-black md:max-h-[259px] lg:max-h-none xl:block xl:w-5/12 2xl:max-h-[330px] 2xl:max-w-[230px] "
      />

      <Link
        to={routes_list[1].path}
        className="absolute left-1/2 z-10 -translate-x-1/2 cursor-pointer rounded-xl bg-slate-800 p-4 text-center font-bold text-white shadow-xl hover:bg-slate-900"
      >
        Build Resume
      </Link>
    </div>
  )
}

export default ResumesBlock
