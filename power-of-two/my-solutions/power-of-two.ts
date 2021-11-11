export function powerOfTwo(numbers: number[]) {
  if (numbers.length === 0) {
    throw new Error('List is empty')
  }

  return numbers.map(number => number ** 2)
}
