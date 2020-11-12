import { MultiDayAppointment } from './multi-day-appointment'

export class SchoolHolidayAppointment extends MultiDayAppointment {
  constructor(begin: string, end: string, text: string) {
    super(begin, end, text, false, 'Ferien')
  }
}
