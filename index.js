const express = require('express');
const app = express();

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

app.use('/public', express.static('public'));

app.get("/", (req, res) => {
    console.log(`Принят запрос для события`);
    const filePath = 'public/xml/event.gif';
    res.sendFile(filePath, { root: __dirname });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Внутренняя ошибка сервера');
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});