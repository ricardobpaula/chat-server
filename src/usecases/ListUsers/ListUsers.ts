import UserRepository from "../../repositories/UserRepository"

type ListUsersRequest = {
    userId: string;
}

type UserResponse = {
    id: number;
    email: string;
    nickname: string;
}

const ListUsers = async ({userId}:ListUsersRequest):Promise<UserResponse[]> => {
    const userRepository = new UserRepository()

    const users = await userRepository.listUsers(Number(userId))

    if(!users){
        throw new Error('Users not found!')
    }

    return users.map(user => {
        return {
            id: user.props.id,
            nickname: user.props.nickname,
            email: user.props.email
        }
    })
}

export default ListUsers