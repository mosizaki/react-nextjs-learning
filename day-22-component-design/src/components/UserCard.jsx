import Card from "./ui/Card";
import Badge from "./ui/Badge";
import Button from "./ui/Button";

export default function UserCard({ user, onDelete }) {
  return (
    <Card title={user.name} subtitle={user.email}>
      <Badge variant={user.active ? "success" : "danger"}>
        {user.active ? "Active" : "Inactive"}
      </Badge>

      <Button variant="danger" onClick={() => onDelete(user.id)}>
        Delete User
      </Button>
    </Card>
  );
}