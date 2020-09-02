const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
const packageJson = require('./package.json');
// const { requireAuth, checkUser } = require('./middleware/authMiddleware');
require('dotenv').config();

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// Connect to MongoDB
mongoose
    .connect(
        process.env.MONGO_URI,
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.log(err));

// Routes
// app.get('*', checkUser);
app.get('/', (req, res) => res.render('home', {
    version: packageJson.version
}));
app.use(authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));