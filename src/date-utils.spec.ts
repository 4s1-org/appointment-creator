import { DateUtils } from './date-utils'
import test from 'ava'

test('Muttertag, wenn der erste kein Sonntag ist', (t) => {
  // Arrange
  const year = 2020
  // Act
  const date = DateUtils.getMuttertag(year)
  // Assert
  t.is(DateUtils.format(date), '10.05.2020')
})

test('Muttertag, wenn der erste ein Sonntag ist', (t) => {
  // Arrange
  const year = 2016
  // Act
  const date = DateUtils.getMuttertag(year)
  // Assert
  t.is(DateUtils.format(date), '08.05.2016')
})

test('1. Advent,wenn Heiligabend kein Sonntag ist', (t) => {
  // Arrange
  const year = 2020
  // Act
  const date = DateUtils.getAdvent(year, 1)
  // Assert
  t.is(DateUtils.format(date), '29.11.2020')
})

test('1. Advent,wenn Heiligabend ein Sonntag ist', (t) => {
  // Arrange
  const year = 2017
  // Act
  const date = DateUtils.getAdvent(year, 1)
  // Assert
  t.is(DateUtils.format(date), '26.11.2017')
})

test('Totensonntag, wenn Heiligabend kein Sonntag ist', (t) => {
  // Arrange
  const year = 2020
  // Act
  const date = DateUtils.getTodensonntag(year)
  // Assert
  t.is(DateUtils.format(date), '22.11.2020')
})

test('Totensonntag, wenn Heiligabend ein Sonntag ist', (t) => {
  // Arrange
  const year = 2017
  // Act
  const date = DateUtils.getTodensonntag(year)
  // Assert
  t.is(DateUtils.format(date), '19.11.2017')
})

test('Ostersonntag, 2020', (t) => {
  // Arrange
  const year = 2020
  // Act
  const date = DateUtils.getEasterSunday(year)
  // Assert
  t.is(DateUtils.format(date), '12.04.2020')
})

test('Ostersonntag, 2021', (t) => {
  // Arrange
  const year = 2021
  // Act
  const date = DateUtils.getEasterSunday(year)
  // Assert
  t.is(DateUtils.format(date), '04.04.2021')
})

test('toEightDigits', (t) => {
  // Arrange
  const date = DateUtils.parse(`02.01.2020`)
  // Act
  const res = DateUtils.toEightDigits(date)
  // Assert
  t.is(res, '20200102')
})
