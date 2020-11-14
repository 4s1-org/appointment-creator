import dayjs from 'dayjs'
import { DateUtils } from '../date-utils'
import { AppointmentType, AppointmentTypeKey } from './appointment-type'
import { CategoryTypeKey } from './category-type'

export abstract class BaseAppointment {
  private _begin: dayjs.Dayjs
  private _end: dayjs.Dayjs
  private _additionalKey: string = ''

  constructor(
    public readonly typeKey: AppointmentTypeKey,
    begin: string,
    end: string,
    public readonly isBlocking: boolean,
    public readonly categoryKey?: CategoryTypeKey,
    public readonly additionalText?: string,
  ) {
    this._begin = DateUtils.parse(begin)
    this._end = DateUtils.parse(end)
  }

  get begin(): dayjs.Dayjs {
    return this._begin
  }

  get end(): dayjs.Dayjs {
    return this._end
  }

  get text(): string {
    return AppointmentType[this.typeKey]
  }

  public get additionalKey(): string {
    return this._additionalKey
  }
  public set additionalKey(key: string) {
    this._additionalKey = key
  }
}
