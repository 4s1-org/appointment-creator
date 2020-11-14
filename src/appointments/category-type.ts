export enum CategoryType {
  fe = 'Ferien',
  info = 'Info',
  fei = 'Feiertag',
}

export type CategoryTypeKey = keyof typeof CategoryType
