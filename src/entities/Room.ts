import Message from "./Message"
import User from "./User"

type RoomProps = {
    id: number;
    members: User[]
    messages?: Message[]
}

export default class Room {
    props: RoomProps

    constructor(props: RoomProps) {
        this.props = props
    }
}