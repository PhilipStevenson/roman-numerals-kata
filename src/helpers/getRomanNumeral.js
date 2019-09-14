module.exports = (
  constants,
  getReversedString
) => arabicNumber => {
  if (arabicNumber >= constants.minimumRomanNumeral && arabicNumber <= constants.maximumRomanNumeral) {
    const arabicNumberAsString = getReversedString(arabicNumber.toString())

    const romanNumerals = [
      constants.ones,
      constants.tens,
      constants.hundreds,
      constants.thousands
    ]

    const reducer = (
      accumulator,
      currentValue,
      index
    ) => romanNumerals[index][currentValue] + accumulator

    return [...arabicNumberAsString].reduce(reducer, constants.emptyString)
  } else {
    return constants.invalidMessage
  }
}
