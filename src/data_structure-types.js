const validateTitle = (value) => {
  if (typeof value !== 'string')
    return 'Incorrect input data';

  return value.length > 2 && value.length < 20 && /[A-Z]/.test(value.charAt(0))
    ? 'VALID'
    : 'INVALID';
}

const sum = (value1, value2) => {
  let argNumber = 0;
  let arg2 = 0;

  if (typeof value1 === 'number') {
    argNumber = value1;
    arg2 = parseInt(value2);
  } else {
    argNumber = value2;
    arg2 = parseInt(value1);
  }

  if (argNumber % 5 === 0 && argNumber % 3 === 0 && argNumber % 15 === 0)
    argNumber = -1 * argNumber;

  return argNumber + arg2;
};

module.exports = {
  validateTitle,
  sum,
};
