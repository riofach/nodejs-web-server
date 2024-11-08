// http.clientReques
const requestListener = (request, response) => {
  const { url } = request;
};

/* Properti url akan mengembalikan nilai path tanpa host dan port yang digunakan server. Contohnya, 
bila client meminta pada alamat http://localhost:5000/about atau http://localhost:5000/about/, url akan bernilai ‘/about’; */
