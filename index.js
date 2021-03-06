const express = require('express');
const routes = require('./routes');

const app = express();
app.use(express.json());

require('dotenv').config();

app.use('/api', routes);

const PORT = process.env.PORT || 3300;

app.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));