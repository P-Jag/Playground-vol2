const multiplyNumbers = (...numbers) => {
  return numbers.reduce((sum, value) => sum * value);
};

// module.exports.multiply = multiplyNumbers;
// module.exports.description = "This is a multplying";

module.exports = {
  multiply: multiplyNumbers,
  description: "This is a multplying",
};
