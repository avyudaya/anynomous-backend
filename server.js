const express = require('express');
const userRoutes = require('./routes/userRoutes.js');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const swaggerDocs = require('./swagger.js');
const connectDB = require('./config/db');

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan('tiny'));
app.disable('x-powered-by');

const port = process.env.PORT || 5000;

app.use('/api/users', userRoutes);

connectDB().then(() => {
    try{
        app.listen(port, () => {
            console.log(`listening on https://localhost:${port}`);
        });
        swaggerDocs(app);
    } catch(error) {
        console.log('Cannot create the server.');
    }
})
.catch(err => {
    console.log('Invalid database connection.');
})
