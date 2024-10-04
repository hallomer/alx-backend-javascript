const express = require('express');
const app = express();

app.use(express.json());

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

app.get('/available_payments', (req, res) => {
  const paymentMethods = {
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  };
  res.json(paymentMethods);
});

app.post('/login', (req, res) => {
  const { userName } = req.body;
  if (!userName) {
    res.status(400).send('Bad Request');
  } else {
    res.send(`Welcome ${userName}`);
  }
});

app.use((req, res) => {
  res.status(404).send('Not Found');
});

module.exports = app;
