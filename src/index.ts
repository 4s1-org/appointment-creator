import { BaseAppointment } from './appointments/base-appointment'
import { schoolHolidayList } from './school-holiday-list'
import { Generator } from './generator'
import { easterBaseList, holidayList } from './holiday-list'

async function main(): Promise<void> {
  let liste: BaseAppointment[] = []
  for (const ferien of schoolHolidayList) {
    liste = liste.concat(ferien.split())
  }
  liste = liste.concat(holidayList)
  liste = liste.concat(easterBaseList)

  const generator = new Generator()
  const txt = generator.generate(liste)
  console.log(txt)
}

main()
  .then(() => console.log('Success'))
  .catch(console.error)
