import { Request, Response } from 'express'

import CreateUser from './CreateUser'

const CreateUserController = async (request: Request, response: Response) => {
    const { nickname, email } = request.body
    try {
        await CreateUser({nickname, email})
        response.status(201).json()
    }catch(error) {
        response.status(500).json({message: error.message})
    }
}

export default CreateUserController