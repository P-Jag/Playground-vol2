const addNumber = (...numbers) => {
  return numbers.reduce((sum, value) => sum + value);
};

module.exports = addNumber;
