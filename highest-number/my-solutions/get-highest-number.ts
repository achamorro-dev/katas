export function getHighestNumber(numbers: number[]): number {
  if (numbers.length === 0) {
    throw new Error('List is empty')
  }

  return numbers.reduce(highestNumberReducer, numbers[0])
}

const highestNumberReducer = (previousValue: number, value: number) => {
  return previousValue > value ? previousValue : value
}
