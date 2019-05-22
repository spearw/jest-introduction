const capitalize_string = require('./capitalize-string');

it('should capitalize the string',  () => {
    expect(capitalize_string('hello there')).toBe('Hello there')
});

it('should capitalize the string',  () => {
    expect(capitalize_string('general kenobi')).toBe('General kenobi')
});
