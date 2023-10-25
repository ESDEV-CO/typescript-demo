type GreetProps = {
    name: string,
    messageCount: number,
    isLogedIn: boolean
}

const Greet = (props: GreetProps) => {
    return (

        <h2>{props.isLogedIn ? `Welcome ${props.name}! You Have ${props.messageCount} unread messages` : "Welcome Guest"}</h2>
    )
}

export default Greet