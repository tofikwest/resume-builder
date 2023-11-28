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
    fontFamily: 'EBGaramond',
    fontWeight: 'light',
    lineHeight: '1.5',
    fontSize: '10pt',
    padding: 40,
    backgroundColor: 'white',
  },
  line: {
    width: '100%',
    border: '1 solid black',
    marginTop: '8pt',
    marginBottom: '8pt',
  },

  hero__title: {
    textAlign: 'center',
    fontWeight: 'semibold',
    fontSize: '14pt',
  },
  hero__descriptions: {
    textAlign: 'center',
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
    color: 'black',
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
    maxWidth: '386pt',
    fontWeight: 'extralight',
  },

  // ================

  employmentBox: {},

  employmentBox__rendering: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '15pt',
    flexWrap: 'wrap',
    marginTop: '10pt',
  },

  employmentBox__title: {
    fontSize: '9pt',
    letterSpacing: '1.2',
    textTransform: 'uppercase',
  },

  employmentBox__description: {
    marginTop: '-10pt',
    marginLeft: '109pt',
    minWidth: '350pt',
    maxWidth: '430pt',
    lineHeight: 1,
  },

  employmentBox__rendering__jobtitle: {
    flex: '1',
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
    display: 'flex',
    flexDirection: 'row',
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

const PRESENT_STR = 'Present'

const MyResume = () => {
  const [isPdfLoading, setIsPdfLoading] = useState(false)

  const pdf = useSelector((state: RootState) => state.pdf)

  const fileName = pdf.title.title ? pdf.title.title : 'resume'

  useEffect(() => {
    setIsPdfLoading(true)
    const delay = setTimeout(() => {
      setIsPdfLoading(false)
    }, 1000)

    return () => clearTimeout(delay)
  }, [pdf])

  const DocumentContent = () => (
    <Document title={fileName} pageLayout="singlePage">
      <Page size="A4" style={styles.page} dpi={70}>
        {/* Title */}
        {Object.values(pdf.personalDetails).some(Boolean) && (
          <>
            <View>
              <Text style={styles.hero__title}>
                {pdf.personalDetails.first_name} {pdf.personalDetails.last_name}
                {pdf.personalDetails.jobTitle &&
                  ', ' + pdf.personalDetails.jobTitle}
              </Text>
              <Text style={styles.hero__descriptions}>
                {pdf.personalDetails.country} {pdf.personalDetails.city}{' '}
                {pdf.personalDetails.address} {pdf.personalDetails.postalCode}{' '}
                {pdf.personalDetails.phone} {pdf.personalDetails.email}
              </Text>
            </View>
            <View style={styles.line}></View>
          </>
        )}

        {/* LINKS */}
        {Object.values(pdf.websitesSocialLink).some(Boolean) && (
          <>
            <View style={styles.linkBox}>
              <Text style={styles.linkBox__title}>LINKS</Text>
              {pdf.websitesSocialLink.map((item) => (
                <Text key={item.id}>
                  <Link
                    src={
                      item.link!.includes('http')
                        ? item.link!
                        : 'https://' + item.link!
                    }
                    style={styles.linkBox__link}
                  >
                    {item.label}
                  </Link>
                </Text>
              ))}
            </View>
          </>
        )}

        {/* LANGUAGE */}
        {Object.values(pdf.languages).some(Boolean) && (
          <>
            <View style={styles.langBox}>
              <View style={styles.langBox_title_box}>
                <Text style={styles.langBox__title}>Languages</Text>
              </View>
              <View style={styles.langBox_dynamic}>
                {pdf.languages.map((lang) => (
                  <View key={lang.id}>
                    <Text key={lang.id}>{lang.language}</Text>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.line}></View>
          </>
        )}

        {/* PROFILE */}
        {Object.values(pdf.professionalSummary).some(Boolean) && (
          <>
            <View style={styles.profileBox}>
              <Text style={styles.profileBox__title}>PROFILE</Text>
              <Text style={styles.profileBox__description}>
                {pdf.professionalSummary.summary}
              </Text>
            </View>
            <View style={styles.line}></View>
          </>
        )}

        {/* Employment History */}
        {Object.values(pdf.employmentHistory).some(Boolean) && (
          <>
            <View style={styles.employmentBox}>
              <View>
                <Text style={styles.employmentBox__title}>
                  Employment History
                </Text>
              </View>
              <View>
                {pdf.employmentHistory.map((job) => (
                  <View key={job.id} style={styles.employmentBox__rendering}>
                    <Text>
                      {job.start_date && (
                        <>
                          {date_beautiful(job.start_date!)} —{' '}
                          {date_beautiful(
                            job.end_date ? job.end_date : PRESENT_STR,
                          )}
                        </>
                      )}
                    </Text>
                    <Text style={styles.employmentBox__rendering__jobtitle}>
                      {job.jobTitleHistory}, {job.employer}
                    </Text>
                    <Text>{job.city}</Text>
                    <View>
                      <Text style={styles.employmentBox__description}>
                        {job.description}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.line}></View>
          </>
        )}

        {/* Education */}
        {Object.values(pdf.education).some(Boolean) && (
          <>
            <View style={styles.educationBox}>
              <View>
                <Text style={styles.educationBox__title}>Education</Text>
              </View>
              <View>
                {pdf.education.map((edu) => (
                  <View key={edu.id} style={styles.educationBox__rendering}>
                    <Text>
                      {edu.start_date && (
                        <>
                          {date_beautiful(edu.start_date!)} —{' '}
                          {date_beautiful(
                            edu.end_date ? edu.end_date : PRESENT_STR,
                          )}
                        </>
                      )}
                    </Text>
                    <Text style={styles.educationBox__rendering__jobtitle}>
                      {edu.degree}, {edu.school}
                    </Text>
                    <Text>{edu.city}</Text>
                    <View>
                      <Text style={styles.educationBox__description}>
                        {edu.description}
                      </Text>
                    </View>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.line}></View>
          </>
        )}

        {/* Skills */}
        {Object.values(pdf.skills).some(Boolean) && (
          <>
            <View style={styles.skillBox}>
              <View style={styles.skillBox_title_box}>
                <Text style={styles.skillBox__title}>Skills</Text>
              </View>
              <View style={styles.skillBox_dynamic}>
                {pdf.skills.map((skill) => (
                  <View key={skill.id}>
                    <Text style={styles.skillBox__description}>
                      {skill.skill}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </>
        )}
      </Page>
    </Document>
  )

  return (
    <>
      {isPdfLoading ? (
        <Skeletom />
      ) : (
        <>
          <PDFViewer
            style={{
              width: '70%',
              height: '87vh',
              backgroundColor: 'white',
              color: 'black',
              transform: 'scale(1.4)',
              marginTop: '100px',
            }}
            showToolbar={false}
          >
            <DocumentContent />
          </PDFViewer>

          <PDFDownloadLink
            document={<DocumentContent />}
            fileName={fileName + '.pdf'}
            style={{
              position: 'absolute',
              top: '128%',
              right: '50%',
              fontWeight: 'semibold',
              width: '25%',
              color: 'white',
              borderRadius: '5pt',
              padding: '10pt',
              textAlign: 'center',
              backgroundColor: 'rgb(35 35 76)',
            }}
          >
            Download PDF
          </PDFDownloadLink>
        </>
      )}
    </>
  )
}

export default MyResume
