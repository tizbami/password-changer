const http = require('http');
const generatePassword = require('generate-password');

http.createServer((req, res) => {
const password = generatePassword.generate({ length: 10, numbers: true, symbols: true });

console.log("Generated password: ", password);



  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(`<div><h1> Password: ${password}'<h1></div>`);
  res.end();
}).listen(3040, () => console.log("Server running on http://localhost:3040"));






