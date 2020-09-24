const { Router } = require('express');
const { route } = require('./authRoutes');
const router = Router();


// Create Product
route.post('/add_product', (req, res) => {
    res.status(200).send(
        "Added"
    )
});

// List All Products
router.post('/all_products', (req, res) => {
    res
        .status(200)
        .send([
            {
                id: "2622999",
                name: "Swisse Ultiboost Zinc+ 60 Tablets ",
                price: 6.99,
                cost: 2.99,
                image: "/img/2622999.jpg",
                expiration_date: new Date().getTime(),
                description: "Swisse Ultiboost Zinc + is a premium quality, comprehensive formula to support immune function, healthy skin and assist reproductive health.",
                stock_level: 200
            },
            {
                id: "2489407",
                name: "Panamax 500mg 100 Tablets",
                price: 1.69,
                cost: 0.10,
                image: "/img/2489407.jpg",
                expiration_date: new Date(2021, 09, 20).getTime(),
                description: "For the temporary relief of pain and discomfort in arthritis, headache, muscular and neuralgic conditions. Reduces fever.",
                stock_level: 800
            }
        ])
});

// List Expired Products
router.post('/expired_products', (req, res) => {
    res
        .status(200)
        .send([
            {
                id: "2622999",
                name: "Swisse Ultiboost Zinc+ 60 Tablets ",
                price: 6.99,
                cost: 2.99,
                image: "/img/2622999.jpg",
                expiration_date: new Date().getTime(),
                description: "Swisse Ultiboost Zinc + is a premium quality, comprehensive formula to support immune function, healthy skin and assist reproductive health.",
                stock_level: 1000
            }
        ])
});

// Find Product With ID
router.post('/find_product', (req, res) => {
    res.status(200).send("ID")
});

// Update Product
router.post('/update_product', (req, res) => {
    res.status(200)
});


// Delete Product
router.post('/delete_product', (req, res) => {

})
