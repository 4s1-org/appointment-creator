export enum AppointmentType {
  weFe = 'Weihnachtsferien',
  heFe = 'Herbstferien',
  soFe = 'Sommerferien',
  osFe = 'Osterferien',
}

export type AppointmentTypeKey = keyof typeof AppointmentType
