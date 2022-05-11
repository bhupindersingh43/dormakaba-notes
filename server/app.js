const express = require('express');
require('dotenv').config();
const connectDB = require('./config/db');
const bodyParser = require('body-parser')
var cors = require('cors');
const notes = require('./routes/api/notes');
const app = express();
connectDB();
console.log(process.env.PORT);
app.use(cors({
    origin: true,
    credentials: true
}));
app.use(express.json({
    extended: false
}));
app.use(bodyParser.json())
app.use('/api/notes', notes);
app.get('/', (req, res) => res.send('Hello world!'));
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));