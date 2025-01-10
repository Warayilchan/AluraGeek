const { createServer, Model } = require('json-server')

const server = createServer()
const router = server.router('./database/db.json')

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running on http://localhost:3000')
})
