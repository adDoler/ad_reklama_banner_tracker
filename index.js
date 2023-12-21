const express = require('express');
const path = require('path');

const app = express();
const port = 1100;

app.use((req, res, next) => {
  const origin = req.headers.origin;
  if (origin) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', 'true'); 
  next();
});

const staticFilesPath = path.join(__dirname, 'static');
app.use(express.static(staticFilesPath));

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});