const arrayAnalysis = require('./array-analysis');

it('should return an object with the length of the array', function () {
   expect(arrayAnalysis([1,8,3,4,2,6]).length).toBe(6)
});

it('should return an object with the length of the array', function () {
   expect(arrayAnalysis([1,3,2,6]).length).toBe(4)
});

it('should return an object with the max value in the array', function () {
   expect(arrayAnalysis([1,8,3,4,2,6]).max).toBe(8)
});

it('should return an object with the min value in the array', function () {
   expect(arrayAnalysis([1,8,3,4,2,6]).min).toBe(1)
});

it('should return an object with the min value in the array', function () {
    expect(arrayAnalysis([1,8,3,4,2,6]).average).toBe(4)
});
