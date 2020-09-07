const { Router } = require('express');
const authRoutes = require('./authRoutes');
const packageJson = require('../package.json');
const router = Router();

// Home
router.get('/', (req, res) => res.render('home', {
    version: packageJson.version
}));

// Dashboard
router.get('/dashboard', (req, res) => res.render(
    'dashboard',
    {
        version: packageJson.version
    }
));

// Authentication
router.use(authRoutes);

module.exports = router;