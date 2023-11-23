const { reverseArray, findMaxValue } = require('./arrayUtils');

test('Reverse array', () => {
  const numbers = [5, 3, 9, 2, 1];
  expect(reverseArray(numbers)).toEqual([1, 2, 9, 3, 5]);
});

test('Find max value in array', () => {
  const numbers = [5, 3, 9, 2, 1];
  expect(findMaxValue(numbers)).toBe(9);
});