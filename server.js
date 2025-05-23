const { createServer } = require("http");
const next = require("next");
const { setupSocket } = require("./server/socket"); // Your socket logic

const port = 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = createServer((req, res) => {
    handle(req, res);
  });

  // Plug in the socket.io magic
  setupSocket(server);

  server.listen(port, "0.0.0.0", () => {
    console.log(`✅ Server ready on http://localhost:${port}`);
  });
});
