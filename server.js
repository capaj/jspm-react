'use strict'
require('chokidar-socket-emitter')({port: 9081})
const httpServer = require('http-server')
const server = httpServer.createServer({
  root: 'public',
  robots: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  }
})
server.listen(9080)
