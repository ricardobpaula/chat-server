import User from "./User"

type MessageProps = {
    id: number;
    room: number;
    text: string;
    sender: User;    
    receiver: User;
}

export default class Message {
    props: MessageProps

    constructor(props: MessageProps) {
        this.props = props
    }
}