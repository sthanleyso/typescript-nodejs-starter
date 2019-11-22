import { Router, Request, Response } from 'express'

const routes = Router()

routes.route('/')
  .get((req: Request, res: Response) => res.send('Hello World'))

export default routes
