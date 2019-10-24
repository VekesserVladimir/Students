const server = require("express")();

server.get('/', (request, responce) => {
	responce.send("asd");
})

server.listen(3000, err => {
	console.log("Server has been started");
});