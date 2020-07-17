// Unit test for depreciation calculation

const calculate = require('../service/depreciationCalculation');

test('Basic Test', () => {
	expect(calculate.depreciation(5, 10000, 2000, 0.05, 0))
		.toStrictEqual([9600, 8880, 7824, 6415, 4636, 4868, 5111, 5367, 5635, 5917, 6213, 6523, 6849, 7192, 7551, 7929, 8326, 8742, 9179, 9638]);
});

test('Asset Purchases Year 1 = 0', () => {
	expect(calculate.depreciation(5, 10000, 0, 0.05, 0))
		.toStrictEqual([8000, 6000, 4000, 2000, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

test('Opening Asset Balance = 0', () => {
	expect(calculate.depreciation(5, 0, 2000, 0.05, 0))
		.toStrictEqual([1600, 2880, 3824, 4415, 4636, 4868, 5111, 5367, 5635, 5917, 6213, 6523, 6849, 7192, 7551, 7929, 8326, 8742, 9179, 9638]);
});

test('Depreciation Period = 1', () => {
	expect(calculate.depreciation(1, 10000, 2000, 0.05, 0))
		.toStrictEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
});

test('Depreciation Period = 10', () => {
	expect(calculate.depreciation(10, 10000, 2000, 0.05, 0))
		.toStrictEqual([10800, 11490, 12065, 12518, 12844, 13036, 13088, 12992, 12742, 12329, 12945, 13592, 14272, 14986, 15735, 16522, 17348, 18215, 19126, 20082]);
});

test('Depreciation Period = 30', () => {
	expect(calculate.depreciation(30, 10000, 2000, 0.05, 0))
		.toStrictEqual([11600, 13230, 14892, 16586, 18315, 20081, 21885, 23729, 25616, 27547, 29524, 31550, 33628, 35759, 37947, 40194, 42504, 44879, 47323, 49840]);
});
