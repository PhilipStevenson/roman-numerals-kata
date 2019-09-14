const constants = require('./constants')

const initGetReversedString = require('./helpers/getReversedString')
const initGetRomanNumeral = require('./helpers/getRomanNumeral')

const getReversedString = initGetReversedString(constants.emptyString)
const getRomanNumeral = initGetRomanNumeral(
  constants,
  getReversedString
)

module.exports = arabicNumber => getRomanNumeral(arabicNumber)
