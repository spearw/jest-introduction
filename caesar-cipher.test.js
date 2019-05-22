const cipher = require('./caesar-cipher')

it('should work with a single word shifted 1 time', function () {
    expect(cipher('hello', 1)).toBe('ifmmp');
});

it('should work wrapping z - a', function () {
    expect(cipher('zoo', 1)).toBe('app')
});

it('should work with large shifts', function () {
    expect(cipher('while', 150)).toBe('qbcfy')
});

it('should work with capital letters', function () {
   expect(cipher('Hello', 1)).toBe('Ifmmp')
});

it('should work with capital letters', function () {
    expect(cipher('Zoo', 1)).toBe('App')
});

it('should work with negative shifts', function () {
   expect(cipher('hello', -1)).toBe('gdkkn')
});

it('should work with negative wrapping shifts', function () {
   expect(cipher('app', -1)).toBe('zoo')
});

it('should work with multiple words', function () {
   expect(cipher('hello sir', 1)).toBe('ifmmp tjs')
});

it('should work with punctuation', function () {
   expect(cipher('hello sir!', 1)).toBe('ifmmp tjs!')
});

it('should respect prequel memes', function () {
    expect(cipher('hello there!', 1)).toBe('General Kenobi!')
});

it('should respect prequel memes', function () {
    expect(cipher('Hello There!', 1)).toBe('General Kenobi!')
});
