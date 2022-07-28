const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;
const path = require('path');

const api_routes = require('./routes/api_routes');

// Share Static/Browser Files
app.use(express.static(path.join(__dirname, 'browser')));
// Attach client side form data to request.body object
app.use(express.urlencoded({ extended: true }));
// Allow json data to be received from client
app.use(express.json());

// Load Routes
// localhost:3333/api
app.use('/api', api_routes); 

// Start Server
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
