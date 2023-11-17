import { Link } from 'react-router-dom'
import { resume_img_base64 } from '../assets/icons/resume-icon.base64'
import { routes_list } from '../routes/routesList'

const HomePage = () => {
  // border: 1px solid black;
  return (
    <section className="relative mt-9 h-4/6">
      <div className=" ml-10 mt-16 flex justify-between ">
        <h1 className=" font-bold tracking-wide text-center text-7xl  w-28">
          Star<span className="text-additional-color">t</span> buildin
          <span className="text-additional-color">g</span> you
          <span className="text-additional-color">r</span> resum
          <span className="text-additional-color">e</span>
        </h1>
        <img
          src={resume_img_base64}
          alt="random resume image"
          className="w-96 mr-32 shadow-2xl"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        className="absolute bottom-[7px] left-[405px] w-56 h-56 rotate-180 scale-x-[-1]"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 9l6-6m0 0l6 6m-6-6v12a6 6 0 01-12 0v-3"
        />
      </svg>
      <Link
        to={routes_list[1].path}
        className="absolute bottom-[-116px] left-1/3 shadow-xl bg-additional-color hover:bg-additional-hover-color text-white font-bold py-5 px-16 rounded-2xl transition-transform transform hover:scale-105"
      >
        Build Resume
      </Link>
    </section>
  )
}

export default HomePage
