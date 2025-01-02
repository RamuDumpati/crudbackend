require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoute');

const app = express();

mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log('Database connected successfully'))
    .catch((err) => console.log('Database connection error:', err));

app.use(cors());
app.use(bodyParser.json());
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 7000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
