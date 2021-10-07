import { BaseAppointment } from './appointments/base-appointment.js'
import fs from 'fs'
import path from 'path'
import { schoolHolidayList } from './school-holiday-list.js'
import { Generator } from './generator.js'
import { getHolidays } from './holiday-list.js'

async function main(): Promise<void> {
  let liste: BaseAppointment[] = []
  for (const ferien of schoolHolidayList) {
    liste = liste.concat(ferien.split())
  }
  for (let year = 2020; year <= 2024; year++) {
    liste = liste.concat(getHolidays(year))
  }

  const generator = new Generator()
  const txt = generator.generate(liste)

  fs.writeFileSync(path.join('Ferien+Feiertage.ics'), txt)
}

main()
  .then(() => console.log('Success'))
  .catch(console.error)
