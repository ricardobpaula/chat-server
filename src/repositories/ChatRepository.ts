import mongodb from "src/config/mongose"

import Message from "src/entities/Message"
import Room from "src/entities/Room"

export default class MessageRepository {
    async createRoom(room: Room):Promise<void>{

    }
    
    async createMessage(message: Message, roomId: number):Promise<void>{
        
    }

    async findRoomById(id: number):Promise<Room>{

    }

    async findAllMessagesByRoom(roomId:number):Promise<Message[]>{

    }
}