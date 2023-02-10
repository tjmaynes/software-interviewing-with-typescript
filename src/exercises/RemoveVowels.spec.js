const removeVowels = (s) => {
  let newSentence = ''
  for (let i = 0; i < s.length; i++) {
    const currentChar = s.charAt(i)
    if (!['a', 'e', 'i', 'o', 'u'].includes(currentChar))
      newSentence += currentChar
  }
  return newSentence
}

describe('RemoveVowels', () => {
  it('should return a string without vowels', () => {
    expect(removeVowels('helloworld')).toBe('hllwrld')
    expect(removeVowels('welcome to geeksforgeeks')).toBe('wlcm t gksfrgks')
    expect(removeVowels('what is your name ?')).toBe('wht s yr nm ?')
  })
})
