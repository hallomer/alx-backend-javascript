const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

const port = 7865;
app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});


app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = app;
