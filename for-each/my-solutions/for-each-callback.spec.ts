import { forEachCallback } from './for-each-callback'

describe('for-each-callback', () => {
  it('should execute the callback when the list provided has only one item', () => {
    const items = [1]
    const callbackMock = jest.fn()

    forEachCallback(items, callbackMock)

    expect(callbackMock).toBeCalled()
    expect(callbackMock).toBeCalledTimes(1)
    expect(callbackMock).toBeCalledWith(items[0])
  })

  it('should execute the callback to all elements of the list', function () {
    const items = [1, 2, 3]
    const callbackMock = jest.fn()

    forEachCallback(items, callbackMock)

    expect(callbackMock).toBeCalled()
    expect(callbackMock).toBeCalledTimes(3)
    expect(callbackMock).nthCalledWith(1, items[0])
    expect(callbackMock).nthCalledWith(2, items[1])
    expect(callbackMock).nthCalledWith(3, items[2])
  })

  it('should not execute the callback when list is empty', function () {
    const items: any[] = []
    const callbackMock = jest.fn()

    forEachCallback(items, callbackMock)

    expect(callbackMock).not.toBeCalled()
  })
})
