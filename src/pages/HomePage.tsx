import { Link } from 'react-router-dom'
import { resume_img_base64 } from '../assets/icons/resume-icon.base64'
import { routes_list } from '../routes/routesList'

const HomePage = () => {
  return (
    <section className="relative mt-9 h-4/6 select-none rounded-2xl bg-slate-100 pt-2 shadow-xl">
      <div className=" ml-10 mt-16 flex justify-between ">
        <h1 className=" w-28 text-center text-8xl font-bold tracking-wide underline shadow-xl">
          <span className="animated-text text-additional-color">S</span>tart b
          <span className="animated-text text-additional-color">u</span>ilding
          you
          <span className="animated-text text-additional-color">r</span> resum
          <span className="animated-text text-additional-color">e</span>
          <span className="text-additional-color ">.</span>
        </h1>
        <img
          src={resume_img_base64}
          alt="random resume image"
          className="mr-[125px] w-96 rounded border-[2px] border-solid border-gray-300  shadow-2xl"
        />
        <img
          src={resume_img_base64}
          alt="random resume image"
          width={500}
          height={500}
          className="absolute left-[70.5%] top-[1%] mr-32 w-96 rounded  border-[2px] border-solid border-gray-200 shadow-2xl"
        />
        <img
          src={
            'https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/481/persistent-resource/london-resume-templates.jpg'
          }
          alt=""
          className="absolute right-[7.9%] top-[2.3%] rounded  border-[2px] border-solid border-gray-100 shadow-2xl"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="animated-text absolute right-[40%]  top-[15%] h-96 w-96 text-blue-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          />
        </svg>
      </div>

      <Link
        to={routes_list[1].path}
        className="animated-text absolute bottom-[-116px]  left-[41%] z-10 transform rounded-2xl border border-solid border-slate-200 px-16   py-5 text-center font-bold text-white shadow-xl transition-transform hover:scale-105 hover:bg-additional-hover-color"
      >
        Build Resume{' '}
      </Link>
    </section>
  )
}

export default HomePage
