module.exports = constants => arabicNumber => {
  if (arabicNumber <= 0 || arabicNumber >= 4000) {
    return constants.invalidMessage
  }

  const arabicNumberString = arabicNumber.toString()

  if (arabicNumberString.length === 1) {
    return constants.ones[arabicNumber]
  }

  if (arabicNumberString.length === 2) {
    return constants.tens[parseInt(arabicNumberString.substring(0, 1))] +
      constants.ones[parseInt(arabicNumberString.substring(1, 2))]
  }

  if (arabicNumberString.length === 3) {
    return constants.hundreds[parseInt(arabicNumberString.substring(0, 1))] +
      constants.tens[parseInt(arabicNumberString.substring(1, 2))] +
      constants.ones[parseInt(arabicNumberString.substring(2, 3))]
  }

  if (arabicNumberString.length === 4) {
    return constants.thousands[parseInt(arabicNumberString.substring(0, 1))] +
      constants.hundreds[parseInt(arabicNumberString.substring(1, 2))] +
      constants.tens[parseInt(arabicNumberString.substring(2, 3))] +
      constants.ones[parseInt(arabicNumberString.substring(3, 4))]
  }
}
