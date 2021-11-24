export const forEachCallback = (items: any[], callbackMock: Function) => {
  items.forEach(item => callbackMock(item))
}
