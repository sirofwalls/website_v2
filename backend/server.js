const express = require('express')
require('dotenv').config()
const colors = require('colors');
const path = require('path')
const cors = require('cors')

const PORT = process.env.PORT || 5000
const url = '/api/v2/'

const app = express();
app.use(cors())

//Middleware to read and parse json and form data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes Locations
app.use(url + 'email', require('./routes/emailRoutes'));

// Mode Check for 'development' or 'production'
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../', 'frontend', 'build', 'index.html')))
} else{
    app.get('/', (req, res) => res.send('Set  mode to production'))
}

// Starts the server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`.white));