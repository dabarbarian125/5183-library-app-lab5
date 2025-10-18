// api/server.js
const express = require('express');
const app = express();

// fast, dependency-free health for probes
app.get('/api/health', (_req, res) => res.status(200).json({ status: 'ok' }));

// start server (default 3000 locally; Lab 5 will use :80 via systemd)
const server = app.listen(process.env.PORT || 3000, () =>
  console.log(`api up on :${server.address().port}`)
);

// graceful shutdown (SIGTERM)
process.on('SIGTERM', () => {
  server.close(() => process.exit(0));
});
