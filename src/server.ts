import express, { Request, Response } from 'express'
import compression from 'compression'
import next from 'next'
import nextI18NextMiddleware from 'next-i18next/middleware'
import 'dotenv/config'

import nextI18next from './i18n'

const isDevelopment = process.env.NODE_ENV !== 'production'
const PORT = 3000 || process.env.PORT
const app = next({ dev: isDevelopment })
const handle = app.getRequestHandler();

(async () => {
    await app.prepare()
    const server = express()

    server.use(nextI18NextMiddleware(nextI18next))

    if (!isDevelopment) {
        server.use(compression())
    }

    server.get('*', (req: Request, res: Response) => handle(req, res))
    server.post('*', (req: Request, res: Response) => handle(req, res))

    await server.listen(PORT)
    console.log(`> Next.js started on ${PORT}`)
})()
