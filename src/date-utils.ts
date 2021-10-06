import { DateTime, Settings } from 'luxon'

Settings.defaultZone = 'Europe/Berlin'
Settings.defaultLocale = 'de-DE'

export class DateUtils {
  public static parse(datum: string): DateTime {
    return DateTime.fromFormat(datum, 'dd.MM.yyyy')
  }

  public static format(date: DateTime): string {
    return date.toFormat('dd.MM.yyyy')
  }

  public static toEightDigits(date: DateTime): string {
    return date.toFormat('yyyyMMdd')
  }

  public static getMuttertag(year: number): DateTime {
    // 2. Sonntag im Mai
    let date = DateUtils.parse(`01.05.${year}`)
    const daysToFirstSunday = date.weekday === 7 ? 0 : 7 - date.weekday
    date = date.plus({ days: daysToFirstSunday + 7 })
    return date
  }

  public static getAdvent(year: number, adventNo: 1 | 2 | 3 | 4): DateTime {
    return DateUtils.getSundayBeforeChristmas(year, 4 - adventNo)
  }

  public static getTodensonntag(year: number): DateTime {
    return DateUtils.getSundayBeforeChristmas(year, 4)
  }

  private static getSundayBeforeChristmas(year: number, sundayNo: number): DateTime {
    let date = DateUtils.parse(`24.12.${year}`)
    const daysToLastSunday = date.weekday === 7 ? 7 : date.weekday
    date = date.minus({ days: daysToLastSunday })
    date = date.minus({ weeks: sundayNo })
    return date
  }

  public static getEasterSunday(year: number): DateTime {
    const c = Math.floor(year / 100)
    const n = year - 19 * Math.floor(year / 19)
    const k = Math.floor((c - 17) / 25)
    let i = c - Math.floor(c / 4) - Math.floor((c - k) / 3) + 19 * n + 15
    i = i - 30 * Math.floor(i / 30)
    i = i - Math.floor(i / 28) * (1 - Math.floor(i / 28) * Math.floor(29 / (i + 1)) * Math.floor((21 - n) / 11))
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
