const { Router } = require('express');
const authRoutes = require('./authRoutes');
const packageJson = require('../package.json');
const router = Router();


// Home
router.get('/', (req, res) => {
    res
        .status(200)
        .send({
            company: "People Health Pharmacy",
            software: "Sales Reporting and Prediction System",
            version: packageJson.version,
            developer: "Dennis Le"
        })
});

// overview
//// Revenue
//// No. of Transactions
//// Stock on hand
//// Expired stock
//// Profit and loss
//// Latest transactions (10)
router.post('/dashboard', (req, res) => {
    res
        .status(200)
        .send({
            sales: 3000,
            transactions: 100,
            stock: 1000,
            stock_expired: 2
        })
});

router.post('/profit_and_loss', (req, res) => {
    res
        .status(200)
        .send({
            last_income: 40000,
            last_expenses: 10000,
            income: 20000,
            expenses: 12000
        })
});

router.post('/latest_sales', (req, res) => {
    res
        .status(200)
        .send(
            [
                {
                    order_number: "0001",
                    date: new Date().getTime(),
                    amount: 50
                },
                {
                    order_number: "0002",
                    date: new Date().getTime(),
                    amount: 90
                }
            ]
        );
});



// Authentication
router.use(authRoutes);

module.exports = router;