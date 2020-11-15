import { expect } from 'chai'
import { describe, it } from 'mocha'
import { DateUtils } from '../date-utils'
import { SchoolHolidayAppointment } from './school-holiday-appointment'

describe('School Holiday', () => {
  it('split 2 Wochen', () => {
    // Arrange
    const ferien = new SchoolHolidayAppointment('heFe', '02.11.2020', '13.11.2020')
    // Act
    const split = ferien.split()
    // Assert
    expect(split.length).to.be.eq(2)
    expect(DateUtils.format(split[0].begin)).to.be.eq('02.11.2020', 'Beginn erste Woche')
    expect(DateUtils.format(split[0].end)).to.be.eq('08.11.2020', 'Ende erste Woche')
    expect(DateUtils.format(split[1].begin)).to.be.eq('09.11.2020', 'Beginn zweite Woche')
    expect(DateUtils.format(split[1].end)).to.be.eq('15.11.2020', 'Ende zweite Woche')
  })

  it.only('Weihnachtsferien 2021 fangen donnerstags an (Issue #10)', () => {
    // Arrange
    const weihnachtsferien = new SchoolHolidayAppointment('weFe', '23.12.2021', '08.01.2022')
    // Act
    const split = weihnachtsferien.split()
    // Assert
    expect(split.length).to.be.eq(3)
    expect(DateUtils.format(split[0].begin)).to.be.eq('23.12.2021', 'Beginn erste Woche')
    expect(DateUtils.format(split[0].end)).to.be.eq('26.12.2021', 'Ende erste Woche')
    expect(DateUtils.format(split[1].begin)).to.be.eq('27.12.2021', 'Beginn zweite Woche')
    expect(DateUtils.format(split[1].end)).to.be.eq('02.01.2022', 'Ende zweite Woche')
    expect(DateUtils.format(split[2].begin)).to.be.eq('03.01.2022', 'Beginn dritte Woche')
    expect(DateUtils.format(split[2].end)).to.be.eq('09.01.2022', 'Ende dritte Woche')
  })
})
