import { useState } from 'react'
import TitleResume from '../PdfPage/TitleResume'
import ProgresBar from '../PdfPage/ProgresBar'
import ProfessionalSummary from '../PdfPage/ProfessionalSummary'
import EmploymentHistory from '../PdfPage/EmploymentHistory'
import PersonalDetails from '../PdfPage/PersonalDetails'
import Education from '../PdfPage/Education'
import WebsitesSocialLink from '../PdfPage/WebsitesSocialLink'
import Skills from '../PdfPage/Skills'
import Languages from '../PdfPage/Languages'

const BuilderPage = () => {
  return (
    <section className="relative  font-garamond w-12/12     flex flex-col justify-center pt-6 ">
      <TitleResume />
      <ProgresBar />
      <PersonalDetails />
      <ProfessionalSummary />
      <EmploymentHistory />
      <Education />
      <WebsitesSocialLink />
      <Skills />
      <Languages />
    </section>
  )
}

export default BuilderPage

{
  /* <div id="pdf_carcas" className="mt-16  w-[1280px]" ref={target}>
        <Pdf tag={target} />
      </div> */
}
