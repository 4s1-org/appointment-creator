import { expect } from 'chai'
import { describe, it } from 'mocha'
import { Datum } from './datum'

describe('Datum', () => {
  describe('Muttertag,', () => {
    it('wenn der erste kein Sonntag ist', () => {
      // Arrange
      const year = 2020
      // Act
      const date = Datum.getMuttertag(year)
      // Assert
      expect(date.year).to.be.eq(year)
      expect(date.month).to.be.eq(5)
      expect(date.day).to.be.eq(10)
    })

    it('wenn der erste ein Sonntag ist', () => {
      // Arrange
      const year = 2016
      // Act
      const date = Datum.getMuttertag(year)
      // Assert
      expect(date.year).to.be.eq(year)
      expect(date.month).to.be.eq(5)
      expect(date.day).to.be.eq(8)
    })
  })

  describe('1. Advent,', () => {
    it('wenn Heiligabend kein Sonntag ist', () => {
      // Arrange
      const year = 2020
      // Act
      const date = Datum.getAdvent(year, 1)
      // Assert
      expect(date.year).to.be.eq(year)
      expect(date.month).to.be.eq(11)
      expect(date.day).to.be.eq(29)
    })

    it('wenn Heiligabend ein Sonntag ist', () => {
      // Arrange
      const year = 2017
      // Act
      const date = Datum.getAdvent(year, 1)
      // Assert
      expect(date.year).to.be.eq(year)
      expect(date.month).to.be.eq(11)
      expect(date.day).to.be.eq(26)
    })
  })

  describe('Todensonntag,', () => {
    it('wenn Heiligabend kein Sonntag ist', () => {
      // Arrange
      const year = 2020
      // Act
      const date = Datum.getTodensonntag(year)
      // Assert
      expect(date.year).to.be.eq(year)
      expect(date.month).to.be.eq(11)
      expect(date.day).to.be.eq(22)
    })

    it('wenn Heiligabend ein Sonntag ist', () => {
      // Arrange
      const year = 2017
      // Act
      const date = Datum.getTodensonntag(year)
      // Assert
      expect(date.year).to.be.eq(year)
      expect(date.month).to.be.eq(11)
      expect(date.day).to.be.eq(19)
    })
  })
})
