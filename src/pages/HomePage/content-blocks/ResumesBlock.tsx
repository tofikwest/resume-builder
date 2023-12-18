import { Link } from 'react-router-dom'
import { resume_img_base64 } from '../../../assets/icons/resume-icon.base64'
import { routes_list } from '../../../routes/routesList'

const ResumesBlock = () => {
  return (
    <div className="absolute bottom-0 right-0  flex h-[130%] w-1/3 items-center justify-center rounded-[25px] border-[8px] border-solid border-black bg-gray-500 p-1 ">
      <img
        src={
          'https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/481/persistent-resource/london-resume-templates.jpg'
        }
        alt="example resume 1"
        className="mr-20 h-5/6 w-5/12 rounded p-2 shadow-lg shadow-black"
      />
      <img
        src={resume_img_base64}
        alt="example resume 2"
        className="h-5/6 w-5/12  rounded p-2 shadow-lg shadow-black"
      />

      <Link
        to={routes_list[1].path}
        className="absolute left-[38.5%] z-10 cursor-pointer rounded-xl bg-slate-800 p-4 text-center font-bold text-white shadow-xl hover:bg-slate-900"
      >
        Build Resume
      </Link>
    </div>
  )
}

export default ResumesBlock
