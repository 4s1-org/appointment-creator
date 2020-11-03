import dayjs from 'dayjs'
import { Datum } from './datum'
import { FerienTyp } from './ferien-typ'

export type FerienSplitType = {
  beginn: dayjs.Dayjs
  ende: dayjs.Dayjs
  text: string
}

export class Ferien {
  private _beginn: dayjs.Dayjs
  private _ende: dayjs.Dayjs

  constructor(beginn: string, ende: string, private readonly typ: FerienTyp) {
    this._beginn = Datum.parse(beginn)
    this._ende = Datum.parse(ende)
    // if (beginn >= ende) {
    //   throw new Error('Ende der Ferien ist nicht größer als der Beginn')
    // }
    // if (beginn.getDay() !== 1) {
    //   console.log(beginn)
    //   throw new Error(
    //     `Beginn der Ferien ist kein Montag, sondern ${
    //       wochentag[beginn.getDay()]
    //     } `,
    //   )
    // }
  }

  get text(): string {
    return this.typ
  }

  public split(): FerienSplitType[] {
    const result: FerienSplitType[] = []

    let datum = this._beginn
    let woche = 1

    while (datum < this._ende) {
      result.push({
        beginn: datum,
        ende: datum.add(6, 'day'),
        text: `${this.text} (Woche ${woche})`,
      })

      woche++
      datum = datum.add(7, 'day')
    }

    return result
  }
}
