const express = require('express');
const userRoutes = require('./routes/userRoutes.js');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/db');

connectDB();

const port = process.env.PORT || 5000;
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World');
})
app.use('/api/users', userRoutes);

app.listen(port, () => console.log(`Server started on port ${port}`));