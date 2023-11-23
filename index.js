const { reverseArray, findMaxValue } = require('./arrayUtils');

const numbers = [5, 3, 9, 2, 1];

const reversedArray = reverseArray(numbers);
console.log('Reversed Array:', reversedArray);

const maxValue = findMaxValue(numbers);
console.log('Max Value:', maxValue);