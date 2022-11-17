import { Server } from 'http'
import {Server as ServerIO} from 'socket.io'

type SocketUser = {
    id: number;
    socketId: any;
}

type Message = {
    owner: number;
    text: string;
    id: number; 
}

const app = (server: Server) => {
    const io = new ServerIO(server, {
        cors: {
            origin: '*'
        }
    })

    let users: SocketUser[]
    users = []

    io.on('connection', (socket) => {
        const { from, to } = socket.handshake.query
        const index = users.findIndex(user => user.id === Number(from))

        const userTo = users.find(user => user.id === Number(to))

        if(index>=0){
            users[index].socketId = socket.id
        }else {
            users.push({
                id: Number(from),
                socketId: socket.id
            })
        }
        socket.on('message', (message: Message)=>{
            if(userTo){
                io.emit('new-message', message)
            }
        })

        socket.on('typing', (data)=> {
            if(userTo){
                io.emit('new-typing', data)
            }
        })

        socket.on('disconnect', () =>{
            users.splice(users.findIndex(user => user.socketId === socket.id))
        })
        
    })

    

 
}

export default app