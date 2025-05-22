const { createServer } = require("http");
const next = require("next");
const { setupSocket } = require("./server/socket"); // 👈 path to socket logic

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res);
  });

  setupSocket(server); // 👀 WebSocket magic here

  server.listen(port, () => {
    console.log(`✅ Server ready on http://localhost:${port}`);
  });
});
