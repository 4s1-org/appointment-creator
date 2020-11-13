import { AppointmentTypeKey } from './appointment-type'
import { MultiDayAppointment } from './multi-day-appointment'

export class SchoolHolidayAppointment extends MultiDayAppointment {
  constructor(type: AppointmentTypeKey, begin: string, end: string) {
    super(type, begin, end, false, 'Ferien')
  }

  public split(): MultiDayAppointment[] {
    const result: MultiDayAppointment[] = []

    let datum = this.begin
    let woche = 1

    while (datum < this.end) {
      result.push(
        new MultiDayAppointment(
          this.typeKey,
          datum.format('DD.MM.YYYY'),
          datum.add(6, 'day').format('DD.MM.YYYY'),
          this.isBlocking,
          this.category,
          `(Woche ${woche})`,
        ),
      )

      woche++
      datum = datum.add(7, 'day')
    }

    return result
  }
}
