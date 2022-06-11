import express from 'express'
import {Server} from 'http'
import routes from './routes/index.routes'
import dotenv from 'dotenv'
import cors from 'cors'
import socketIo from './socker/index'

dotenv.config()

const corsOptions = {
    origin: '*',
    methods: 'GET,PUT,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 200
  }

const app = express()

app.use(express.json())

app.use(cors(corsOptions))

app.use(routes)

const server = new Server(app)

socketIo(server)

server.listen(process.env.PORT, () => {
    console.log(`Server listen on port ${process.env.PORT}`)
})

