// Calculate the depreciation given the parameters 
// Returns an array of the net asset balance where each value correponds to the net asset balance of (index + 1) year 

function depreciation(depreciationPeriod, openingAsset, initialPurchase, growthRate, openingDepreciation) {
	// List of net asset balance over 20 years 
	let netAssetBalance = [];

	// Sum of last "depreciationPeriod" purchases to calculate depreciation 
	let purchases = [];

	// Set initial values of closing balance and purchase
	let closingBalance = openingAsset;
	let purchase = initialPurchase;
	
	for (let i = 0; i < 20; i++) {
		if (i === 0) {
			closingBalance += purchase;
		} else {
			purchase *= (1 + growthRate);
			closingBalance += purchase;
		}

		if (purchases.length >= depreciationPeriod) {
			// Remove the first element from purchases
			purchases.shift();
		}

		purchases.push(purchase);

		let depreciation = sumOfArray(purchases);

		if ((i + 1) <= depreciationPeriod) {
			depreciation += openingAsset;
		}

		depreciation = depreciation / depreciationPeriod;

		openingDepreciation += depreciation;

		netAssetBalance.push(Math.round(closingBalance - openingDepreciation));
	}

	return netAssetBalance;
}

function sumOfArray(array) {

	let sum = 0;

	for (let i = 0; i < array.length; i++) {
		sum += array[i];
	}

	return sum; 
}

exports.depreciation = depreciation;
