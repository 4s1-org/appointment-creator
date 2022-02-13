import { DateUtils } from '../date-utils'
import { SchoolHolidayAppointment } from './school-holiday-appointment'
import test from 'ava'

test('split 2 Wochen', (t) => {
  // Arrange
  const ferien = new SchoolHolidayAppointment('heFe', '02.11.2020', '13.11.2020')
  // Act
  const split = ferien.split()
  // Assert
  t.is(split.length, 2)
  t.is(DateUtils.format(split[0].begin), '02.11.2020') //, 'Beginn erste Woche')
  t.is(DateUtils.format(split[0].end), '08.11.2020') //, 'Ende erste Woche')
  t.is(DateUtils.format(split[1].begin), '09.11.2020') //, 'Beginn zweite Woche')
  t.is(DateUtils.format(split[1].end), '15.11.2020') //, 'Ende zweite Woche')
})

test('Weihnachtsferien 2021 fangen donnerstags an (Issue #10)', (t) => {
  // Arrange
  const weihnachtsferien = new SchoolHolidayAppointment('weFe', '23.12.2021', '08.01.2022')
  // Act
  const split = weihnachtsferien.split()
  // Assert
  t.is(split.length, 3)
  t.is(DateUtils.format(split[0].begin), '23.12.2021') //, 'Beginn erste Woche')
  t.is(DateUtils.format(split[0].end), '26.12.2021') //, 'Ende erste Woche')
  t.is(DateUtils.format(split[1].begin), '27.12.2021') //, 'Beginn zweite Woche')
  t.is(DateUtils.format(split[1].end), '02.01.2022') //, 'Ende zweite Woche')
  t.is(DateUtils.format(split[2].begin), '03.01.2022') //, 'Beginn dritte Woche')
  t.is(DateUtils.format(split[2].end), '09.01.2022') //, 'Ende dritte Woche')
})

test('Osterferien 2021 fangen dienstags an (Issue #9)', (t) => {
  // Arrange
  const osterferien = new SchoolHolidayAppointment('osFe', '06.04.2021', '16.04.2021')
  // Act
  const split = osterferien.split()
  // Assert
  t.is(split.length, 2)
  t.is(DateUtils.format(split[0].begin), '06.04.2021') //, 'Beginn erste Woche')
  t.is(DateUtils.format(split[0].end), '11.04.2021') //, 'Ende erste Woche')
  t.is(DateUtils.format(split[1].begin), '12.04.2021') //, 'Beginn zweite Woche')
  t.is(DateUtils.format(split[1].end), '18.04.2021') //, 'Ende zweite Woche')
})
