import { DateUtils } from '../date-utils'
import { SchoolHolidayAppointment } from './school-holiday-appointment'

describe('School Holiday', () => {
  it('split 2 Wochen', () => {
    // Arrange
    const ferien = new SchoolHolidayAppointment('heFe', '02.11.2020', '13.11.2020')
    // Act
    const split = ferien.split()
    // Assert
    expect(split.length).toEqual(2)
    expect(DateUtils.format(split[0].begin)).toEqual('02.11.2020') //, 'Beginn erste Woche')
    expect(DateUtils.format(split[0].end)).toEqual('08.11.2020') //, 'Ende erste Woche')
    expect(DateUtils.format(split[1].begin)).toEqual('09.11.2020') //, 'Beginn zweite Woche')
    expect(DateUtils.format(split[1].end)).toEqual('15.11.2020') //, 'Ende zweite Woche')
  })

  it('Weihnachtsferien 2021 fangen donnerstags an (Issue #10)', () => {
    // Arrange
    const weihnachtsferien = new SchoolHolidayAppointment('weFe', '23.12.2021', '08.01.2022')
    // Act
    const split = weihnachtsferien.split()
    // Assert
    expect(split.length).toEqual(3)
    expect(DateUtils.format(split[0].begin)).toEqual('23.12.2021') //, 'Beginn erste Woche')
    expect(DateUtils.format(split[0].end)).toEqual('26.12.2021') //, 'Ende erste Woche')
    expect(DateUtils.format(split[1].begin)).toEqual('27.12.2021') //, 'Beginn zweite Woche')
    expect(DateUtils.format(split[1].end)).toEqual('02.01.2022') //, 'Ende zweite Woche')
    expect(DateUtils.format(split[2].begin)).toEqual('03.01.2022') //, 'Beginn dritte Woche')
    expect(DateUtils.format(split[2].end)).toEqual('09.01.2022') //, 'Ende dritte Woche')
  })

  it('Osterferien 2021 fangen dienstags an (Issue #9)', () => {
    // Arrange
    const osterferien = new SchoolHolidayAppointment('osFe', '06.04.2021', '16.04.2021')
    // Act
    const split = osterferien.split()
    // Assert
    expect(split.length).toEqual(2)
    expect(DateUtils.format(split[0].begin)).toEqual('06.04.2021') //, 'Beginn erste Woche')
    expect(DateUtils.format(split[0].end)).toEqual('11.04.2021') //, 'Ende erste Woche')
    expect(DateUtils.format(split[1].begin)).toEqual('12.04.2021') //, 'Beginn zweite Woche')
    expect(DateUtils.format(split[1].end)).toEqual('18.04.2021') //, 'Ende zweite Woche')
  })
})
