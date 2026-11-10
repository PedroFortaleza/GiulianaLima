import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = process.cwd();
const types = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".svg": "image/svg+xml", ".jpg": "image/jpeg", ".txt": "text/plain; charset=utf-8" };
const port = Number(process.env.PORT || 3001);

createServer(async (req, res) => {
  const path = normalize(decodeURIComponent((req.url || "/").split("?")[0])).replace(/^[/\\]+/, "");
  const file = join(root, path || "index.html");
  if (!file.startsWith(root)) { res.writeHead(403); res.end(); return; }
  try {
    const resolved = (await stat(file)).isDirectory() ? join(file, "index.html") : file;
    const body = await readFile(resolved);
    res.writeHead(200, { "Content-Type": types[extname(resolved)] || "application/octet-stream", "X-Robots-Tag": "noindex, nofollow" });
    res.end(body);
  } catch { res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" }); res.end("Página não encontrada"); }
}).listen(port, "127.0.0.1", () => console.log(`Site disponível em http://127.0.0.1:${port}`));
