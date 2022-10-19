import express from 'express'
import { createServer } from 'http'
import { SetDbConnection } from '../setups/db/DbConfig.js'
import { DbConnection } from './db/DbConfig'
import { socketProvider } from './SocketProvider'
import { Startup } from './Startup'
import { logger } from './utils/Logger'

// create server & socketServer
const app = express()
const port = process.env.PORT || 3000

const httpServer = createServer(app)
Startup.ConfigureGlobalMiddleware(app)
Startup.ConfigureRoutes(app)

// Establish Socket
socketProvider.initialize(httpServer)

// Connect to Atlas MongoDB
DbConnection.connect()
SetDbConnection.connect()

// Start Server
httpServer.listen(port, () => {
  logger.log(`[SERVING ON PORT: ${port}]`)
})
