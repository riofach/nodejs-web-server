/* Response status merupakan salah satu bagian dari respons yang berisikan tentang informasi apakah sebuah request berhasil atau gagal dilakukan.
100-199: informational responses.
200 - 299: successful responses.
300-399: redirect.
400-499: client error.
500-599: server errors.

Di Node.js, penetapan nilai status code pada response dilakukan melalui properti response.statusCode

Status message memiliki nilai standar sesuai dengan response code. Namun, kita bisa mengubahnya bila diperlukan. 
Untuk mengubah status message, Anda bisa gunakan properti response.statusMessage.*/

// const requestListener = (request, response) => {
//   response.statusCode = 404;

//   // 404 defaultnya adalah 'not found'
//   response.statusMessage = "User is not found";
// };

/* Response Header : Sebenarnya, server bisa merespons dengan memberikan data dalam tipe (MIME types) lain, seperti XML, JSON, gambar, 
atau sekadar teks biasa. Apa pun MIME types yang digunakan, web server wajib memberi tahu pada client. Caranya, lampirkan property ‘Content-Type’ 
dengan nilai MIME types yang disisipkan pada header response. Untuk menyisipkan nilai pada header response, gunakanlah method setHeader().
Anda bisa menetapkan data pada header sebanyak yang diinginkan. Method setHeader() menerima dua parameter, yakni nama properti dan nilai untuk headernya.*/

const requestListener = (request, response) => {
  response.setHeader("Content-Type", "text/html");
  response.setHeader("X-Powered-By", "NodeJS");
};
