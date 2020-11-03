import { ferienListe } from './ferien-liste'

async function main(): Promise<void> {
  for (const ferien of ferienListe) {
    for (const woche of ferien.split()) {
      console.log(woche.beginn.format(), woche.ende.format(), woche.text)
    }
  }
}

main()
  .then(() => console.log('Success'))
  .catch(console.error)
