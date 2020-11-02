import { expect } from 'chai'
import { describe, it } from 'mocha'

describe('foo', () => {
  it('add two number', () => {
    // Arrange
    const firstValue = 1
    const secondValue = 2
    // Act
    const result = firstValue + secondValue
    // Assert
    expect(result).to.be.eq(3)
  })
})
