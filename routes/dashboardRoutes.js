const { Router } = require('express');
const packageJson = require('../package.json');
const router = Router();

router.post('/dashboard_basic_info', (req, res) => {
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

module.exports = router