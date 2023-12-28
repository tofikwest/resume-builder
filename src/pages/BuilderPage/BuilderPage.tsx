import TitleResume from '../PdfPage/TitleResume'
import ProgresBar from '../PdfPage/ProgresBar'
import ProfessionalSummary from '../PdfPage/ProfessionalSummary'
import EmploymentHistory from '../PdfPage/EmploymentHistory'
import PersonalDetails from '../PdfPage/PersonalDetails/PersonalDetails'
import Education from '../PdfPage/Education'
import WebsitesSocialLink from '../PdfPage/WebsitesSocialLink'
import Skills from '../PdfPage/Skills'
import Languages from '../PdfPage/Languages'

const BuilderPage = () => {
  return (
    <section
      data-testid="builderPage"
      className=" relative flex h-auto w-full select-none flex-col justify-center gap-2 pb-6 pt-3 lg:px-5 xl:px-4"
    >
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
