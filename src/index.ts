import { BaseAppointment } from './appointments/base-appointment'
import { schoolHolidayList } from './school-holiday-list'
import { Generator } from './generator'

async function main(): Promise<void> {
  let liste: BaseAppointment[] = []
  for (const ferien of schoolHolidayList) {
    liste = liste.concat(ferien.split())
  }

  const generator = new Generator()
  const txt = generator.generate(liste)
  console.log(txt)
}

main()
  .then(() => console.log('Success'))
  .catch(console.error)
