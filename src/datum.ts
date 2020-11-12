import dayjs from 'dayjs'
import 'dayjs/locale/de'
import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.locale('de')
dayjs.extend(customParseFormat)

export type DatumType = {
  year: number
  month: number
  day: number
}

export class Datum {
  public static parse(datum: string): dayjs.Dayjs {
    return dayjs(datum, 'DD.MM.YYYY')
  }

  public static format(date: dayjs.Dayjs): DatumType {
    return {
      year: date.year(),
      month: date.month() + 1,
      day: date.date(),
    }
  }

  public static toEightDigits(date: DatumType): string {
    const year = ('20' + date.year).slice(-4)
    const month = ('0' + date.month).slice(-2)
    const day = ('0' + date.day).slice(-2)
    return `${year}${month}${day}`
  }

  public static getMuttertag(year: number): DatumType {
    // 2. Sonntag im Mai
    let date = Datum.parse(`01.05.${year}`)
    const daysToFirstSunday = date.day() === 0 ? 0 : 7 - date.day()
    date = date.add(daysToFirstSunday + 7, 'day')
    return Datum.format(date)
  }

  public static getAdvent(year: number, adventNo: 1 | 2 | 3 | 4): DatumType {
    return Datum.getSundayBeforeChristmas(year, 4 - adventNo)
  }

  public static getTodensonntag(year: number): DatumType {
    return Datum.getSundayBeforeChristmas(year, 4)
  }

  private static getSundayBeforeChristmas(year: number, sundayNo: number): DatumType {
    let date = Datum.parse(`24.12.${year}`)
    const daysToLastSunday = date.day() === 0 ? 7 : date.day()
    date = date.subtract(daysToLastSunday, 'day')
    date = date.subtract(sundayNo, 'week')
    return Datum.format(date)
  }
}
