import UserRepository from '../../repositories/UserRepository'

type CreateUserRequest = {
    nickname: string;
    email: string;
}

const CreateUser = async ({nickname, email}: CreateUserRequest):Promise<void> => {
    if(!nickname || !email){
        throw new Error('Nickname or email is invalid!')
    }
    const userRepository = new UserRepository()

    const userExists = await userRepository.findByEmail(email)
    
    if(userExists){
        throw new Error('User already exists!')
    }

    await userRepository.create({nickname, email})
}

export default CreateUser