
import { Request, Response } from 'express'

import Login from './Login'

const LoginController = async (request: Request, response: Response) => {
    const { email } = request.body
    try {
        const {props: data} =await Login({email})
        response.status(200).json(data)
    }catch(error) {
        response.status(500).json({message: error.message})
    }
}

export default LoginController