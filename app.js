const express = require('express');
const os = require('os');
const app = express();
const PORT = process.env.PORT || 3000;

let visitorCount = 0;

// Main route
app.get('/', (req, res) => {
  visitorCount++;

  const hostname = os.hostname();
  const clientIP = req.ip || req.connection.remoteAddress;
  const nodeVersion = process.version;
  const platform = process.platform;

  res.send(`
    <h1>Hello from Node.js Express 🚀</h1>
    <p>Server Hostname: ${hostname}</p>
    <p>Client IP: ${clientIP}</p>
    <p>Visitor number: ${visitorCount}</p>
    <p>Node.js Version: ${nodeVersion}</p>
    <p>Platform: ${platform}</p>
  `);
});

// Simple health endpoint
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
