const express = require('express');
const app = express();

app.use(express.json());

app.post('/webhook', async (req, res) => {
  try {
    const response = await fetch('https://webhook.nodul.ru/19305/prod/59d76fff-9290-43dc-847d-89979b1ecd59', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(req.body)
    });
    const data = await response.text();
    res.send(data);
  } catch (error) {
    res.status(500).send('Error');
  }
});

app.get('/', (req, res) => res.send('Proxy работает'));

app.listen(3000, () => console.log('Proxy running'));
