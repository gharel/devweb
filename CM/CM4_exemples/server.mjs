import http from "node:http";
import createDebug from "debug";

const debug = createDebug("app");
const { PORT } = process.env;

// https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/
const server = http.createServer();
const headers = { "Content-Type": "text/html; charset=UTF-8", "X-Powered-By": "Node.js" };

// sur l'événement "request", idem que si on passe à http.createServer();
server.on("request", (request, response) => {
  response.writeHead(200, headers);
  debug(`request from ${request.socket.remoteAddress} using ${request.headers["user-agent"]}`);
  response.once("close", () => debug(`response sent ${response.headersSent}`))
  response.end(`<html><body><h1>Hello World<h1></body></html>`);
});

// sur l'événement "listening", quand le serveur est prêt
server.on("listening", () => {
  debug(server.address());
  debug(server.eventNames());
  debug(server.listeners("connection"));
  debug(`Server listening at http://127.0.0.1:${PORT}/`);
});



// on ouvre puis on ferme le serveur au bout de 3000ms
server.listen(PORT);

