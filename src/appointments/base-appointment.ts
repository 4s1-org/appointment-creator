import { Datum, DatumType } from '../datum'

export abstract class BaseAppointment {
  private _begin: DatumType
  private _end: DatumType
  private _endPlusOneDay: DatumType
  private _text: string
  private _isBlocking: boolean
  private _category: string

  constructor(begin: string, end: string, text: string, isBlocking: boolean, category?: string) {
    this._begin = Datum.format(Datum.parse(begin))
    const parsedEnd = Datum.parse(end)
    this._end = Datum.format(parsedEnd)
    this._endPlusOneDay = Datum.format(parsedEnd.add(1, 'day'))
    this._text = text
    this._isBlocking = isBlocking
    this._category = category || ''
  }

  get begin(): DatumType {
    return this._begin
  }

  get end(): DatumType {
    return this._end
  }

  get endPlusOneDay(): DatumType {
    return this._endPlusOneDay
  }

  get text(): string {
    return this._text
  }

  get isBlocking(): boolean {
    return this._isBlocking
  }

  get category(): string {
    return this._category
  }
}
