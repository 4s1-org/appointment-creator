import { AppointmentTypeKey } from './appointment-type'
import { MultiDayAppointment } from './multi-day-appointment'

export class SingleDayAppointment extends MultiDayAppointment {
  constructor(typeKey: AppointmentTypeKey, begin: string, isBlocking: boolean, category?: string) {
    super(typeKey, begin, begin, isBlocking, category)
  }
}
