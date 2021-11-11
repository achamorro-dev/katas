import { getHighestNumber } from './get-highest-number'

describe('get-highest-number.spec', () => {
  it('should return the unique value when list has only one item', () => {
    const given = [1]

    const highestNumber = getHighestNumber(given)

    expect(highestNumber).toBe(1)
  })

  it('should return the highest value when list has more than one value', function () {
    const given = [1, 3, 4, 2]

    const highestNumber = getHighestNumber(given)

    expect(highestNumber).toBe(4)
  })

  it('should throw an when list is empty', function () {
    const given: number[] = []

    expect(() => getHighestNumber(given)).toThrowError()
  })
})
