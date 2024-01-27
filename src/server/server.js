const express = require('express')
const mongoose = require('mongoose')
const swaggerAutogen = require('swagger-autogen')();
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

// create the application
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Import routes
const routes = require('./api/routes');

// Use routes
app.use(routes);

// define output file for auto generated swagger routes
const outputFile = './swagger_output.json';
// define endpoint files for swagger to autodetect
const endpointsFiles = ['./api/routes.js']; // array of route files
// autogenerate swagger docs
swaggerAutogen(outputFile, endpointsFiles);
// then use the generated docs and create the swagger ui endpoint
const swaggerDocument = require('./swagger_output.json'); // adjust the path accordingly
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


// main route
app.get('/', (req, res) => {
    res.send('Hello User')
})

// connect to the database
mongoose.set("strictQuery", false)
mongoose.connect(process.env.MONGO_DETAILS)
    .then(() => {
        console.log('connected to MongoDB')
        app.listen(3000, ()=> {
            console.log(`Node API app is running on port 3000`)
        });
    }).catch((error) => {
        console.log(error)
    })