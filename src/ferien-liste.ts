import { SchoolHolidayAppointment } from './appointments/school-holiday-appointment'

enum SchoolHolidayType {
  herbstferien = 'Herbstferien',
  weihnachtsferien = 'Weihnachtsferien',
  osterferien = 'Osterferien',
  sommerferien = 'Sommerferien',
}

// https://kultusministerium.hessen.de/schulsystem/ferien/ferientermine
export const ferienListe: SchoolHolidayAppointment[] = [
  // Schuljahr 2019/2020
  new SchoolHolidayAppointment('heFe', '30.09.2019', '12.10.2019'),
  new SchoolHolidayAppointment('23.12.2019', '11.01.2020', SchoolHolidayType.weihnachtsferien),
  new SchoolHolidayAppointment('06.04.2020', '18.04.2020', SchoolHolidayType.osterferien),
  new SchoolHolidayAppointment('06.07.2020', '14.08.2020', SchoolHolidayType.sommerferien),
  // Schuljahr 2020/2021
  new SchoolHolidayAppointment('05.10.2020', '17.10.2020', SchoolHolidayType.herbstferien),
  new SchoolHolidayAppointment('21.12.2020', '09.01.2021', SchoolHolidayType.weihnachtsferien),
  new SchoolHolidayAppointment('06.04.2021', '16.04.2021', SchoolHolidayType.osterferien),
  new SchoolHolidayAppointment('19.07.2021', '27.08.2021', SchoolHolidayType.sommerferien),
  // Schuljahr 2021/2022
  new SchoolHolidayAppointment('11.10.2021', '23.10.2021', SchoolHolidayType.herbstferien),
  new SchoolHolidayAppointment('23.12.2021', '08.01.2022', SchoolHolidayType.weihnachtsferien),
  new SchoolHolidayAppointment('11.04.2022', '23.04.2022', SchoolHolidayType.osterferien),
  new SchoolHolidayAppointment('25.07.2022', '02.09.2022', SchoolHolidayType.sommerferien),
]
