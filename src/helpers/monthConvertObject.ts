interface IMonth {
  '01': 'Jan'
  '02': 'Feb'
  '03': 'Mar'
  '04': 'Apr'
  '05': 'May'
  '06': 'Jun'
  '07': 'Jul'
  '08': 'Aug'
  '09': 'Sep'
  '10': 'Oct'
  '11': 'Nov'
  '12': 'Dec'
  [key: string]: string
}
const monthShortNames: IMonth = {
  '01': 'Jan',
  '02': 'Feb',
  '03': 'Mar',
  '04': 'Apr',
  '05': 'May',
  '06': 'Jun',
  '07': 'Jul',
  '08': 'Aug',
  '09': 'Sep',
  '10': 'Oct',
  '11': 'Nov',
  '12': 'Dec',
}

function date_beautiful(date: string) {
  if (date === 'Present') {
    return date
  }

  const [year, month] = date.split('-')

  const res = `${monthShortNames[month]} ${year}`

  if (res.includes('undefined')) {
    return ''
  } else {
    return res
  }
}

export default date_beautiful
