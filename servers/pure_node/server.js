'use strict'
import { createServer } from 'node:http';

const hostname = '127.0.0.1';
const port = 3000;

const server = createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json');

  try {
    const parsedBody = await getBody(req);
    // console.dir({ headers: req.headers, method: req.method, url: req.url, body: parsedBody });
    res.statusCode = 200;
    res.end(JSON.stringify({ data: parsedBody }));
  } catch (error) {
    res.statusCode = 400;
    res.end(JSON.stringify({error: error.message}));
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

async function getBody(req) {
  return new Promise((resolve, reject) => {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString();
    });

    req.on('end', () => {
      try {
        resolve(JSON.parse(body));
      } catch (error) {
        reject(error);
      }
    });

    req.on('error', (err) => {
      reject(err);
    });
  });
}
