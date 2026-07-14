function UserCard({ user }) {
  return (
    <div className="border rounded-lg shadow p-4 mb-4 bg-white">
      <h2 className="text-xl font-bold">{user.name}</h2>

      <p className="text-gray-600">{user.email}</p>

      <p className="text-blue-500">
        Company: {user.company.name}
      </p>
    </div>
  );
}

export default UserCard;