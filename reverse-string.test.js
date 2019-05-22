const reverse_string = require('./reverse-string');

it('should reverse the string', () => {
   expect(reverse_string('hello there')).toBe('ereht olleh')
});

it('should reverse the string', () => {
   expect(reverse_string('general kenobi')).toBe('ibonek lareneg')
});
