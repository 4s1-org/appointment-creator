import * as dayjs from 'dayjs'
import 'dayjs/locale/de'
import * as customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.locale('de')
dayjs.extend(customParseFormat)

export class Datum {
  public static parse(datum: string): dayjs.Dayjs {
    return dayjs(datum, 'DD.MM.YYYY')
  }
}
