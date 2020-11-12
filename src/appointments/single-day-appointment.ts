import { MultiDayAppointment } from './multi-day-appointment'

export class SingleDayAppointment extends MultiDayAppointment {
  constructor(begin: string, text: string, isBlocking: boolean, category?: string) {
    super(begin, begin, text, isBlocking, category)
  }
}
