import { Ferien } from './ferien'
import { FerienTyp } from './ferien-typ'

export const ferienListe: Ferien[] = [
  // Schuljahr 2019/2020
  new Ferien(
    new Date(2019, 9, 30),
    new Date(2019, 10, 12),
    FerienTyp.herbstferien,
  ),
  new Ferien(
    new Date(2019, 12, 23),
    new Date(2020, 1, 11),
    FerienTyp.weihnachtsferien,
  ),
  new Ferien(
    new Date(2020, 4, 6),
    new Date(2020, 4, 18),
    FerienTyp.osterferien,
  ),
  new Ferien(
    new Date(2020, 7, 6),
    new Date(2020, 8, 14),
    FerienTyp.sommerferien,
  ),
  // Schuljahr 2020/2021
  new Ferien(
    new Date(2020, 10, 5),
    new Date(2020, 10, 17),
    FerienTyp.herbstferien,
  ),
  new Ferien(
    new Date(2020, 12, 21),
    new Date(2021, 1, 9),
    FerienTyp.weihnachtsferien,
  ),
  new Ferien(
    new Date(2021, 4, 6),
    new Date(2021, 4, 16),
    FerienTyp.osterferien,
  ),
  new Ferien(
    new Date(2021, 7, 19),
    new Date(2021, 8, 27),
    FerienTyp.sommerferien,
  ),
  // Schuljahr 2021/2022
  new Ferien(
    new Date(2021, 10, 11),
    new Date(2021, 10, 23),
    FerienTyp.herbstferien,
  ),
  new Ferien(
    new Date(2021, 12, 23),
    new Date(2022, 1, 8),
    FerienTyp.weihnachtsferien,
  ),
  new Ferien(
    new Date(2022, 4, 11),
    new Date(2022, 4, 23),
    FerienTyp.osterferien,
  ),
  new Ferien(
    new Date(2022, 7, 25),
    new Date(2022, 9, 2),
    FerienTyp.sommerferien,
  ),
]
