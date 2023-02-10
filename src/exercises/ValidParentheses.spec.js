import { MyArrayStack } from '../data-structures/stack'

const validParentheses = (s) => {
  if (s.length === 1) return false

  const stack = new MyArrayStack()

  for (let i = 0; i <= s.length - 1; i++) {
    const currChar = s.charAt(i)
    if ([')', '}', ']'].includes(currChar)) {
      const prevChar = stack.pop()
      if (!prevChar || table[prevChar] !== currChar) return false
    } else {
      stack.push(currChar)
    }
  }

  return stack.size() === 0
}

const table = {
  '(': ')',
  '{': '}',
  '[': ']',
}

describe('ValidParentheses', () => {
  it('should return a string in reverse when given a valid string', () => {
    expect(validParentheses('[()]{}{[()()]()}')).toBeTruthy()
    expect(validParentheses('[(])')).toBeFalsy()
    expect(validParentheses('}[')).toBeFalsy()
    expect(validParentheses(')')).toBeFalsy()
  })
})
