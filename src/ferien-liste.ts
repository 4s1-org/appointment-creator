import { Ferien } from './ferien'
import { FerienTyp } from './ferien-typ'

export const ferienListe: Ferien[] = [
  // Schuljahr 2019/2020
  new Ferien('30.09.2019', '12.10.2019', FerienTyp.herbstferien),
  new Ferien('23.12.2019', '11.01.2020', FerienTyp.weihnachtsferien),
  new Ferien('06.04.2020', '18.04.2020', FerienTyp.osterferien),
  new Ferien('06.07.2020', '14.08.2020', FerienTyp.sommerferien),
  // Schuljahr 2020/2021
  new Ferien('05.10.2020', '17.10.2020', FerienTyp.herbstferien),
  new Ferien('21.12.2020', '09.01.2021', FerienTyp.weihnachtsferien),
  new Ferien('06.04.2021', '16.04.2021', FerienTyp.osterferien),
  new Ferien('19.07.2021', '27.08.2021', FerienTyp.sommerferien),
]
