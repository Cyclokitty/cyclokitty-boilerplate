import Cat from './cat'

test('Cat.meow', () => {
  const testCat = new Cat('Test')
  expect(testCat.meow()).toBe('Mew! Mew! I am Test')
})
