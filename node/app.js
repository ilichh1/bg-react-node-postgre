const express = require('express');
const bodyParser = require('body-parser');

// Environment variable in which the API will be listening for requests
const HTTP_PORT = process.env.NODE_API_PORT || 8080;

// Endpoints de nuestra API REST
const endpoints = require('./endpoints');
// Instancia de expressjs
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
 
// parse application/json
app.use(bodyParser.json());

// Redirect all requests made to the root path
app.all('/', (req, res) => {
  res.redirect('http://ilichh1.com');
});

// Custom function to send responses
app.use((req, res, next) => {
  res['apiResponse'] = response => res.json({
    data: response
  });
  return next();
});

// Endpoints para la Gonzalo API (express routing https://expressjs.com/en/guide/routing.html)
app.use('/api', endpoints);

app.listen(HTTP_PORT, () => console.log(`El backend de GonzaloApp esta escuchando en http://localhost:${HTTP_PORT}`))