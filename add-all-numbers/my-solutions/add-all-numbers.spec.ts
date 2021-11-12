import { addAllNumbers } from './add-all-numbers'

describe('add-all-numbers.spec', () => {
  it('should return the unique item when list has only one item', () => {
    const given = [100]

    let allNumbers = addAllNumbers(given)

    expect(allNumbers).toBe(100)
  })

  it('should return the result with all items added', () => {
    const given = [1, 10, 20, 30]

    let allNumbers = addAllNumbers(given)

    expect(allNumbers).toBe(61)
  })

  it('should throw an Error when list is empty', () => {
    const given: number[] = []

    expect(() => addAllNumbers(given)).toThrowError()
  })
})
