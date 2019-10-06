const readline = require('readline')

const constants = require('./constants')

const initGetReversedString = require('./helpers/getReversedString')
const initGetRomanNumeral = require('./helpers/getRomanNumeral')

const getReversedString = initGetReversedString(constants.emptyString)
const getRomanNumeral = initGetRomanNumeral(
  constants,
  getReversedString
)

const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
})

console.log(constants.applicationTitle)
console.log(constants.inputNumberMessage)

readlineInterface.on('line', arabicNumber => {
  console.log(`${getRomanNumeral(arabicNumber)}\n\n${constants.inputNumberMessage}`)
})
