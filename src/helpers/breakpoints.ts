type BreakPoints = {
  mobile: {
    extra_small: number
    medium: number
    big: number
  }
  tablet: number
  laptop: {
    small: number
    medium: number
    large: number
  }
  '4k': number
}

export const bk: BreakPoints = {
  mobile: {
    extra_small: 320,
    medium: 375,
    big: 425,
  },
  tablet: 768,
  laptop: {
    small: 1024,
    medium: 1280,
    large: 1440,
  },
  '4k': 2560,
}
