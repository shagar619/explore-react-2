export default function User({user}) {

    const {name, email} = user;

    const userStyle = {
        border: '2px solid tomato',
        margin: '20px',
        padding: '20px',
        borderRadius: '15px'
    }

    return (
        <div style={userStyle}>
            <h4>Name : {name}</h4>
            <p>Email : {email}</p>
        </div>
    )
}