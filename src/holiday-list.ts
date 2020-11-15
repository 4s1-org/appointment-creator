import { SingleDayAppointment } from './appointments/single-day-appointment'
import { DateUtils } from './date-utils'

export function getHolidays(year: number): SingleDayAppointment[] {
  const easterSunday = DateUtils.getEasterSunday(year)

  return [
    new SingleDayAppointment('nj', `01.01.${year}`, true, 'fei'),
    new SingleDayAppointment('vt', `14.02.${year}`, false, 'info'),
    new SingleDayAppointment('tda', `01.05.${year}`, true, 'fei'),
    new SingleDayAppointment('tdde', `03.10.${year}`, true, 'fei'),
    new SingleDayAppointment('nik', `06.12.${year}`, false, 'info'),
    new SingleDayAppointment('ha', `24.12.${year}`, false, 'info'),
    new SingleDayAppointment('wei1', `25.12.${year}`, true, 'fei'),
    new SingleDayAppointment('wei2', `26.12.${year}`, true, 'fei'),
    new SingleDayAppointment('sil', `31.12.${year}`, true, 'fei'),
    new SingleDayAppointment('mu', DateUtils.format(DateUtils.getMuttertag(year)), true, 'info'),
    new SingleDayAppointment('tso', DateUtils.format(DateUtils.getTodensonntag(year)), true, 'info'),
    new SingleDayAppointment('adv1', DateUtils.format(DateUtils.getAdvent(year, 1)), true, 'info'),
    new SingleDayAppointment('adv2', DateUtils.format(DateUtils.getAdvent(year, 2)), true, 'info'),
    new SingleDayAppointment('adv3', DateUtils.format(DateUtils.getAdvent(year, 3)), true, 'info'),
    new SingleDayAppointment('adv4', DateUtils.format(DateUtils.getAdvent(year, 4)), true, 'info'),
    new SingleDayAppointment('rm', DateUtils.format(easterSunday.subtract(48, 'd')), false, 'info'),
    new SingleDayAppointment('fn', DateUtils.format(easterSunday.subtract(47, 'd')), false, 'info'),
    new SingleDayAppointment('am', DateUtils.format(easterSunday.subtract(46, 'd')), false, 'info'),
    new SingleDayAppointment('kf', DateUtils.format(easterSunday.subtract(2, 'd')), true, 'fei'),
    new SingleDayAppointment('os', DateUtils.format(easterSunday), false, 'fei'),
    new SingleDayAppointment('om', DateUtils.format(easterSunday.add(1, 'd')), true, 'fei'),
    new SingleDayAppointment('ch', DateUtils.format(easterSunday.add(39, 'd')), true, 'fei'),
    new SingleDayAppointment('ps', DateUtils.format(easterSunday.add(49, 'd')), true, 'fei'),
    new SingleDayAppointment('pm', DateUtils.format(easterSunday.add(50, 'd')), true, 'fei'),
    new SingleDayAppointment('fl', DateUtils.format(easterSunday.add(60, 'd')), true, 'fei'),
  ]
}
