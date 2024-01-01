import {
  Document,
  PDFDownloadLink,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Link,
  Font,
  Image,
} from '@react-pdf/renderer'

import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { useEffect, useState } from 'react'
import Skeletom from './Skeletom'

// * FONTS
import EBGaramondRegular from '../../assets/fonts/EBGaramond/EBGaramond-Regular.ttf'
import EBGaramondMedium from '../../assets/fonts/EBGaramond/EBGaramond-Medium.ttf'
import EBGaramondSemiBold from '../../assets/fonts/EBGaramond/EBGaramond-SemiBold.ttf'
import EBGaramondBold from '../../assets/fonts/EBGaramond/EBGaramond-Bold.ttf'
import EBGaramondExtraBold from '../../assets/fonts/EBGaramond/EBGaramond-ExtraBold.ttf'
import date_beautiful from '../../helpers/monthConvertObject'

Font.register({
  family: 'EBGaramond',
  fonts: [
    { src: EBGaramondRegular, fontWeight: 'normal' },
    { src: EBGaramondMedium, fontWeight: 'medium' },
    { src: EBGaramondSemiBold, fontWeight: 'semibold' },
    { src: EBGaramondBold, fontWeight: 'bold' },
    { src: EBGaramondExtraBold, fontWeight: 'ultrabold' },
  ],
})

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'EBGaramond',
    fontWeight: 'light',
    lineHeight: '1.5',
    fontSize: '10pt',
    // padding: 40,
    backgroundColor: 'white',
  },

  photo: {
    objectFit: 'cover',
    marginTop: '18px',
    alignSelf: 'center',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    marginBottom: '4px',
  },
  leftBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center',
    color: 'white',
    width: '25%',
    height: '100%',
    backgroundColor: '#064C41',
    padding: '12px',
  },
  rightBlock: {
    display: 'flex',
    flexDirection: 'column',
    color: 'black',
    width: '75%',
    height: '100%',
    backgroundColor: 'white',
    padding: '24px',
  },

  leftBlockLine: {
    backgroundColor: '#38756D',
    height: '1',
    width: '10px',
    margin: '0 auto',
    marginBottom: '5px',
    marginTop: '2px',
  },

  line: {
    width: '100%',
    border: '1 solid black',
    marginTop: '8pt',
    marginBottom: '8pt',
  },

  hero__title: {
    alignSelf: 'center',
    textAlign: 'center',
    fontWeight: 'semibold',
    fontSize: '14pt',
  },

  hero__jobTitle: {
    alignSelf: 'center',
    textTransform: 'uppercase',
    textAlign: 'center',
    fontSize: '6pt',
  },
  hero__descriptions: {
    // textAlign: 'center',
    fontSize: '8pt',
  },
  // =================

  linkBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10pt',
  },

  linkBox__title: {
    fontSize: '9pt',
    letterSpacing: '1.2',
    marginRight: '63pt',
  },

  linkBox__link: {
    color: 'white',
  },

  // ================

  profileBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: '60pt',
  },

  profileBox__title: {
    fontSize: '9pt',
    letterSpacing: '1.2',
  },

  profileBox__description: {
    maxWidth: '350pt',
    fontWeight: 'normal',
    fontSize: '10pt',
    lineHeight: '1.4',
  },

  // ================

  employmentBox: {
    marginBottom: '5px',
    maxWidth: '350pt',
  },

  employmentBox__rendering: {},

  employmentBox__title: {
    textAlign: 'left',
    fontWeight: 'bold',
    marginTop: '8px',
    fontSize: '12px',
  },

  employmentBox__description: {
    marginTop: '-10pt',
    marginLeft: '8pt',
    marginBottom: '10pt',
    fontSize: '12pt',
    fontWeight: 'normal',
  },

  employmentBox__rendering__jobtitle: {
    fontWeight: 'semibold',
  },

  // ================

  educationBox: {},

  educationBox__rendering: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '15pt',
    flexWrap: 'wrap',
    marginTop: '10pt',
  },

  educationBox__title: {
    fontSize: '9pt',
    letterSpacing: '1.2',
    textTransform: 'uppercase',
  },

  educationBox__description: {
    marginTop: '-10pt',
    marginLeft: '109pt',
    minWidth: '350pt',
    maxWidth: '430pt',
    lineHeight: 1,
  },

  educationBox__rendering__jobtitle: {
    flex: '1',
    fontWeight: 'semibold',
  },
  // ================

  skillBox: {
    // display: 'flex',
    // flexDirection: 'row',
  },

  skillBox_dynamic: {
    marginLeft: '-55pt',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: '10pt',
    width: '100%',
  },

  skillBox_title_box: {
    marginRight: '5pt',
  },

  skillBox__title: {
    textTransform: 'uppercase',
    fontSize: '9pt',
    letterSpacing: '1.2',
    width: '200pt',
  },

  skillBox__description: {},

  // ======================

  langBox: {
    marginTop: '5pt',
    display: 'flex',
    flexDirection: 'row',
  },

  langBox_dynamic: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: '10pt',
    marginLeft: '-100pt',
  },

  langBox_title_box: {
    marginRight: '5pt',
  },

  langBox__title: {
    textTransform: 'uppercase',
    fontSize: '9pt',
    letterSpacing: '1.2',
    width: '200pt',
  },
})

interface IProps {
  style?: { [key: string]: string | number }
  style_download_link?: { [key: string]: string | number }
  getPdfComponent?: (component: any, status: boolean) => void
}
const PRESENT_STR = 'Present'

const DublinTemplate: React.FC<IProps> = ({
  style = {},
  style_download_link = {},
  getPdfComponent,
}) => {
  const [isPdfLoading, setIsPdfLoading] = useState(false)
  const [photo, setPhoto] = useState<string | null>(null)

  const pdf = useSelector((state: RootState) => state.pdf)

  const fileName = pdf.title.title ? pdf.title.title : 'resume'

  const leftSide_details_section_checker = [
    pdf.personalDetails.country,
    pdf.personalDetails.city,
    pdf.personalDetails.address,
    pdf.personalDetails.postalCode,
    pdf.personalDetails.email,
  ]
  useEffect(() => {
    setIsPdfLoading(true)
    getPdfComponent!(DocumentContent, true)

    const delay = setTimeout(() => {
      setIsPdfLoading(false)
      getPdfComponent!(DocumentContent, false)
    }, 1000)

    return () => clearTimeout(delay)
  }, [pdf])

  useEffect(() => {
    // @ts-ignore
    setPhoto(pdf.personalDetails.photo!)

    // return () => {
    //   if (photo) {
    //     URL.revokeObjectURL(photo)
    //   }
    // }
  }, [pdf.personalDetails.photo])

  const GreenLine = () => <View style={styles.leftBlockLine}></View>

  const DocumentContent = () => (
    <Document title={fileName} pageLayout="singlePage">
      <Page size="A4" style={styles.page} dpi={70}>
        {/* LEFT SIDE */}
        <View style={styles.leftBlock}>
          {photo ? <Image src={photo} style={styles.photo} /> : ''}

          {/* Title */}
          {Object.values(pdf.personalDetails).some(Boolean) && (
            <>
              <View>
                {/* Full Name */}
                <Text style={styles.hero__title}>
                  {pdf.personalDetails.first_name}{' '}
                  {pdf.personalDetails.last_name}
                </Text>

                <GreenLine />

                {/* Job Description */}
                <Text style={styles.hero__jobTitle}>
                  {pdf.personalDetails.jobTitle && pdf.personalDetails.jobTitle}
                </Text>

                {leftSide_details_section_checker.some(Boolean) && (
                  <>
                    <Text
                      style={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        marginTop: '8px',
                      }}
                    >
                      Details
                    </Text>

                    <Text style={styles.hero__descriptions}>
                      {pdf.personalDetails.country} {pdf.personalDetails.city}
                      {'\n'}
                      {pdf.personalDetails.address}
                      {', '}
                      {pdf.personalDetails.postalCode}
                      {'\n'}{' '}
                      <Link
                        src={'tel:' + pdf.personalDetails.phone}
                        style={{ color: 'white' }}
                      >
                        {pdf.personalDetails.phone}
                      </Link>
                      {'\n'}
                      <Link
                        src={'mailto:' + pdf.personalDetails.email}
                        style={{ color: 'white' }}
                      >
                        {pdf.personalDetails.email}
                      </Link>
                    </Text>
                  </>
                )}

                {/* LINKS */}
                {Object.values(pdf.websitesSocialLink).some(Boolean) && (
                  <>
                    <Text
                      style={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        marginTop: '8px',
                      }}
                    >
                      Links
                    </Text>
                    {pdf.websitesSocialLink.map((link) => (
                      <>
                        <Text key={link.id} style={{ marginBottom: '2px' }}>
                          <Link
                            src={
                              link.link!.includes('http')
                                ? link.link!
                                : 'https://' + link.link!
                            }
                            style={styles.linkBox__link}
                          >
                            {link.label}
                          </Link>
                        </Text>
                        {'\n'}
                      </>
                    ))}
                  </>
                )}

                {/* Skills */}
                {Object.values(pdf.skills).some(Boolean) && (
                  <>
                    <Text
                      style={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        marginTop: '8px',
                      }}
                    >
                      Skills
                    </Text>
                    {pdf.skills.map((skill) => (
                      <>
                        <Text key={skill.id} style={{ marginBottom: '2px' }}>
                          {skill.skill} - {skill.level}
                        </Text>
                        {'\n'}
                      </>
                    ))}
                  </>
                )}

                {/* Language */}
                {Object.values(pdf.skills).some(Boolean) && (
                  <>
                    <Text
                      style={{
                        textAlign: 'left',
                        fontWeight: 'bold',
                        marginTop: '8px',
                      }}
                    >
                      Languages
                    </Text>
                    {pdf.languages.map((lang) => (
                      <>
                        <Text key={lang.id} style={{ marginBottom: '2px' }}>
                          {lang.language}
                        </Text>
                        {'\n'}
                      </>
                    ))}
                  </>
                )}
              </View>
            </>
          )}
        </View>
        {/* RIGHT SIDE */}
        <View style={styles.rightBlock}>
          {/* PROFILE */}
          {Object.values(pdf.professionalSummary).some(Boolean) && (
            <>
              <Text
                style={{
                  textAlign: 'left',
                  fontWeight: 'bold',
                  marginTop: '8px',
                  fontSize: '12px',
                }}
              >
                Profile
              </Text>
              <Text style={styles.profileBox__description}>
                {pdf.professionalSummary.summary}
              </Text>
            </>
          )}

          {/* Employment History */}
          {Object.values(pdf.employmentHistory).some(Boolean) && (
            <View style={styles.employmentBox}>
              <View>
                <Text style={styles.employmentBox__title}>
                  Employment History
                </Text>
              </View>
              {pdf.employmentHistory.map((job) => (
                <View key={job.id} style={styles.employmentBox__rendering}>
                  <Text style={styles.employmentBox__rendering__jobtitle}>
                    {job.jobTitleHistory}, {job.employer}, {job.city}
                  </Text>

                  <Text style={{ color: 'gray', marginBottom: '10px' }}>
                    {job.start_date && (
                      <>
                        {date_beautiful(job.start_date!)} —{' '}
                        {date_beautiful(
                          job.end_date ? job.end_date : PRESENT_STR,
                        )}
                      </>
                    )}
                  </Text>

                  <Text style={styles.employmentBox__description}>
                    {job.description}
                  </Text>
                </View>
              ))}
            </View>
          )}

          {/* Education */}
          {Object.values(pdf.education).some(Boolean) && (
            <View style={styles.employmentBox}>
              <View>
                <Text style={styles.employmentBox__title}>Education</Text>
              </View>
              {pdf.education.map((edu) => (
                <View key={edu.id} style={styles.employmentBox__rendering}>
                  <Text style={styles.employmentBox__rendering__jobtitle}>
                    {edu.school}, {edu.degree}, {edu.city}
                  </Text>

                  <Text style={{ color: 'gray', marginBottom: '10px' }}>
                    {edu.start_date && (
                      <>
                        {date_beautiful(edu.start_date!)} —{' '}
                        {date_beautiful(
                          edu.end_date ? edu.end_date : PRESENT_STR,
                        )}
                      </>
                    )}
                  </Text>

                  <Text style={styles.employmentBox__description}>
                    {edu.description}
                  </Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </Page>
    </Document>
  )

  const stylesSet = Object.values(style).length
    ? style
    : {
        width: '70%',
        height: '87vh',
        backgroundColor: 'white',
        color: 'black',
        transform: 'scale(1.4)',
        marginTop: '100px',
      }
  const stylesSetBtn = Object.values(style_download_link).length
    ? style_download_link
    : {
        position: 'absolute',
        top: '118%',
        right: '50%',
        fontWeight: 'bold',
        width: '25%',
        color: 'white',
        borderRadius: '5pt',
        padding: '10pt',
        textAlign: 'center',
        backgroundColor: 'rgb(112 112 229)',
      }

  return (
    <>
      {isPdfLoading ? (
        <Skeletom />
      ) : (
        <>
          <PDFViewer style={stylesSet} showToolbar={true}>
            <DocumentContent />
          </PDFViewer>

          <PDFDownloadLink
            document={<DocumentContent />}
            fileName={fileName + '.pdf'}
            style={stylesSetBtn}
          >
            Download PDF
          </PDFDownloadLink>
        </>
      )}
    </>
  )
}

export default DublinTemplate
