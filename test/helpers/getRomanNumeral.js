const assert = require('chai').assert
const sinon = require('sinon')

const initGetRomanNumeral = require('../../src/helpers/getRomanNumeral')

const constants = {
  emptyString: '',
  hundreds: ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
  invalidMessage: 'Input must be between 1 and 3999',
  maximumRomanNumeral: 3999,
  minimumRomanNumeral: 1,
  ones: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
  tens: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
  thousands: ['', 'M', 'MM', 'MMM']
}

describe('getRomanNumeral.js', () => {
  it(`getRomanNumeral should return 'Input must be between 1 and 3999' when passed 0`, () => {
    const input = 0

    const getReversedString = sinon
      .stub()
      .returns('0')

    const getRomanNumeral = initGetRomanNumeral(
      constants,
      getReversedString
    )

    const result = getRomanNumeral(input)
    const expectedResult = 'Input must be between 1 and 3999'

    assert.deepEqual(
      result,
      expectedResult
    )
  })

  it(`getRomanNumeral should return 'I' when passed 1`, () => {
    const input = 1

    const getReversedString = sinon
      .stub()
      .returns('1')

    const getRomanNumeral = initGetRomanNumeral(
      constants,
      getReversedString
    )

    const result = getRomanNumeral(input)
    const expectedResult = 'I'

    assert.deepEqual(
      result,
      expectedResult
    )
  })

  it(`getRomanNumeral should return 'II' when passed 2`, () => {
    const input = 2

    const getReversedString = sinon
      .stub()
      .returns('2')

    const getRomanNumeral = initGetRomanNumeral(
      constants,
      getReversedString
    )

    const result = getRomanNumeral(input)
    const expectedResult = 'II'

    assert.deepEqual(
      result,
      expectedResult
    )
  })

  it(`getRomanNumeral should return 'III' when passed 3`, () => {
    const input = 3

    const getReversedString = sinon
      .stub()
      .returns('3')

    const getRomanNumeral = initGetRomanNumeral(
      constants,
      getReversedString
    )

    const result = getRomanNumeral(input)
    const expectedResult = 'III'

    assert.deepEqual(
      result,
      expectedResult
    )
  })

  it(`getRomanNumeral should return 'IV' when passed 4`, () => {
    const input = 4

    const getReversedString = sinon
      .stub()
      .returns('4')

    const getRomanNumeral = initGetRomanNumeral(
      constants,
      getReversedString
    )

    const result = getRomanNumeral(input)
    const expectedResult = 'IV'

    assert.deepEqual(
      result,
      expectedResult
    )
  })

  it(`getRomanNumeral should return 'V' when passed 5`, () => {
    const input = 5

    const getReversedString = sinon
      .stub()
      .returns('5')

    const getRomanNumeral = initGetRomanNumeral(
      constants,
      getReversedString
    )

    const result = getRomanNumeral(input)
    const expectedResult = 'V'

    assert.deepEqual(
      result,
      expectedResult
    )
  })

  it(`getRomanNumeral should return 'X' when passed 10`, () => {
    const input = 10

    const getReversedString = sinon
      .stub()
      .returns('01')

    const getRomanNumeral = initGetRomanNumeral(
      constants,
      getReversedString
    )

    const result = getRomanNumeral(input)
    const expectedResult = 'X'

    assert.deepEqual(
      result,
      expectedResult
    )
  })

  it(`getRomanNumeral should return 'CMXCIX' when passed 999`, () => {
    const input = 999

    const getReversedString = sinon
      .stub()
      .returns('999')

    const getRomanNumeral = initGetRomanNumeral(
      constants,
      getReversedString
    )

    const result = getRomanNumeral(input)
    const expectedResult = 'CMXCIX'

    assert.deepEqual(
      result,
      expectedResult
    )
  })

  it(`getRomanNumeral should return 'MMMCMXCIX' when passed 3999`, () => {
    const input = 3999

    const getReversedString = sinon
      .stub()
      .returns('9993')

    const getRomanNumeral = initGetRomanNumeral(
      constants,
      getReversedString
    )

    const result = getRomanNumeral(input)
    const expectedResult = 'MMMCMXCIX'

    assert.deepEqual(
      result,
      expectedResult
    )
  })

  it(`getRomanNumeral should return 'Input must be between 1 and 3999' when passed 4000`, () => {
    const input = 4000

    const getReversedString = sinon
      .stub()
      .returns('0004')

    const getRomanNumeral = initGetRomanNumeral(
      constants,
      getReversedString
    )

    const result = getRomanNumeral(input)
    const expectedResult = 'Input must be between 1 and 3999'

    assert.deepEqual(
      result,
      expectedResult
    )
  })
})
