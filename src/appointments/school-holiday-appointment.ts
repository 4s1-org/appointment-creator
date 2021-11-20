import { AppointmentTypeKey } from './appointment-type'
import { MultiDayAppointment } from './multi-day-appointment'

export class SchoolHolidayAppointment extends MultiDayAppointment {
  constructor(type: AppointmentTypeKey, begin: string, end: string) {
    super(type, begin, end, false, 'fe')
  }

  public split(): MultiDayAppointment[] {
    const result: MultiDayAppointment[] = []

    let datum = this.begin
    let woche = 1
    woche = 1
    woche = 1

    while (datum < this.end) {
      const appointment = new MultiDayAppointment(
        this.typeKey,
        datum.toFormat('dd.MM.yyyy'),
        datum.plus({ days: 7 - datum.weekday }).toFormat('dd.MM.yyyy'),
        this.isBlocking,
        this.categoryKey,
        `(Woche ${woche})`,
      )
      appointment.additionalKey = woche.toString()
      result.push(appointment)

      woche++
      datum = appointment.end.plus({ days: 1 })
    }

    return result
  }
}
