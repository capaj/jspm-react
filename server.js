'use strict'
require('chokidar-socket-emitter')({port: 9081})
const httpServer = require('http-server')

let cache = 3600
if (process.env.NODE_ENV === 'production') {
  console.log('running in production mode(with caching)-make sure you have "Disable cache (while DevTools is open)" checked in the browser to see the changes while developing')
} else {
  cache = -1
}
const server = httpServer.createServer({
  root: 'public',
  cache: cache,
  robots: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  }
})
server.listen(9080)
