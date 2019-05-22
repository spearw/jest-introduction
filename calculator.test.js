const calc = require('./calculator');

it('should add positive numbers', function () {
    expect(calc.add(1, 2)).toBe(3);
});

it('should add negative numbers', function () {
    expect(calc.add(-1, -2)).toBe(-3);
});

it('should subtract numbers', function () {
   expect(calc.subtract(3, 2)).toBe(1);
});

it('should multiply numbers', function () {
   expect(calc.multiply(3, 4)).toBe(12);
});

it('should divide numbers', function () {
    expect(calc.divide(6, 2)).toBe(3);
});
