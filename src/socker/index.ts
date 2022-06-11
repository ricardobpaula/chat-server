import { Server } from 'http'
import {Server as ServerIO} from 'socket.io'

type SocketUser = {
    id: number;
    socketId: any;
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
        users.push({
            id: Number(from),
            socketId: socket.id
        })

        socket.on('message', (message)=>{
            io.emit('new-message', message)
        })

        socket.on('disconnect', () =>{
            users.splice(users.findIndex(user => user.socketId === socket.id))
        })
        
    })

    

 
}

export default app