const express = require('express');
const path = require('path');

const app = express();
const port = 1100;

const staticFilesPath = path.join(__dirname, 'static');
app.use(express.static(staticFilesPath));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});