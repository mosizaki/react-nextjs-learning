function UserCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Age: {props.age}</p>
            <p>Job: {props.job}</p>
        </div>
    )
}

export default UserCard