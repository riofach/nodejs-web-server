// Body Request
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
    // variabel body dan inisialisasikan nilainya dengan array kosong. Ini berfungsi untuk menampung buffer pada stream.
    let body = [];
    // event data terjadi pada request, kita isi array body dengan chunk (potongan data) yang dibawa callback function pada event tersebut.
    request.on("data", (chunk) => {
      body.push(chunk);
    });
    // ketika proses stream berakhir, maka event end akan terbangkitkan. Di sinilah kita mengubah variabel body yang sebelumnya menampung buffer
    // menjadi data sebenarnya dalam bentuk string melalui perintah Buffer.concat(body).toString()
    request.on("end", () => {
      body = Buffer.concat(body).toString();
      const { name } = JSON.parse(body);
      response.end(`<h1>Hai, ${name}!</h1>`);
    });
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
// Gunakan Git bash
// curl -X POST -H "Content-Type: application/json" http://localhost:5000 -d "{\"name\": \"Dimas\"}"
