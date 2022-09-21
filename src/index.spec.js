const { sum, sub } = require('.')

describe('Test function', () => {
  test('Should sum run correctly', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test('Should sub run correctly', () => {
    expect(sub(2, 1)).toBe(1)
  })
})