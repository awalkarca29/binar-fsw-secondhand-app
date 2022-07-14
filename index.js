const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const app = express();
const formidable = require('express-formidable-v2');
const userRoutes = require('./routes/user.routes.js');
const PORT = process.env.PORT || 3001;

const corsOptions = {
    origin: "*"
};

app.use(formidable());

app.use(userRoutes);

// CORS configuration
app.use(cors(corsOptions));

// Load env variable
dotenv.config();

//Routing
app.get('/', (req, res) => {
    res.json({
        message: "Index API"
    });
});

app.listen(PORT, () => {
    console.log(`App listen to port: ${PORT}`)
});

module.exports = app;