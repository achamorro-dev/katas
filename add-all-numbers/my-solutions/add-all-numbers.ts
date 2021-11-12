export function addAllNumbers(numbers: number[]) {
  if (numbers.length === 0) {
    throw new Error('List is empty')
  }

  return numbers.reduce((prevValue, value) => prevValue + value, 0)
}
