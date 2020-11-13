import dayjs from 'dayjs'
import { DateUtils } from '../date-utils'
import { AppointmentType, AppointmentTypeKey } from './appointment-type'

export abstract class BaseAppointment {
  private _begin: dayjs.Dayjs
  private _end: dayjs.Dayjs

  constructor(
    public readonly typeKey: AppointmentTypeKey,
    begin: string,
    end: string,
    public readonly isBlocking: boolean,
    public readonly category?: string,
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
}
