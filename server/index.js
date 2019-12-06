const server = require("express")();
const bodyParser = require('body-parser')
const cors = require('cors')

server.use(bodyParser.json())
server.use(cors())
