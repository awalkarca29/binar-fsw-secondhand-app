const express = require('express');
const app = express();
const port = 3000;
const router = require('./routes');

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1', router);

app.listen(port, () => {
    console.log('running on port', port);
});
