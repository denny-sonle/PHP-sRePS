const { Router } = require('express');
const authRoutes = require('./authRoutes');
const dashboardRoutes = require('./dashboardRoutes');
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

// Dashboard
router.use(dashboardRoutes);

// Authentication
router.use(authRoutes);

module.exports = router;