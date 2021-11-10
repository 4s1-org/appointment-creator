import { AppointmentTypeKey } from './appointment-type'
import { CategoryTypeKey } from './category-type'
import { MultiDayAppointment } from './multi-day-appointment'

export class SingleDayAppointment extends MultiDayAppointment {
  constructor(typeKey: AppointmentTypeKey, begin: string, isBlocking: boolean, categoryKey?: CategoryTypeKey) {
    super(typeKey, begin, begin, isBlocking, categoryKey)
  }
}
