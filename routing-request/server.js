const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.statusCode = 200;

  const { method, url } = request;
  if (url === "/") {
    // TODO 2: logika respons bila url bernilai '/'
    if (method === "GET") {
      // response bila client menggunakan GET
      response.end("<h1>Ini adalah homepage</h1>");
    } else {
      // response bila client tidak menggunakan GET
      response.end(
        `<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`
      );
    }
  } else if (url === "/about") {
    // TODO 3: logika respons bila url bernilai '/about'
    if (method === "GET") {
      // response bila client menggunakan GET
      response.end("<h1>Halo! Ini adalah halaman about</h1>");
    } else if (method === "POST") {
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
      });
    }
  } else {
    // TODO 1: logika respons bila url bukan '/' atau '/about'
    response.end("<h1>Halaman tidak ditemukan!</h1>");
  }
};

/* Kumpulan Output
output (/)
curl -X GET http://localhost:5000
// output: <h1>Ini adalah homepage</h1>
curl -X POST http://localhost:5000
// output: <h1>Halaman tidak dapat diakses dengan POST request</h1>
curl -X DELETE http://localhost:5000
// output: <h1>Halaman tidak dapat diakses dengan DELETE request</h1> 

output (/about)
curl -X GET http://localhost:5000/about
// output: <h1>Halo! Ini adalah halaman about</h1>
curl -X POST -H "Content-Type: application/json" http://localhost:5000/about -d "{\"name\": \"Dicoding\"}"
// output: <h1>Halo, Dicoding! Ini adalah halaman about</h1>
curl -X PUT http://localhost:5000/about
// output: <h1>Halaman tidak dapat diakses menggunakan PUT request</h1>
curl -X DELETE http://localhost:5000/about
// output: <h1>Halaman tidak dapat diakses menggunakan DELETE request</h1>*/
