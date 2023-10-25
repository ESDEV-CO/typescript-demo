type GreetProps = {
    name: string,
    messageCount?: number,
    isLogedIn: boolean
}

const Greet = (props: GreetProps) => {
    const { messageCount = 0 } = props
    return (

        <h2>{props.isLogedIn ? `Welcome ${props.name}! You Have ${messageCount} unread messages` : "Welcome Guest"}</h2>
    )
}

export default Greet