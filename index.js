// API using Express for calculating accumulated depreciation
const express = require('express');
const calculate = require('./service/depreciationCalculation');

const app = express();
// Ensures we only look at requests of Content-Type: "application/json"
app.use(express.json());

const port = 3000;

app.post('/depreciation', (req, res) => {
	const dp = req.body.depreciationPeriod;
	const oa = req.body.openingAsset;
	const ip = req.body.initialPurchase;
	const gr = req.body.growthRate;
	const od = req.body.openingDepreciation;

	const netBalance = calculate.depreciation(dp, oa, ip, gr, od); 

	res.send({
		netBalance: netBalance
	});
}) 

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))