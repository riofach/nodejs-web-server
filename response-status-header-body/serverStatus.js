// Sebagai gantinya, kita tuliskan nilai status code satu per satu sebelum perintah response.end(). Tentu, sesuaikan nilai status code dengan kasus-kasus yang ada.
const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");

  const { method, url } = request;

  if (url === "/") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end("<h1>Ini adalah homepage</h1>");
    } else {
      response.statusCode = 400;
      response.end(
        `<h1>Halaman tidak dapat diakses dengan ${method} request</h1>`
      );
    }
  } else if (url === "/about") {
    if (method === "GET") {
      response.statusCode = 200;
      response.end("<h1>Halo! Ini adalah halaman about</h1>");
    } else if (method === "POST") {
      let body = [];

      request.on("data", (chunk) => {
        body.push(chunk);
      });

      request.on("end", () => {
        body = Buffer.concat(body).toString();
        const { name } = JSON.parse(body);
        response.statusCode = 200;
        response.end(`<h1>Halo, ${name}! Ini adalah halaman about</h1>`);
      });
    } else {
      response.statusCode = 400;
      response.end(
        `<h1>Halaman tidak dapat diakses menggunakan ${method} request</h1>`
      );
    }
  } else {
    response.statusCode = 404;
    response.end("<h1>Halaman tidak ditemukan!</h1>");
  }
};

/* npm run start
curl -X GET http://localhost:5000/about -i
 
curl -X GET http://localhost:5000/test -i
 
curl -X DELETE http://localhost:5000/ -i */
