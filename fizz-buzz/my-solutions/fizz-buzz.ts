export function fizzBuzz(startAt: number): Array<number | string> {
  const result: Array<number | string> = []

  for (let i = 1; i <= startAt; i++) {
    let item: number | string = i

    if (i % 3 === 0) {
      item = 'fizz'
    }

    if (i % 5 === 0) {
      item = 'buzz'
    }

    if (i % 3 === 0 && i % 5 === 0) {
      item = 'fizzbuzz'
    }

    result.push(item)
  }

  return result
}
