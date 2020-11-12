import { DatumType } from './datum'

export class CalenderItem {
  constructor(
    public readonly begin: DatumType,
    public readonly end: DatumType,
    public readonly text: string,
    public readonly isBlocking: boolean,
    public readonly category?: string,
  ) {}
}
