const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

// Serve static files from the 'dist' directory
app.use(express.static(path.join(__dirname, '../dist/owlbearosds')));

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});