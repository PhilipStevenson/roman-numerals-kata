const constants = require('./constants')

const initGetRomanNumeral = require('./helpers/getRomanNumeral')

const getRomanNumeral = initGetRomanNumeral(constants)

module.exports = arabicNumber => getRomanNumeral(arabicNumber)
