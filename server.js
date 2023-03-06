const json_server = require('json-server')
const server = json_server.create()
const router = json_server.router('museos.json')
const middlewares = json_server.defaults()
 
server.use(middlewares)
server.use('', router)
server.listen(3000, () => {
  console.log("Run server")
})
