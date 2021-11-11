import { powerOfTwo } from './power-of-two'

describe('power-of-two.spec', () => {
  it('should return a list with unique item power of two when list has only one item', () => {
    const given = [2]

    const result = powerOfTwo(given)

    expect(result).toEqual([4])
  })

  it('should return a list with all items are power of two', function () {
    const given = [1, 2, 3, 4]

    const result = powerOfTwo(given)

    expect(result).toEqual([1, 4, 9, 16])
  })

  it('should return an Error when list is empty', function () {
    const given: number[] = []

    expect(() => powerOfTwo(given)).toThrowError()
  })
})
