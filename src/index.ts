import { CalenderItem } from './calendar-item'
import { Generator } from './generator'

async function main(): Promise<void> {
  // for (const ferien of ferienListe) {
  //   for (const woche of ferien.split()) {
  //     console.log(woche.beginn.format(), woche.ende.format(), woche.text)
  //   }
  // }
  const item1 = new CalenderItem({ year: 2020, month: 11, day: 11 }, { year: 2020, month: 11, day: 12 }, "Test1", true, "Feiertag")
  const generator = new Generator()
  const txt = generator.generate([item1])
  console.log(txt)
}

main()
  .then(() => console.log('Success'))
  .catch(console.error)
