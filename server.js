// method http.createServer(), Sesuai namanya, method ini berfungsi untuk membuat HTTP server yang merupakan instance dari http.server
const http = require("http");

/**
 * Logika untuk menangani dan menanggapi request dituliskan pada fungsi ini
 *
 * @param request: objek yang berisikan informasi terkait permintaan
 * @param response: objek yang digunakan untuk menanggapi permintaan
 */
const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");

  response.statusCode = 200;
  //   const method = request.method atau
  const { method } = request;
  if (method === "GET") {
    response.end("<h1>Hello!</h1>");
  }

  if (method === "POST") {
    response.end("<h1>Hai!</h1>");
  }

  if (method === "PUT") {
    response.end("<h1>Bonjour!</h1>");
  }

  if (method === "DELETE") {
    response.end("<h1>Salam!</h1>");
  }
};
// Request listener memiliki 2 parameter, yakni request dan response

// http.server juga memiliki method listen(), Method inilah yang membuat http.server selalu standby untuk menangani permintaan
// Method inilah yang membuat http.server selalu standby untuk menangani permintaan
const server = http.createServer(requestListener);
const port = 5000;
const host = "localhost";

server.listen(port, host, () => {
  console.log(`Server berjalan pada http://${host}:${port}`);
});
// jalankan npm run start
/* curl -X GET http://localhost:5000
// output: <h1>Hello!</h1>
curl -X POST http://localhost:5000
// output: <h1>Hai!</h1>
curl -X PUT http://localhost:5000
// output: <h1>Bonjour!</h1>
curl -X DELETE http://localhost:5000
// output: <h1>Salam!</h1>s */

// jika tidak bisa gunakan ini tinggal ganti method : Invoke-WebRequest -Uri http://localhost:5000 -Method GET
