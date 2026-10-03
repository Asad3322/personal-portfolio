// Serve the built site locally, with fallback support for the existing page URLs.
const http = require('http');
const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '../build');
const types = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.json': 'application/json', '.ico': 'image/x-icon' };
if (!fs.existsSync(path.join(root, 'index.html'))) throw new Error('Run npm run build before starting the preview.');
http.createServer((req, res) => {
  try {
    const url = new URL(req.url, 'http://localhost');
    const target = path.resolve(root, '.' + decodeURIComponent(url.pathname));
    if (!target.startsWith(root + path.sep) && target !== root) { res.writeHead(403); res.end(); return; }
    const file = fs.existsSync(target) && fs.statSync(target).isFile() ? target : path.join(root, 'index.html');
    res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
    fs.createReadStream(file).pipe(res);
  } catch { res.writeHead(400); res.end('Invalid request'); }
}).listen(3101, '127.0.0.1', () => console.log('Production preview: http://127.0.0.1:3101'));
