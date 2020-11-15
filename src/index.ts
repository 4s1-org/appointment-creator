import { BaseAppointment } from './appointments/base-appointment'
import { schoolHolidayList } from './school-holiday-list'
import { Generator } from './generator'
import { adventList, easterBaseList, holidayList } from './holiday-list'
import fs from 'fs'
import path from 'path'

async function main(): Promise<void> {
  let liste: BaseAppointment[] = []
  for (const ferien of schoolHolidayList) {
    liste = liste.concat(ferien.split())
  }
  liste = liste.concat(holidayList)
  liste = liste.concat(easterBaseList)
  liste = liste.concat(adventList)

  const generator = new Generator()
  const txt = generator.generate(liste)

  fs.writeFileSync(path.join(__dirname, '..', 'Termine.ics'), txt)
}

main()
  .then(() => console.log('Success'))
  .catch(console.error)
