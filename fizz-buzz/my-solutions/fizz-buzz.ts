export function fizzBuzz(startAt: number): Array<number | string> {
  if (startAt < 1) {
    throw new Error('Start index must be equal or greater than 1')
  }

  const result: Array<number | string> = []

  for (let i = 1; i <= startAt; i++) {
    const isDivisibleBy3 = i % 3 === 0
    const isDivisibleBy5 = i % 5 === 0
    const isDivisibleBy3And5 = isDivisibleBy3 && isDivisibleBy5
    let item: number | string = i

    if (isDivisibleBy3And5) {
      item = 'fizzbuzz'
    } else if (isDivisibleBy3) {
      item = 'fizz'
    } else if (isDivisibleBy5) {
      item = 'buzz'
    }

    result.push(item)
  }

  return result
}
