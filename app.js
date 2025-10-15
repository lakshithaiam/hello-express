const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const GREETING = process.env.GREETING || 'Hello, World from Node.js Express!';

app.get('/', (req, res) => {
  res.send(GREETING);
});

// simple health endpoint
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
