import mongoose from 'mongoose'
import { logger } from '../../server/utils/Logger.js'

mongoose.connection.on('error', err => {
  logger.error('[DATABASE ERROR]:', err)
})
mongoose.connection.on('connection', () => {
  logger.log('DbConnection Successful')
})

export class SetDbConnection {
  static async connect(connectionstring = process.env.CONNECTION_STRING || '') {
    const status = 0
    try {
      const status = await mongoose.connect(connectionstring)
      logger.log('[SETUP CONNECTION TO DB SUCCESSFUL]')
      return status
    } catch (e) {
      logger.error(
        '[MONGOOSE CONNECTION ERROR]:',
        'Invalid connection string'
      )
      return status
    }
  }
}
