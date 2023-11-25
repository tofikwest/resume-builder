import TitleResume from '../PdfPage/TitleResume'
import ProgresBar from '../PdfPage/ProgresBar'
import ProfessionalSummary from '../PdfPage/ProfessionalSummary'
import EmploymentHistory from '../PdfPage/EmploymentHistory'
import PersonalDetails from '../PdfPage/PersonalDetails'
import Education from '../PdfPage/Education'
import WebsitesSocialLink from '../PdfPage/WebsitesSocialLink'
import Skills from '../PdfPage/Skills'
import Languages from '../PdfPage/Languages'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect } from 'react'

export interface IPdfStructure {
  title: {}
  personalDetails: {}
  professionalSummary: {}
  employmentHistory: {}
  education: {}
  websitesSocialLink: {}
  skills: {}
  languages: {}
}
const BuilderPage = () => {
  const pdf = useSelector((state: RootState) => state.pdf)

  useEffect(() => {
    console.log(pdf)
  }, [pdf])

  return (
    <section className=" relative flex w-11/12 max-w-[1440px] select-none flex-col justify-center gap-2 pt-6   ">
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
