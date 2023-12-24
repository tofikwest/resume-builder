import { ElementType, useEffect, useRef, useState } from 'react'
import LondonResume from '../MyResume/LondonTemplate'
import DublinResume from '../MyResume/DublinTemplate'

import { bk } from '../../helpers/breakpoints'
import { PDFDownloadLink } from '@react-pdf/renderer'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import SelectTemplates from '../SelectTemplates/SelectTemplates'
import { templatesName } from '../../helpers/constants/resumeTemplateNames'
import BackToTemplatesBtn from '../SelectTemplates/BackToTemplatesBtn/BackToTemplatesBtn'

interface PageLayoutProps {
  Component: ElementType
}

const PageLayout: React.FC<PageLayoutProps> = ({ Component }) => {
  const titleFromStore = useSelector(
    (state: RootState) => state.pdf.title.title,
  )

  const currentTemplate = useSelector(
    (state: RootState) => state.pdf.templateName.currentTemplateName,
  )

  const titleResume = titleFromStore || 'resume'

  const [width, setWidth] = useState<number>(window.innerWidth)
  const [PdfComponent, setPdfComponent] = useState<any>(null)
  const [pdfLoadStatus, setStatus] = useState<boolean>(true)

  // TEMPLATE STATE
  const [showTemplateOptions, setShowTemplateOptions] = useState<boolean>(true)

  const [isClicked, setIsClicked] = useState<boolean>(false)
  const tag = useRef<any>(null)

  useEffect(() => {
    window.addEventListener('resize', currentWidth)
    return () => window.removeEventListener('resize', currentWidth)
  }, [width])

  useEffect(() => {
    console.log(currentTemplate, '12')
    if (currentTemplate) {
      setShowTemplateOptions(false)
    }
  }, [currentTemplate])

  // for btn child
  function wrapperSwitchToTemplates() {
    setShowTemplateOptions((prev) => !prev)
  }

  function currentWidth() {
    setWidth(window.innerWidth)
  }

  function getPdfComponent(component: any, status: boolean) {
    setPdfComponent(component)
    setStatus(status)
  }

  // Dublin
  let dublin_resume = (
    <div
      id="resumeViews"
      ref={tag}
      className="lg:w-/12 fixed left-0  top-0  h-[100vh] w-[100vw] flex-1 bg-browser-pdf md:hidden"
    >
      <DublinResume
        style={{
          width: '110%',
          height: '95vh',
          backgroundColor: 'rgb(42 42 46)',
          color: 'black',
          transform: 'scale(0.9)',
          marginLeft: '-20px',
          paddingTop: '5%',
        }}
        style_download_link={{
          position: 'absolute',
          top: '138%',
          right: '50%',
          fontWeight: 'semibold',
          width: '25%',
          color: 'white',
          borderRadius: '5pt',
          padding: '10pt',
          textAlign: 'center',
          backgroundColor: 'rgb(35 35 76)',
        }}
        getPdfComponent={getPdfComponent}
      />
    </div>
  )

  let dublin_tablet_resume = (
    <div
      id="resumeViews"
      ref={tag}
      className="fixed left-0 top-0 h-[100vh] w-[100vw] flex-1 bg-browser-pdf  "
    >
      <DublinResume
        getPdfComponent={getPdfComponent}
        style={{
          position: 'absolute',
          left: '0%',
          top: '5%',
          width: '110%',
          height: '100%',
          backgroundColor: 'rgb(42 42 46)',
          color: 'black',
          transform: 'scale(0.8)',
          marginTop: '-70px',
          marginLeft: '-35px',
        }}
        style_download_link={{
          position: 'absolute',
          top: '138%',
          right: '50%',
          fontWeight: 'semibold',
          width: '25%',
          color: 'white',
          borderRadius: '5pt',
          padding: '10pt',
          textAlign: 'center',
          backgroundColor: 'rgb(35 35 76)',
        }}
      />
    </div>
  )

  let dublin_big_laptop_resume = (
    <div
      id="resumeViews"
      ref={tag}
      className=" fixed right-[3%] top-[-6%]  w-5/12 flex-1 scale-[70%] "
    >
      <DublinResume
        getPdfComponent={getPdfComponent}
        style={{
          width: '110%',
          height: '100vh',
          backgroundColor: 'rgb(42 42 46)',
          color: 'black',
          transform: 'scale(1.0)',
          marginLeft: '-15px',
          marginRight: '-15px',
        }}
        style_download_link={{
          position: 'absolute',
          top: '110%',
          right: '31%',
          fontWeight: 'bold',
          fontSize: '14pt',
          width: '35%',
          color: 'white',
          borderRadius: '5pt',
          padding: '15pt',
          textAlign: 'center',
          backgroundColor: 'rgb(112 112 229)',
        }}
      />
    </div>
  )

  // London
  let london_resume = (
    <div
      id="resumeViews"
      ref={tag}
      className="lg:w-/12 fixed left-0 top-0 z-10 h-[100vh] w-[100vw] flex-1 bg-browser-pdf md:hidden"
    >
      <LondonResume
        style={{
          width: '110%',
          height: '100vh',
          backgroundColor: 'rgb(42 42 46)',
          color: 'black',
          transform: 'scale(0.9)',
          marginLeft: '-20px',
          paddingTop: '5%',
        }}
        style_download_link={{
          position: 'absolute',
          top: '138%',
          right: '50%',
          fontWeight: 'semibold',
          width: '25%',
          color: 'white',
          borderRadius: '5pt',
          padding: '10pt',
          textAlign: 'center',
          backgroundColor: 'rgb(35 35 76)',
        }}
        getPdfComponent={getPdfComponent}
      />
    </div>
  )

  let london_tablet_resume = (
    <div
      id="resumeViews"
      ref={tag}
      className="fixed left-0 top-0 h-[100vh] w-[100vw] flex-1 bg-browser-pdf  "
    >
      <LondonResume
        getPdfComponent={getPdfComponent}
        style={{
          position: 'absolute',
          left: '0%',
          top: '5%',
          width: '110%',
          height: '100%',
          backgroundColor: 'rgb(42 42 46)',
          color: 'black',
          transform: 'scale(0.8)',
          marginTop: '-70px',
          marginLeft: '-35px',
        }}
        style_download_link={{
          position: 'absolute',
          top: '138%',
          right: '50%',
          fontWeight: 'semibold',
          width: '25%',
          color: 'white',
          borderRadius: '5pt',
          padding: '10pt',
          textAlign: 'center',
          backgroundColor: 'rgb(35 35 76)',
        }}
      />
    </div>
  )

  let london_big_laptop = (
    <div
      id="resumeViews"
      ref={tag}
      className=" fixed right-[3%] top-[-6%]   w-5/12 flex-1 scale-[70%] "
    >
      <LondonResume
        getPdfComponent={getPdfComponent}
        style={{
          width: '110%',
          height: '100vh',
          backgroundColor: 'rgb(42 42 46)',
          color: 'black',
          transform: 'scale(1.0)',
          marginLeft: '-15px',
          marginRight: '-15px',
        }}
        style_download_link={{
          position: 'absolute',
          top: '110%',
          right: '31%',
          fontWeight: 'bold',
          fontSize: '14pt',
          width: '35%',
          color: 'white',
          borderRadius: '5pt',
          padding: '15pt',
          textAlign: 'center',
          backgroundColor: 'rgb(112 112 229)',
        }}
      />
    </div>
  )

  return (
    <div id="pageLayout" className="builderPage relative flex  h-screen ">
      <div id="contentPart" className="  h-screen w-full py-5 xl:w-6/12 ">
        <Component />
      </div>

      {showTemplateOptions ? (
        <SelectTemplates />
      ) : (
        <BackToTemplatesBtn
          wrapperSwitchToTemplates={wrapperSwitchToTemplates}
        />
      )}

      {!showTemplateOptions && (
        <div className="z-20">
          {currentTemplate === templatesName.dublin &&
            ((isClicked &&
              width <= bk.laptop.small &&
              width < bk.tablet &&
              dublin_resume) ||
              (isClicked &&
                width >= bk.tablet &&
                width <= bk.laptop.medium &&
                dublin_tablet_resume) ||
              (width >= bk.laptop.medium && dublin_big_laptop_resume))}
          {currentTemplate === templatesName.london &&
            ((isClicked &&
              width <= bk.laptop.small &&
              width < bk.tablet &&
              london_resume) ||
              (isClicked &&
                width >= bk.tablet &&
                width <= bk.laptop.medium &&
                london_tablet_resume) ||
              (width >= bk.laptop.medium && london_big_laptop))}
        </div>
      )}

      <div className="fixed bottom-5 right-9 z-20 flex  items-center justify-center gap-5  rounded-2xl lg:h-16 lg:w-16 xl:hidden">
        {!showTemplateOptions && (
          <button
            data-testid="builderBtn"
            onClick={() => setIsClicked((prev) => !prev)}
            className=" flex  items-center justify-center rounded-2xl bg-additional-color p-2 text-blue-50 hover:bg-additional-hover-color focus:bg-additional-hover-color   "
          >
            {!isClicked ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 md:h-8 md:w-7 lg:h-8 lg:w-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-5 w-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88"
                />
              </svg>
            )}
          </button>
        )}

        {isClicked && !pdfLoadStatus && (
          <div
            id="downloadBtn"
            className="flex  cursor-pointer items-center justify-center rounded-2xl bg-additional-color p-2 text-blue-50 hover:bg-additional-hover-color focus:bg-additional-hover-color"
          >
            <PDFDownloadLink
              document={PdfComponent}
              fileName={titleResume + '.pdf'}
              data-testid="downloadBtn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </PDFDownloadLink>
          </div>
        )}
      </div>
    </div>
  )
}

export default PageLayout
