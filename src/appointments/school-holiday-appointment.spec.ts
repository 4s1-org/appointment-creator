import { expect } from 'chai'
import { describe, it } from 'mocha'
import { DateUtils } from '../date-utils.js'
import { SchoolHolidayAppointment } from './school-holiday-appointment.js'

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

  it('Weihnachtsferien 2021 fangen donnerstags an (Issue #10)', () => {
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

  it('Osterferien 2021 fangen dienstags an (Issue #9)', () => {
    // Arrange
    const osterferien = new SchoolHolidayAppointment('osFe', '06.04.2021', '16.04.2021')
    // Act
    const split = osterferien.split()
    // Assert
    expect(split.length).to.be.eq(2)
    expect(DateUtils.format(split[0].begin)).to.be.eq('06.04.2021', 'Beginn erste Woche')
    expect(DateUtils.format(split[0].end)).to.be.eq('11.04.2021', 'Ende erste Woche')
    expect(DateUtils.format(split[1].begin)).to.be.eq('12.04.2021', 'Beginn zweite Woche')
    expect(DateUtils.format(split[1].end)).to.be.eq('18.04.2021', 'Ende zweite Woche')
  })
})
