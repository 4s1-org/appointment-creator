import { expect } from 'chai'
import { describe, it } from 'mocha'
import { SchoolHolidayAppointment } from './school-holiday-appointment'

describe('School Holiday', () => {
  it('split 2 Wochen', () => {
    // Arrange
    const ferien = new SchoolHolidayAppointment('heFe', '02.11.2020', '13.11.2020')
    // Act
    const split = ferien.split()
    // Assert
    expect(split.length).to.be.eq(2)
    expect(split[0].begin.date()).to.be.eq(2, 'Beginn erste Woche')
    expect(split[0].end.date()).to.be.eq(8, 'Ende erste Woche')
    expect(split[1].begin.date()).to.be.eq(9, 'Beginn zweite Woche')
    expect(split[1].end.date()).to.be.eq(15, 'Ende zweite Woche')
  })
})
