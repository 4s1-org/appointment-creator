import { ferienListe } from './ferien-liste'

async function main(): Promise<void> {
  for (const ferien of ferienListe) {
    console.log(ferien.text)
  }
}

main()
  .then(() => console.log('Success'))
  .catch(console.error)
