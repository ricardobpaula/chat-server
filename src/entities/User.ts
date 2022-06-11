type UserProps = {
    id: number;
    nickname: string;
    email: string;
}

export default class User {
    props: UserProps

    constructor(props: UserProps) {
        this.props = props
    }
}