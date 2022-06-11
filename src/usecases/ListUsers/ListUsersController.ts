
import { Request, Response } from 'express'

import ListUsers from './ListUsers'

const ListUsersController = async (request: Request, response: Response) => {
    const user_id = request.headers["user-id"]
    try {
        const userId = user_id.toString()
        const data = await ListUsers({userId})
        response.status(200).json(data)
    }catch(error) {
        response.status(500).json({message: error.message})
    }
}

export default ListUsersController