import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
  Link,
} from '@react-pdf/renderer'

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
    marginLeft: '104px',
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',

    gap: '6px',
    maxWidth: '450px',
  },

  skillBox_title_box: {
    marginRight: '5px',
    flex: '1',
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

const MyResume = ({
  data = {
    title: {},
    personalDetails: {
      jobTitle: 'Software Engineer',
      first_name: 'Tofik',
      email: 'tof@gmail.com',
      country: 'Ukraine',
      photo: '',
      last_name: 'Hasanov',
      phone: '+380961948997',
      city: 'Kyiv',
      address: '',
      driving_license: '',
      place_birth: '',
      postalCode: '',
      nationality: '',
      date_birth: '',
    },
    professionalSummary: {
      summary: `I am a dedicated Full Stack Developer with 2.5 years of commercial experience in crafting robust and scalable software solutions. My versatile skill set allows me to seamlessly navigate both frontend and backend development, contributing to the success of projects through my technical expertise and positive approach to challenges. Furthermore, I am fluent in English, Ukrainian, Russian, Azerbaijani & Turkish`,
    },
    employmentHistory: [
      {
        id: 'I0I4AUfhrUu5ypjskHb0q',
        jobTitleHistory: 'FullStack',
        start_date: '2012-02-12',
        end_date: '2014-12-24',
        employer: 'Fors',
        city: 'Kyiv',
        description:
          'Implemented frontend solutions using modern frameworks such as React to enhance code maintainability and facilitate component-based development.Employed performance optimization techniques, includ',
      },
      {
        id: 'I0I4AUfhrUu5ypjskHb0q',
        jobTitleHistory: 'FullStack',
        start_date: '2012-02-12',
        end_date: '2014-12-24',
        employer: 'Fors',
        city: 'Kyiv',
        description:
          'Implemented frontend solutions using modern frameworks such as React to enhance code maintainability and facilitate component-based development.Employed performance optimization techniques, includ',
      },
      {
        id: 'I0I4AUfhrUu5ypjskHb0q',
        jobTitleHistory: 'FullStack',
        start_date: '2012-02-12',
        end_date: '2014-12-24',
        employer: 'Fors',
        city: 'Kyiv',
        description:
          'Implemented frontend solutions using modern frameworks such as React to enhance code maintainability and facilitate component-based development.Employed performance optimization techniques, includ',
      },
    ],
    education: [
      {
        id: 'os18phrxqA_jVuG2-Z1Fl',
        school: 'GOIT',
        start_date: '123123-03-12',
        end_date: '31232-12-31',
        degree: 'Full Stack course',
        city: 'Kyiv',
        description: `CS50's Web Programming with JavaScript, Harvard University`,
      },
      {
        id: 'os18phrxqA_jVuG2-Z1Fl',
        school: 'GOIT',
        start_date: '123123-03-12',
        end_date: '31232-12-31',
        degree: 'Full Stack course',
        city: 'Kyiv',
        description: `CS50's Web Programming with JavaScript, Harvard University`,
      },
      {
        id: 'os18phrxqA_jVuG2-Z1Fl',
        school: 'GOIT',
        start_date: '123123-03-12',
        end_date: '31232-12-31',
        degree: 'Full Stack course',
        city: 'Kyiv',
        description: `CS50's Web Programming with JavaScript, Harvard University`,
      },
      {
        id: 'os18phrxqA_jVuG2-Z1Fl',
        school: 'GOIT',
        start_date: '123123-03-12',
        end_date: '31232-12-31',
        degree: 'Full Stack course',
        city: 'Kyiv',
        description: `CS50's Web Programming with JavaScript, Harvard University`,
      },
    ],
    websitesSocialLink: [
      {
        id: 'Xe0oCtkZfc-1XJ-BC2JF7',
        label: 'Linkdein',
        link: 'linkdein.com',
      },
      {
        id: 'Xe0oCtkZfc-1XJ-BC2JF4',
        label: 'Twitter',
        link: 'linkdein.com',
      },
    ],
    skills: [
      {
        id: 'zbupQlg1pnXi0esj8at1i',
        skill: 'Project Management Skills',
        level: 'Expert',
      },
      {
        id: 'zbupQlg1pnXi0esj8at1i',
        skill: 'Project Management Skills',
        level: 'Expert',
      },
      {
        id: 'zbupQlg1pnXi0esj8at1i',
        skill: 'Project Management Skills',
        level: 'Expert',
      },
      {
        id: 'zbupQlg1pnXi0esj8at1i',
        skill: 'Project Management Skills',
        level: 'Expert',
      },
      {
        id: 'zbupQlg1pnXi0esj8at1i',
        skill: 'Project Management Skills',
        level: 'Expert',
      },
      {
        id: 'zbupQlg1pnXi0esj8at1i',
        skill: 'Project Management Skills',
        level: 'Expert',
      },
      {
        id: 'zbupQlg1pnXi0esj8at1i',
        skill: 'Project Management Skills',
        level: 'Expert',
      },
      {
        id: 'zbupQlg1pnXi0esj8at1i',
        skill: 'Project Management Skills',
        level: 'Expert',
      },
      {
        id: 'zbupQlg1pnXi0esj8at1i',
        skill: 'Project Management Skills',
        level: 'Expert',
      },
      {
        id: 'zbupQlg1pnXi0esj8at1i',
        skill: 'Project Management Skills',
        level: 'Expert',
      },
      {
        id: 'zbupQlg1pnXi0esj8at1i',
        skill: 'Project Management Skills',
        level: 'Expert',
      },
      {
        id: 'zbupQlg1pnXi0esj8at1i',
        skill: 'Project Management Skills',
        level: 'Expert',
      },
    ],
    languages: [
      {
        id: 'FrsFGJvzCd4jg96xWZ2jk',
        language: 'English',
        level: 'Expert',
      },
      {
        id: 'kwNtCCBbkWevxFbA2ICwc',
        language: 'Ukrainian',
        level: 'Expert',
      },
      {
        id: 'DWriAQ5Y9e3jWiUUwWTYx',
        language: 'Russian',
        level: 'Expert',
      },
    ],
  },
}) => (
  <PDFViewer style={{ width: '100%', height: '90%' }} showToolbar={false}>
    <Document subject="resume">
      <Page size="A4" style={styles.page}>
        {/* Title */}
        <View>
          <Text style={styles.hero__title}>
            {data.personalDetails.first_name} {data.personalDetails.last_name}
          </Text>
          <Text style={styles.hero__descriptions}>
            {data.personalDetails.phone} {data.personalDetails.email}
          </Text>
        </View>
        <View style={styles.line}></View>

        {/* LINKS */}
        <View style={styles.linkBox}>
          <Text style={styles.linkBox__title}>LINKS</Text>
          {data.websitesSocialLink.map((item) => (
            <Text>
              <Link src={item.link} style={styles.linkBox__link}>
                {item.label}
              </Link>
            </Text>
          ))}
        </View>

        {/* LANGUAGE */}
        <View style={styles.langBox}>
          <View style={styles.langBox_title_box}>
            <Text style={styles.langBox__title}>Languages</Text>
          </View>
          <View style={styles.langBox_dynamic}>
            {data.languages.map((lang) => (
              <View>
                <Text key={lang.id}>{lang.language}</Text>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.line}></View>

        {/* PROFILE */}
        <View style={styles.profileBox}>
          <Text style={styles.profileBox__title}>PROFILE</Text>
          <Text style={styles.profileBox__description}>
            {data.professionalSummary.summary}
          </Text>
        </View>
        <View style={styles.line}></View>

        {/* Employment History */}
        <View style={styles.employmentBox}>
          <View>
            <Text style={styles.employmentBox__title}>Employment History</Text>
          </View>
          <View>
            {data.employmentHistory.map((job) => (
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

        {/* Education */}
        <View style={styles.educationBox}>
          <View>
            <Text style={styles.educationBox__title}>Education</Text>
          </View>
          <View>
            {data.education.map((edu) => (
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

        {/* Skills */}
        <View style={styles.skillBox}>
          <View style={styles.skillBox_title_box}>
            <Text style={styles.skillBox__title}>Skills</Text>
          </View>
          <View style={styles.skillBox_dynamic}>
            {data.skills.map((skill) => (
              <View style={styles.skillBox__description}>
                <Text key={skill.id}>{skill.skill}</Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  </PDFViewer>
)

export default MyResume
