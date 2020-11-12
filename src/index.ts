import { ferienListe } from './ferien-liste'
import { Generator } from './generator'

async function main(): Promise<void> {
  const generator = new Generator()
  const txt = generator.generate(ferienListe)
  console.log(txt)
}

main()
  .then(() => console.log('Success'))
  .catch(console.error)
