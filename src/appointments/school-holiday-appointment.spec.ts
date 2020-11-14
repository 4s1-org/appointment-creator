import { expect } from 'chai'
import { describe, it } from 'mocha'
import { DateUtils } from '../date-utils'
import { SchoolHolidayAppointment } from './school-holiday-appointment'

describe('School Holiday', () => {
  it('split 2 Wochen', () => {
    // Arrange
    const ferien = new SchoolHolidayAppointment(
      'heFe',
      '02.11.2020',
      '13.11.2020',
    )
    // Act
    const split = ferien.split()
    // Assert
    expect(split.length).to.be.eq(2)
    expect(DateUtils.format(split[0].begin)).to.be.eq(
      '02.11.2020',
      'Beginn erste Woche',
    )
    expect(DateUtils.format(split[0].end)).to.be.eq(
      '08.11.2020',
      'Ende erste Woche',
    )
    expect(DateUtils.format(split[1].begin)).to.be.eq(
      '09.11.2020',
      'Beginn zweite Woche',
    )
    expect(DateUtils.format(split[1].end)).to.be.eq(
      '15.11.2020',
      'Ende zweite Woche',
    )
  })
})
