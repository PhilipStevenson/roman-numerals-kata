module.exports = emptyString => string => string
  .split(emptyString)
  .reverse()
  .join(emptyString)
