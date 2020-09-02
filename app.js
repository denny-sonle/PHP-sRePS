const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
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
app.use('/', (req, res) => res.render('home', {
    version: "1.0"
}));
// app.use('/users', require('./routes/users.js'));
// app.use('/slots', require('./routes/slots.js'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));