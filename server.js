const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = Number(process.env.PORT || 3000);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.json': 'application/json; charset=utf-8', '.pdf': 'application/pdf' };

const server = http.createServer((req, res) => {
  const requestPath = decodeURIComponent((req.url || '/').split('?')[0]);
  const safePath = path.normalize(requestPath).replace(/^\.\.(\/|\\|$)/, '');
  const relativePath = safePath === '/' ? 'index.html' : safePath.replace(/^\//, '');
  const filePath = path.join(root, relativePath);
  if (!filePath.startsWith(root)) { res.writeHead(403); return res.end('Forbidden'); }
  const serveFile = (candidate) => fs.stat(candidate, (err, stat) => {
    if (!err && stat.isFile()) {
      res.writeHead(200, { 'Content-Type': types[path.extname(candidate)] || 'application/octet-stream', 'Cache-Control': 'no-cache' });
      fs.createReadStream(candidate).pipe(res);
      return;
    }
    if (candidate === filePath && relativePath !== 'index.html') {
      const publicPath = path.join(root, 'public', relativePath);
      return serveFile(publicPath);
    }
    if (requestPath !== '/') {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return res.end('Not found');
    }
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    fs.createReadStream(path.join(root, 'index.html')).pipe(res);
  });
  serveFile(filePath);
});

server.listen(port, '0.0.0.0', () => console.log(`Portfolio preview listening on http://0.0.0.0:${port}`));
