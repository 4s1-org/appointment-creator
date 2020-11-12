export enum AppointmentType {
  weFe = 'Weihnachtsferien',
  heFe = 'Herbstferien',
}

export type AppointmentTypeKey = keyof typeof AppointmentType
