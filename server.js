const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '../dist/owlbearosds')));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});