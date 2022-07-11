require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bargainRoutes = require('./routes/bargains');

app.use(express.json());
app.use('/api/bargains', bargainRoutes);

mongoose.connect(process.env.MONGO_URI)
 .then(() => {
     app.listen(process.env.PORT, () => {
         console.log('Server running at port', process.env.PORT)
     })
 })
 .catch(error => {
    console.log(error)
 })
