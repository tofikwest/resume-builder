import { Link } from 'react-router-dom'
import { resume_img_base64 } from '../../assets/icons/resume-icon.base64'
import { routes_list } from '../../routes/routesList'

const HomePage = () => {
  return (
    <section
      data-testid="builderPage"
      className="relative mt-9 flex h-80 select-none flex-col justify-between gap-80 rounded-2xl bg-slate-100 pt-2 shadow-xl lg:h-4/6"
    >
      <div className="md:ml-5 md:mt-2 md:flex md:justify-between lg:ml-10 lg:mt-8 xl:mt-16">
        <h1 className=" shadow-3xl w-full text-6xl font-bold tracking-wide underline md:w-4/12 md:text-6xl lg:w-28 lg:text-center lg:text-7xl ">
          <span className="animated-text text-additional-color">S</span>tart b
          <span className="animated-text text-additional-color">u</span>ilding
          you
          <span className="animated-text text-additional-color">r</span> resum
          <span className="animated-text text-additional-color">e</span>
          <span className="text-additional-color ">.</span>
        </h1>
        <div className="hidden md:block ">
          <img
            src={resume_img_base64}
            alt="random resume image"
            className=" absolute w-96 scale-75 rounded border-[1px]  border-solid border-gray-300  shadow-2xl md:left-[49.5%] md:top-[-15%]  md:mr-32 md:w-96 lg:left-[55.5%] lg:top-[-6%] lg:mr-32 lg:w-96 xl:left-[35.5%] xl:top-[-6%]  xl:mr-28 xl:w-96"
          />
          <img
            src={resume_img_base64}
            alt="random resume image"
            width={500}
            height={500}
            className="rounded border-[2px] border-solid border-gray-200 shadow-2xl md:absolute  md:left-[48.9%] md:top-[-14%] md:mr-32 md:w-96  md:scale-75 lg:absolute  lg:left-[54.8%] lg:top-[-4.5%] xl:left-[67.5%] xl:top-[-6%]  xl:mr-28 xl:w-96"
          />
          <img
            src={
              'https://s3.resume.io/cdn-cgi/image/width=380,format=auto/uploads/local_template_image/image/481/persistent-resource/london-resume-templates.jpg'
            }
            alt=""
            className="rounded border-[2px] border-solid border-gray-200  shadow-2xl md:absolute md:right-[-3.8%] md:top-[-14.6%] md:scale-75 lg:absolute lg:right-[1.2%] lg:top-[-4.5%] xl:left-[51.5%] xl:top-[-6%]  xl:mr-28 xl:w-96"
          />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="animated-text absolute right-[40%]  top-[15%] hidden h-96 w-96 text-blue-500"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
        />
      </svg>
      <Link
        to={routes_list[1].path}
        className="animated-text z-10 transform rounded-2xl  border border-solid border-slate-200 px-16 py-5  text-center font-bold  text-white shadow-xl transition-transform hover:scale-105 hover:bg-additional-hover-color md:mx-auto md:my-0 md:w-5/12 lg:absolute lg:bottom-[-136px] lg:left-[31%]"
      >
        Build Resume
      </Link>
    </section>
  )
}

export default HomePage
