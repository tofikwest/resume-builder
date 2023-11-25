// const resumeData = {
//   title: {},
//   personalDetails: {
//     jobTitle: 'Software Engineer',
//     first_name: 'Tofik',
//     email: 'tof@gmail.com',
//     country: 'Ukraine',
//     photo: '',
//     last_name: 'Hasanov',
//     phone: '+380961948997',
//     city: 'Kyiv',
//     address: '',
//     driving_license: '',
//     place_birth: '',
//     postalCode: '',
//     nationality: '',
//     date_birth: '',
//   },
//   professionalSummary: {
//     summary: `I am a dedicated Full Stack Developer with 2.5 years of commercial experience in crafting robust and
//     scalable software solutions. My versatile skill set allows me to seamlessly navigate both frontend and backend
//     development, contributing to the success of projects through my technical expertise and positive approach to
//     challenges. Furthermore, I am fluent in English, Ukrainian, Russian, Azerbaijani & Turkish
//     `,
//   },
//   employmentHistory: [
//     {
//       id: 'I0I4AUfhrUu5ypjskHb0q',
//       jobTitleHistory: 'Full Stack Developer',
//       start_date: '2022-02-12',
//       end_date: '2023-12-24',
//       employer: 'Forbus Tech',
//       city: 'Kyiv',
//       description: `Implemented frontend solutions using modern frameworks such as React to enhance code maintainability
//         and facilitate component-based development.
//          Employed performance optimization techniques, including code splitting, lazy loading, and image
//         optimization, to enhance website speed and user experience.
//          Implemented security best practices, including input validation and protection against common
//         vulnerabilities like XSS and CSRF.
//          Architected the application from the ground up, leveraging scalable design patterns for future growth.
//          Interfaced with Bitrix API, fostering seamless external integration.`,
//     },
//     {
//       id: 'I0I4AUfhrUu5ypjskHb0q',
//       jobTitleHistory: 'Full Stack Developer',
//       start_date: '2022-02-12',
//       end_date: '2023-12-24',
//       employer: 'Tech',
//       city: 'Kyiv',
//       description: `Implemented frontend solutions using modern frameworks such as React to enhance code maintainability
//         and facilitate component-based development.
//          Employed performance optimization techniques, including code splitting, lazy loading, and image
//         optimization, to enhance website speed and user experience.
//          Implemented security best practices, including input validation and protection against common
//         vulnerabilities like XSS and CSRF.
//          Architected the application from the ground up, leveraging scalable design patterns for future growth.
//         Interfaced with Bitrix API, fostering seamless external integration.`,
//     },
//   ],
//   education: [
//     {
//       id: 'os18phrxqA_jVuG2-Z1Fl',
//       school: `Taras Shevchenko National University of
//       Kyiv`,
//       start_date: '2017-03-12',
//       end_date: '2021-12-31',
//       degree: `Master's degree of Law`,
//       city: 'Kyiv',
//       description: '',
//     },
//     {
//       id: 'os18phrxqA_jVuG2-Z1Fl',
//       school: `Taras Shevchenko National University of
//       Kyiv`,
//       start_date: '2013-03-12',
//       end_date: '2017-12-31',
//       degree: `Bachelor's degree of Law`,
//       city: 'Kyiv',
//       description: '',
//     },
//   ],
//   websitesSocialLink: [
//     {
//       id: 'Xe0oCtkZfc-1XJ-BC2JF7',
//       label: 'linkdein',
//       link: 'linkdein.com',
//     },
//   ],
//   skills: [
//     {
//       id: 'zbupQlg1pnXi0esj8at1i',
//       skill: 'Project ManagementManagement Skills',
//       level: 'Expert',
//     },
//     {
//       id: 'SCpMipUKCVFtVayvxcR9Y',
//       skill: 'Communication',
//       level: 'Expert',
//     },
//     {
//       id: 'orSedM78TW1eZM_Y3wXzn',
//       skill: 'HighlyHighly OrganizedOrganized',
//       level: 'Expert',
//     },
//   ],
//   languages: [
//     {
//       id: 'FrsFGJvzCd4jg96xWZ2jk',
//       language: 'English',
//       level: 'Expert',
//     },
//     {
//       id: 'kwNtCCBbkWevxFbA2ICwc',
//       language: 'Ukrainian',
//       level: 'Expert',
//     },
//     {
//       id: 'DWriAQ5Y9e3jWiUUwWTYx',
//       language: 'RussianRussian',
//       level: 'Expert',
//     },
//   ],
// }

// import React from 'react'
// import jsPDF from 'jspdf'
// import html2canvas from 'html2canvas'

// const Pdf = () => {
//   const generatePdf = async () => {
//     const pdf = new jsPDF('p', 'mm', 'a4')

//     const pdfData = await html2canvas(document.getElementById('resumeViews')!)
//     const imgWidth = pdf.internal.pageSize.getWidth()
//     const imgHeight = (pdfData.height * imgWidth) / pdfData.width

//     pdf.addImage(pdfData, 'PNG', 0, 0, imgWidth, imgHeight)
//     pdf.save('resume.pdf')
//   }

//   return (
//     <div id="resume">
//       <h1>
//         {resumeData.personalDetails.first_name}{' '}
//         {resumeData.personalDetails.last_name}
//       </h1>
//       <p>{resumeData.personalDetails.jobTitle}</p>

//       <h2>Professional Summary</h2>
//       <p>{resumeData.professionalSummary.summary}</p>

//       <h2>Employment History</h2>
//       {resumeData.employmentHistory.map((job, index) => (
//         <div key={index}>
//           <h3>{job.jobTitleHistory}</h3>
//           <p>
//             {job.start_date} - {job.end_date}
//           </p>
//           <p>
//             {job.employer} - {job.city}
//           </p>
//           <p>{job.description}</p>
//         </div>
//       ))}

//       <h2>Education</h2>
//       {resumeData.education.map((edu, index) => (
//         <div key={index}>
//           <h3>{edu.school}</h3>
//           <p>
//             {edu.start_date} - {edu.end_date}
//           </p>
//           <p>
//             {edu.degree} - {edu.city}
//           </p>
//         </div>
//       ))}
//       {resumeData.education.map((edu, index) => (
//         <div key={index}>
//           <h3>{edu.school}</h3>
//           <p>
//             {edu.start_date} - {edu.end_date}
//           </p>
//           <p>
//             {edu.degree} - {edu.city}
//           </p>
//         </div>
//       ))}
//       {resumeData.education.map((edu, index) => (
//         <div key={index}>
//           <h3>{edu.school}</h3>
//           <p>
//             {edu.start_date} - {edu.end_date}
//           </p>
//           <p>
//             {edu.degree} - {edu.city}
//           </p>
//         </div>
//       ))}
//       {resumeData.education.map((edu, index) => (
//         <div key={index}>
//           <h3>{edu.school}</h3>
//           <p>
//             {edu.start_date} - {edu.end_date}
//           </p>
//           <p>
//             {edu.degree} - {edu.city}
//           </p>
//         </div>
//       ))}
//       {resumeData.education.map((edu, index) => (
//         <div key={index}>
//           <h3>{edu.school}</h3>
//           <p>
//             {edu.start_date} - {edu.end_date}
//           </p>
//           <p>
//             {edu.degree} - {edu.city}
//           </p>
//         </div>
//       ))}

//       <h2>Skills</h2>
//       {resumeData.skills.map((skill, index) => (
//         <div key={index}>
//           <p>
//             {skill.skill} - {skill.level}
//           </p>
//         </div>
//       ))}

//       <button onClick={generatePdf}>Generate PDF</button>
//     </div>
//   )
// }

// export default Pdf
