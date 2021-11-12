import { addAllNumbers } from './add-all-numbers'

describe('add-all-numbers.spec', () => {
  it('should return the unique item when list has only one item', () => {
    const given = [100]

    let allNumbers = addAllNumbers(given)

    expect(allNumbers).toBe(100)
  })
})
