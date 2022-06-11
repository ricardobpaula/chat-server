import { Router, Request, Response } from 'express'
import CreateUserController from '../usecases/CreateUser/CreateUserController'
import LoginController from '../usecases/Login/LoginController'
import ListUsersController from '../usecases/ListUsers/ListUsersController'
const routes = Router()

routes.get('/', (request: Request, response:Response) => {
    response.send('Hello World')
})

routes.post('/users', CreateUserController)
routes.get('/users', ListUsersController)

routes.post('/login', LoginController)

export default routes