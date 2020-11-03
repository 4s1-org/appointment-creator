import { expect } from 'chai'
import { describe, it } from 'mocha'
import { Ferien } from './ferien'
import { FerienTyp } from './ferien-typ'

describe('Ferien', () => {
  it('split 2 Wochen', () => {
    // Arrange
    const ferien = new Ferien(
      '02.11.2020',
      '13.11.2020',
      FerienTyp.sommerferien,
    )
    // Act
    const split = ferien.split()
    // Assert
    expect(split.length).to.be.eq(2)
    expect(split[0].beginn.date()).to.be.eq(2, 'Beginn erste Woche')
    expect(split[0].ende.date()).to.be.eq(8, 'Ende erste Woche')
    expect(split[1].beginn.date()).to.be.eq(9, 'Beginn zweite Woche')
    expect(split[1].ende.date()).to.be.eq(15, 'Ende zweite Woche')
  })
})
