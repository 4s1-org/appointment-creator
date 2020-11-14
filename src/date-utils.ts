import dayjs from 'dayjs'
import 'dayjs/locale/de'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.locale('de')
dayjs.extend(customParseFormat)

export class DateUtils {
  public static parse(datum: string): dayjs.Dayjs {
    return dayjs(datum, 'DD.MM.YYYY')
  }

  public static toEightDigits(date: dayjs.Dayjs): string {
    return date.format('YYYYMMDD')
  }

  public static getMuttertag(year: number): dayjs.Dayjs {
    // 2. Sonntag im Mai
    let date = DateUtils.parse(`01.05.${year}`)
    const daysToFirstSunday = date.day() === 0 ? 0 : 7 - date.day()
    date = date.add(daysToFirstSunday + 7, 'day')
    return date
  }

  public static getAdvent(year: number, adventNo: 1 | 2 | 3 | 4): dayjs.Dayjs {
    return DateUtils.getSundayBeforeChristmas(year, 4 - adventNo)
  }

  public static getTodensonntag(year: number): dayjs.Dayjs {
    return DateUtils.getSundayBeforeChristmas(year, 4)
  }

  private static getSundayBeforeChristmas(
    year: number,
    sundayNo: number,
  ): dayjs.Dayjs {
    let date = DateUtils.parse(`24.12.${year}`)
    const daysToLastSunday = date.day() === 0 ? 7 : date.day()
    date = date.subtract(daysToLastSunday, 'day')
    date = date.subtract(sundayNo, 'week')
    return date
  }

  public static getEasterSunday(year: number): dayjs.Dayjs {
    const c = Math.floor(year / 100)
    const n = year - 19 * Math.floor(year / 19)
    const k = Math.floor((c - 17) / 25)
    let i = c - Math.floor(c / 4) - Math.floor((c - k) / 3) + 19 * n + 15
    i = i - 30 * Math.floor(i / 30)
    i =
      i -
      Math.floor(i / 28) *
        (1 -
          Math.floor(i / 28) *
            Math.floor(29 / (i + 1)) *
            Math.floor((21 - n) / 11))
    let j = year + Math.floor(year / 4) + i + 2 - c + Math.floor(c / 4)
    j = j - 7 * Math.floor(j / 7)
    const l = i - j
    const m = 3 + Math.floor((l + 40) / 44)
    const d = l + 28 - 31 * Math.floor(m / 4)

    const day = ('0' + d).slice(-2)
    const month = ('0' + m).slice(-2)
    return DateUtils.parse(`${day}.${month}.${year}`)
  }
}
