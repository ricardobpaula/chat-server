import UserRepository from "../../repositories/UserRepository"
import User from '../../entities/User'

type LoginRequest = {
    email: string;
}
const Login = async ({email}:LoginRequest):Promise<User> => {
    if(!email){
        throw new Error('E-mail is invalid!')
    }

    const userRepository = new UserRepository()

    const user = await userRepository.findByEmail(email)

    if(!user){
        throw new Error('User not found!')
    }

    return user
}

export default Login