const express = require('express');
const app = express();
const dotenv = require('dotenv');
const cros = require('cors');
const dashboard = require('./router/dashboard');
dotenv.config();
app.use(cros());
app.use(express.json());
app.use('/api', dashboard);

app.listen(process.env.SERVER_PORT, () => console.log('SERVER RUNNING... PORT ['+process.env.SERVER_PORT+']'));