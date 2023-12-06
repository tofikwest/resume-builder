// import React from 'react'
// import { IPageState } from './BuilderPage'

// interface IProps {
//   setPage: React.Dispatch<React.SetStateAction<{}>>
// }
// const TemplatePage: React.FC<IProps> = ({ setPage }) => {
//   function handleClick() {
//     setPage((prev: any) => {
//       const obj: IPageState | any = {}
//       for (const key in prev) {
//         const value = prev[key]
//         if (value) {
//           obj[key] = !value
//         } else {
//           obj[key] = value
//         }
//         obj.header = true
//       }
//       return obj
//     })
//   }
//   return (
//     <>
//       <h2 className="text-center uppercase text-3xl tracking-wider mb-4">
//         templates
//       </h2>
//       <img
//         className=" w-[511.4px]  my-0 mx-auto shadow-2xl  "
//         src="https://s3.resume.io/uploads/local_template_image/image/481/persistent-resource/london-resume-templates.jpg"
//         alt="resume picture variant"
//       />
//       <button
//         className="absolute top-[45%] left-[44%] rounded-3xl text-white text-lg bg-additional-color hover:bg-additional-hover-color p-4"
//         onClick={handleClick}
//       >
//         Use this template
//       </button>
//     </>
//   )
// }

// export default TemplatePage
