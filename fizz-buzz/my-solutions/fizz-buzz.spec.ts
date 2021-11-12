import { fizzBuzz } from './fizz-buzz'

describe('fizz-buzz.spec', () => {
  it('should return a list with only one item when start index is 1', () => {
    const given = 1

    const result = fizzBuzz(given)

    expect(result).toEqual([1])
  })
})
