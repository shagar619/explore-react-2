import { useEffect, useState } from "react"
import User from "./user";

export default function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    }, [])


    const userStyle = {
        border: '2px solid tomato',
        margin: '20px',
        padding: '20px',
        borderRadius: '15px'
    }

    return (
        <div style={userStyle}>

            <h3>Users: {users.length}</h3>
            {
                users.map(user => <User user={user}></User>)
            }

        </div> 
    )
}






// 1. declare a state to hold the data
// 2. useEffect with call-back and dependency array
// 3. use fetch to load data
// 4. set loaded data to the state
// 5. display data on the component