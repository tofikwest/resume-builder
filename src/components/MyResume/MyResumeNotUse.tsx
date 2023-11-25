// import React, { useState } from 'react'
// import jsPDF from 'jspdf'

// const MyResumex = ({
//   data = {
//     title: {},
//     personalDetails: {
//       jobTitle: 'Software Engineer',
//       first_name: 'Tofik',
//       email: 'tof@gmail.com',
//       country: 'Ukraine',
//       photo: '',
//       last_name: 'Hasanov',
//       phone: '+380961948997',
//       city: 'Kyiv',
//       address: '',
//       driving_license: '',
//       place_birth: '',
//       postalCode: '',
//       nationality: '',
//       date_birth: '',
//     },
//     professionalSummary: {
//       summary: `I am a dedicated Full Stack Developer with 2.5 years of commercial experience in crafting robust and scalable software solutions. My versatile skill set allows me to seamlessly navigate both frontend and backend development, contributing to the success of projects through my technical expertise and positive approach to challenges. Furthermore, I am fluent in English, Ukrainian, Russian, Azerbaijani & Turkish`,
//     },
//     employmentHistory: [
//       {
//         id: 'I0I4AUfhrUu5ypjskHb0q',
//         jobTitleHistory: 'FullStack',
//         start_date: '2012-02-12',
//         end_date: '2014-12-24',
//         employer: 'Fors',
//         city: 'Kyiv',
//         description:
//           'Implemented frontend solutions using modern frameworks such as React to enhance code maintainability\nand facilitate component-based development.Employed performance optimization techniques, includ',
//       },
//     ],
//     education: [
//       {
//         id: 'os18phrxqA_jVuG2-Z1Fl',
//         school: 'GOIT',
//         start_date: '123123-03-12',
//         end_date: '31232-12-31',
//         degree: '',
//         city: 'Kyiv',
//         description:
//           'aasdasdasdasdasdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddasdasd',
//       },
//     ],
//     websitesSocialLink: [
//       {
//         id: 'Xe0oCtkZfc-1XJ-BC2JF7',
//         label: 'Linkdein',
//         link: 'linkdein.com',
//       },
//       {
//         id: 'Xe0oCtkZfc-1XJ-BC2JF4',
//         label: 'Twitter',
//         link: 'linkdein.com',
//       },
//     ],
//     skills: [
//       {
//         id: 'zbupQlg1pnXi0esj8at1i',
//         skill: 'Project ManagementManagement Skills',
//         level: 'Expert',
//       },
//       {
//         id: 'SCpMipUKCVFtVayvxcR9Y',
//         skill: 'Communication',
//         level: 'Expert',
//       },
//       {
//         id: 'orSedM78TW1eZM_Y3wXzn',
//         skill: 'HighlyHighly OrganizedOrganized',
//         level: 'Expert',
//       },
//     ],
//     languages: [
//       {
//         id: 'FrsFGJvzCd4jg96xWZ2jk',
//         language: 'English',
//         level: 'Expert',
//       },
//       {
//         id: 'kwNtCCBbkWevxFbA2ICwc',
//         language: 'Ukrainian',
//         level: 'Expert',
//       },
//       {
//         id: 'DWriAQ5Y9e3jWiUUwWTYx',
//         language: 'RussianRussian',
//         level: 'Expert',
//       },
//     ],
//   },
// }) => {
//   const [pdfContent, setPdfContent] = useState('')

//   const generatePDF = () => {
//     // Create a new jsPDF instance
//     const pdf = new jsPDF()

//     // Helper function to add a new page and set font style

//     // Title
//     pdf.text(
//       `${data.personalDetails.first_name} ${data.personalDetails.last_name}`,
//       10,
//       10,
//     )
//     pdf.text(
//       `${data.personalDetails.phone} ${data.personalDetails.email}`,
//       10,
//       20,
//     )

//     // LINKS
//     pdf.text('LINKS', 10, 20)
//     data.websitesSocialLink.forEach((item, index) => {
//       pdf.text(`${index + 1}. ${item.label}: ${item.link}`, 10, 20 + index * 10)
//     })

//     // PROFILE
//     pdf.text('PROFILE', 10, 10)
//     pdf.text(data.professionalSummary.summary, 10, 20)

//     // Employment History
//     pdf.text('Employment History', 10, 10)
//     data.employmentHistory.forEach((job, index) => {
//       pdf.text(`Date: Jun 2022 — Jul 2022`, 10, 10)
//       pdf.text(
//         `Job Title: ${job.jobTitleHistory}, Employer: ${job.employer}`,
//         10,
//         20,
//       )
//       pdf.text(`City: ${job.city}`, 10, 30)
//       pdf.text(`Description: ${job.description}`, 10, 40)
//     })

//     // Education
//     pdf.text('Education', 10, 10)
//     data.education.forEach((edu, index) => {
//       pdf.text(`${edu.degree} at ${edu.school}, ${edu.city}`, 10, 10)
//       pdf.text(`Description: ${edu.description}`, 10, 20)
//     })

//     // Skills
//     pdf.text('Skills', 10, 10)
//     data.skills.forEach((skill, index) => {
//       pdf.text(
//         `${index + 1}. ${skill.skill}: ${skill.level}`,
//         10,
//         20 + index * 10,
//       )
//     })

//     // Languages
//     pdf.text('Languages', 10, 10)
//     data.languages.forEach((language, index) => {
//       pdf.text(
//         `${index + 1}. ${language.language}: ${language.level}`,
//         10,
//         20 + index * 10,
//       )
//     })

//     // Save the PDF
//     // pdf.save('myResume.pdf')
//     setPdfContent(pdf.output('datauristring'))
//   }

//   return (
//     <div>
//       <h1>Generate PDF</h1>
//       <button onClick={generatePDF}>Generate PDF</button>

//       <iframe title="Resume PDF" width="100%" height="600px" src={pdfContent} />
//     </div>
//   )
// }

// export default MyResumex
