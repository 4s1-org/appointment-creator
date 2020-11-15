import { BaseAppointment } from './appointments/base-appointment'
import fs from 'fs'
import path from 'path'
import { schoolHolidayList } from './school-holiday-list'
import { Generator } from './generator'
import { getHolidays } from './holiday-list'

async function main(): Promise<void> {
  let liste: BaseAppointment[] = []
  for (const ferien of schoolHolidayList) {
    liste = liste.concat(ferien.split())
  }
  for (let year = 2020; year <= 2022; year++) {
    liste = liste.concat(getHolidays(year))
  }

  const generator = new Generator()
  const txt = generator.generate(liste)

  fs.writeFileSync(path.join(__dirname, '..', 'Termine.ics'), txt)
}

main()
  .then(() => console.log('Success'))
  .catch(console.error)
