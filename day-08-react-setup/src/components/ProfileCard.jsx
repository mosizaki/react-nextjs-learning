function ProfileCard ({name, role, goal}) {
    return (
        <div className="card">
            <h2>{name}</h2>
            <p>Role: {role}</p>
            <p>Goal: {goal}</p>
        </div>
    )
}

export default ProfileCard