import {
  Document,
  PDFDownloadLink,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Link,
} from '@react-pdf/renderer'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const styles = StyleSheet.create({
  page: {
    // fontFamily: 'Inner',

    lineHeight: '1.5',
    fontSize: '10px',
    padding: 40,
    backgroundColor: 'white',
  },
  line: {
    width: '100%',
    border: '1 solid black',
    marginTop: '8px',
    marginBottom: '8px',
  },

  hero__title: {
    textAlign: 'center',
    fontWeight: 'extrabold',
    fontSize: '14px',
  },
  hero__descriptions: {
    textAlign: 'center',
  },
  // =================

  linkBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: '10px',
  },

  linkBox__title: {
    fontSize: '9px',
    letterSpacing: '1.2',
    marginRight: '63px',
  },

  linkBox__link: {
    color: 'black',
  },

  // ================

  profileBox: {
    display: 'flex',
    flexDirection: 'row',
    gap: '60px',
  },

  profileBox__title: {
    fontSize: '9px',
    letterSpacing: '1.2',
  },

  profileBox__description: {
    maxWidth: '400px',
  },

  // ================

  employmentBox: {
    // display: 'flex',
    // flexDirection: 'row',
    // gap: '15px',
  },

  employmentBox__rendering: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '15px',
    flexWrap: 'wrap',
    marginTop: '10px',
    // paddingRight: '50px',
  },

  employmentBox__title: {
    fontSize: '9px',
    letterSpacing: '1.2',
    textTransform: 'uppercase',
  },

  employmentBox__description: {
    marginTop: '-10px',
    marginLeft: '109px',
    minWidth: '350px',
    maxWidth: '430px',
  },

  employmentBox__rendering__jobtitle: {
    flex: '1',
  },

  // ================

  educationBox: {
    // display: 'flex',
    // flexDirection: 'row',
    // gap: '15px',
  },

  educationBox__rendering: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: '15px',
    flexWrap: 'wrap',
    marginTop: '10px',
    // paddingRight: '50px',
  },

  educationBox__title: {
    fontSize: '9px',
    letterSpacing: '1.2',
    textTransform: 'uppercase',
  },

  educationBox__description: {
    marginTop: '-10px',
    marginLeft: '109px',
    minWidth: '350px',
    maxWidth: '430px',
  },

  educationBox__rendering__jobtitle: {
    flex: '1',
  },
  // ================

  skillBox: {
    // marginTop: '15px',
    display: 'flex',

    flexDirection: 'row',
    // gap: '19px',
  },

  skillBox_dynamic: {
    // marginTop: '15px',
    marginLeft: '-55px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: '10px',
    width: '100%',
  },

  skillBox_title_box: {
    marginRight: '5px',
    // flex: '1',
  },

  skillBox__title: {
    textTransform: 'uppercase',
    fontSize: '9px',
    letterSpacing: '1.2',
    width: '200px',
  },

  skillBox__description: {
    // marginLeft: '20px',
    // maxWidth: '500px',
  },

  // ======================

  langBox: {
    marginTop: '5px',
    display: 'flex',
    flexDirection: 'row',
  },

  langBox_dynamic: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    gap: '10px',
    marginLeft: '-100px',
  },

  langBox_title_box: {
    marginRight: '5px',
  },

  langBox__title: {
    textTransform: 'uppercase',
    fontSize: '9px',
    letterSpacing: '1.2',
    width: '200px',
  },
})

const MyResume = ({}) => {
  const pdf = useSelector((state: RootState) => state.pdf)

  const fileName = pdf.title.title ? pdf.title.title : 'resume'

  const DocumentContent = () => (
    <Document subject="resume">
      <Page size="A4" style={styles.page}>
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
                      {'Jun 2022'} — {'Jul 2022'}
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
                      {'Jun 2022'} — {'Jul 2022'}
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
                  <View key={skill.id} style={styles.skillBox__description}>
                    <Text>{skill.skill}</Text>
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
      <PDFViewer
        style={{
          width: '100%',
          height: '127%',
          borderRadius: '8px',
        }}
        showToolbar={false}
      >
        <DocumentContent />
      </PDFViewer>
      <PDFDownloadLink
        document={<DocumentContent />}
        fileName={fileName + '.pdf'}
      >
        {({ blob, url, loading, error }) =>
          loading ? 'Loading document...' : 'Download PDF'
        }
      </PDFDownloadLink>
    </>
  )
}

export default MyResume
