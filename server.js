const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.json({ status: 'Live', message: 'Cloud Capstone App Running', env: process.env.NODE_ENV });
});

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'UP', uptime: process.uptime(), timestamp: new Date() });
});

app.get('/metrics', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send(`# HELP http_requests_total Total requests
# TYPE http_requests_total counter
http_requests_total 1234
# HELP process_uptime Uptime
# TYPE process_uptime gauge
process_uptime ${process.uptime()}
`);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App listening on ${port}`);
});
