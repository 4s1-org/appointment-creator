import { expect } from 'chai'
import { describe, it } from 'mocha'
import { DateUtils } from './date-utils'

describe('Datum', () => {
  describe('Muttertag,', () => {
    it('wenn der erste kein Sonntag ist', () => {
      // Arrange
      const year = 2020
      // Act
      const date = DateUtils.getMuttertag(year)
      // Assert
      expect(DateUtils.format(date)).to.be.eq('10.05.2020')
    })

    it('wenn der erste ein Sonntag ist', () => {
      // Arrange
      const year = 2016
      // Act
      const date = DateUtils.getMuttertag(year)
      // Assert
      expect(DateUtils.format(date)).to.be.eq('08.05.2016')
    })
  })

  describe('1. Advent,', () => {
    it('wenn Heiligabend kein Sonntag ist', () => {
      // Arrange
      const year = 2020
      // Act
      const date = DateUtils.getAdvent(year, 1)
      // Assert
      expect(DateUtils.format(date)).to.be.eq('29.11.2020')
    })

    it('wenn Heiligabend ein Sonntag ist', () => {
      // Arrange
      const year = 2017
      // Act
      const date = DateUtils.getAdvent(year, 1)
      // Assert
      expect(DateUtils.format(date)).to.be.eq('26.11.2017')
    })
  })

  describe('Todensonntag,', () => {
    it('wenn Heiligabend kein Sonntag ist', () => {
      // Arrange
      const year = 2020
      // Act
      const date = DateUtils.getTodensonntag(year)
      // Assert
      expect(DateUtils.format(date)).to.be.eq('22.11.2020')
    })

    it('wenn Heiligabend ein Sonntag ist', () => {
      // Arrange
      const year = 2017
      // Act
      const date = DateUtils.getTodensonntag(year)
      // Assert
      expect(DateUtils.format(date)).to.be.eq('19.11.2017')
    })
  })

  describe('Ostersonntag,', () => {
    it('2020', () => {
      // Arrange
      const year = 2020
      // Act
      const date = DateUtils.getEasterSunday(year)
      // Assert
      expect(DateUtils.format(date)).to.be.eq('12.04.2020')
    })

    it('2021', () => {
      // Arrange
      const year = 2021
      // Act
      const date = DateUtils.getEasterSunday(year)
      // Assert
      expect(DateUtils.format(date)).to.be.eq('04.04.2021')
    })
  })
})
