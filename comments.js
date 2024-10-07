// Create web server
const express = require('express');
const app = express();

// Create a route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Create a route with a parameter
app.get('/comments/:id', (req, res) => {
    res.send('Comment id: ' + req.params.id);
});

// Start the server
app.listen(3000, () => {
    console.log('Server started');
});

// Run the server using "node comments.js"
// Access the server using "http://localhost:3000/comments/123"