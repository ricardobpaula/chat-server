import User from '../entities/User'
import db from '../database/pgpromise'

type UserProps = {
    nickname: string;
    email: string;
}

export default class UserRepository {
    async create({nickname, email}: UserProps):Promise<void>{
        await db.none('insert into users(nickname, email) values($1, $2)',[nickname, email])
    }

    async findByEmail(emailUser: string):Promise<User> {
        const data = await db.oneOrNone(`select id, nickname, email from users where email=$1`,[emailUser])
        
        if(!data){
            return null
        }
        const { id, nickname, email } = data

        const user = new User({
            id,
            nickname,
            email
        })

        return user
    }
    
    async findById(userId: string):Promise<User> {
        const {id, nickname, email} = await db.oneOrNone(`select id, nickname, email from users where id=$1`,[userId])
        
        const user = new User({
            id,
            nickname,
            email
        })

        return user
    }

    async listUsers(userId: number):Promise<User[]> {
        const data = await db.manyOrNone(`select id, nickname, email from users where id <> $1`, [userId])

        const users = data.map(user => 
            new User({
                id: user.id,
                email: user.email,
                nickname: user.nickname
            })
        )

        return users
    }
}