import express from 'express'

import routes from './routes'

class AppController {
  public express: express.Application

  public constructor () {
    this.express = express()
    this.config()
    this.middlewares()
    this.routes()
  }

  private config (): void {
    this.express.set('port', process.env.PORT || 3333)
  }

  private middlewares (): void {
    this.express.use(express.json())
    this.express.use(express.urlencoded({ extended: true }))
  }

  private routes (): void {
    this.express.use(routes)
  }
}

export default new AppController().express
