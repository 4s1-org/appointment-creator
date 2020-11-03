import { FerienTyp } from './ferien-typ'

export class Ferien {
  constructor(
    public readonly beginn: Date,
    public readonly ende: Date,
    public readonly typ: FerienTyp,
  ) {}

  get text(): string {
    return this.typ
  }
}
