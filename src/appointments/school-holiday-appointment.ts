import { AppointmentTypeKey } from './appointment-type'
import { MultiDayAppointment } from './multi-day-appointment'

export class SchoolHolidayAppointment extends MultiDayAppointment {
  constructor(type: AppointmentTypeKey, begin: string, end: string) {
    super(type, begin, end, false, 'Ferien')
  }

  public split(): MultiDayAppointment[] {
    const result: MultiDayAppointment[] = []

    // let datum = this._beginn
    // let woche = 1

    // while (datum < this._ende) {
    //   result.push({
    //     beginn: datum,
    //     ende: datum.add(6, 'day'),
    //     text: `${this.text} (Woche ${woche})`,
    //   })

    //   woche++
    //   datum = datum.add(7, 'day')
    // }

    return result
  }
}
