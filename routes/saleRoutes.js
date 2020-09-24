const { Router } = require('express');
const router = Router();


// Add Sale
router.post('/add_sale', (req, res) => {
    res
        .status(200)
        .send("Done")
});


