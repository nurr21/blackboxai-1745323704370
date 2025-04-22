const express = require('express');
const path = require('path');

const app = express();
const PORT = 8000;

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint
app.get('/data', (req, res) => {
  res.json({message: 'hello'});
});


// Root route to serve index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index-table.html'));
});

app.listen(PORT, () => {
  console.log("Server is running on http://localhost:" + PORT);
});
