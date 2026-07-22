import { useState } from "react";
import UserCard from "./UserCard";

const initialUsers = [
  {
    id: 1,
    name: "Sarah Connor",
    email: "sarah@example.com",
    active: true,
  },
  {
    id: 2,
    name: "John Wick",
    email: "john@example.com",
    active: false,
  },
];

export default function UserList() {
  const [users, setUsers] = useState(initialUsers);

  function handleDeleteUser(id) {
    setUsers((currentUsers) =>
      currentUsers.filter((user) => user.id !== id)
    );
  }

  return (
    <div className="user-list">
      {users.map((user) => (
        <UserCard
          key={user.id}
          user={user}
          onDelete={handleDeleteUser}
        />
      ))}
    </div>
  );
}