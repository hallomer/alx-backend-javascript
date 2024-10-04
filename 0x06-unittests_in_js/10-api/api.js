const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome to the payment system');
});

const port = 7865;
const server = app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

app.get('/cart/:id([0-9]+)', (req, res) => {
  const id = req.params.id;
  res.send(`Payment methods for cart ${id}`);
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.get('/available_payments', (req, res) => {
  res.json({
      payment_methods: {
          credit_cards: true,
          paypal: false
      }
  });
});

app.post('/login', express.json(), (req, res) => {
  const { userName } = req.body;
  res.send(`Welcome ${userName}`);
});

module.exports = { app, server };
