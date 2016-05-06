'use strict';
const http = require('http');
const express = require('express');
const ecstatic = require('ecstatic');
const morgan = require('morgan');

const app = express();

app.use(morgan('combined'));

app.use((req, res, next) => {
  const host = req.headers.host;
  getStatic(host)(req, res, next);
});

app.use(ecstatic({
  root: `${__dirname}/dapps`,
  showDir: true,
}));

const cache = {};
function getStatic (host) {
  if (!cache[host]) {
    cache[host] = ecstatic({
      root: `${__dirname}/dapps/${host}`,
      showDir: false,
      handleError: false
    });
  }

  return cache[host];
}

const port = 8888;
http.createServer(app).listen(port, () => {
  console.log(`Listening on ${port}`);
});


