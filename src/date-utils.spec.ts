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
      expect(date.year()).to.be.eq(year)
      expect(date.month() + 1).to.be.eq(5)
      expect(date.date()).to.be.eq(10)
    })

    it('wenn der erste ein Sonntag ist', () => {
      // Arrange
      const year = 2016
      // Act
      const date = DateUtils.getMuttertag(year)
      // Assert
      expect(date.year()).to.be.eq(year)
      expect(date.month() + 1).to.be.eq(5)
      expect(date.date()).to.be.eq(8)
    })
  })

  describe('1. Advent,', () => {
    it('wenn Heiligabend kein Sonntag ist', () => {
      // Arrange
      const year = 2020
      // Act
      const date = DateUtils.getAdvent(year, 1)
      // Assert
      expect(date.year()).to.be.eq(year)
      expect(date.month() + 1).to.be.eq(11)
      expect(date.date()).to.be.eq(29)
    })

    it('wenn Heiligabend ein Sonntag ist', () => {
      // Arrange
      const year = 2017
      // Act
      const date = DateUtils.getAdvent(year, 1)
      // Assert
      expect(date.year()).to.be.eq(year)
      expect(date.month() + 1).to.be.eq(11)
      expect(date.date()).to.be.eq(26)
    })
  })

  describe('Todensonntag,', () => {
    it('wenn Heiligabend kein Sonntag ist', () => {
      // Arrange
      const year = 2020
      // Act
      const date = DateUtils.getTodensonntag(year)
      // Assert
      expect(date.year()).to.be.eq(year)
      expect(date.month() + 1).to.be.eq(11)
      expect(date.date()).to.be.eq(22)
    })

    it('wenn Heiligabend ein Sonntag ist', () => {
      // Arrange
      const year = 2017
      // Act
      const date = DateUtils.getTodensonntag(year)
      // Assert
      expect(date.year()).to.be.eq(year)
      expect(date.month() + 1).to.be.eq(11)
      expect(date.date()).to.be.eq(19)
    })
  })

  describe('Ostersonntag,', () => {
    it('2020', () => {
      // Arrange
      const year = 2020
      // Act
      const date = DateUtils.getEasterSunday(year)
      // Assert
      expect(date.year()).to.be.eq(year)
      expect(date.month() + 1).to.be.eq(4)
      expect(date.date()).to.be.eq(12)
    })

    it('2021', () => {
      // Arrange
      const year = 2021
      // Act
      const date = DateUtils.getEasterSunday(year)
      // Assert
      expect(date.year()).to.be.eq(year)
      expect(date.month() + 1).to.be.eq(4)
      expect(date.date()).to.be.eq(4)
    })
  })
})
