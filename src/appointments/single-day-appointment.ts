import { AppointmentTypeKey } from './appointment-type.js'
import { CategoryTypeKey } from './category-type.js'
import { MultiDayAppointment } from './multi-day-appointment.js'

export class SingleDayAppointment extends MultiDayAppointment {
  constructor(typeKey: AppointmentTypeKey, begin: string, isBlocking: boolean, categoryKey?: CategoryTypeKey) {
    super(typeKey, begin, begin, isBlocking, categoryKey)
  }
}
