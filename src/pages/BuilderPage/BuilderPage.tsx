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
    <section className=" relative flex w-11/12 max-w-[1440px] select-none flex-col justify-center gap-2 pt-6 ">
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
