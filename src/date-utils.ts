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

  private static getSundayBeforeChristmas(year: number, sundayNo: number): dayjs.Dayjs {
    let date = DateUtils.parse(`24.12.${year}`)
    const daysToLastSunday = date.day() === 0 ? 7 : date.day()
    date = date.subtract(daysToLastSunday, 'day')
    date = date.subtract(sundayNo, 'week')
    return date
  }
}
