import { useEffect, useState } from "react";
import UserCard from "./UserCard";

function UserDirectory() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  function addUser(e) {
    e.preventDefault();

    if (name === "" || email === "") {
      return;
    }

    const newUser = {
      id: users.length + 1,
      name: name,
      email: email,
      company: {
        name: "New User",
      },
    };

    setUsers([newUser, ...users]);
    setName("");
    setEmail("");
  }

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">
        User Directory
      </h1>

      <form onSubmit={addUser} className="space-y-3 mb-6">
        <input
          type="text"
          placeholder="Name"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-2 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add User
        </button>
      </form>

      <input
        type="text"
        placeholder="Search users..."
        className="w-full border p-2 rounded mb-6"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {filteredUsers.length === 0 ? (
        <p>No users found.</p>
      ) : (
        filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))
      )}
    </div>
  );
}

export default UserDirectory;