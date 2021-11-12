import { fizzBuzz } from './fizz-buzz'

describe('fizz-buzz.spec', () => {
  it('should return a list with only one item when start index is 1', () => {
    const given = 1

    const result = fizzBuzz(given)

    expect(result).toEqual([1])
  })

  it('should return a list with items 1,2,fizz when start index is 3', () => {
    const given = 3

    const result = fizzBuzz(given)

    expect(result).toEqual([1, 2, 'fizz'])
  })

  it('should return a list with items 1,2,fizz,4,buzz,fizz,7,8,fizz,buzz,11,fizz,13,14,fizzbuzz when start index is 15', () => {
    const given = 15

    const result = fizzBuzz(given)

    expect(result).toEqual([
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz'
    ])
  })
})
