import { useState } from "react";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const UsersPage = () => {
  // Sample user data
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Moderator", status: "Active" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Moderator", status: "Active" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Moderator", status: "Active" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Moderator", status: "Active" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Moderator", status: "Active" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Moderator", status: "Active" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Moderator", status: "Active" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Moderator", status: "Active" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Moderator", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
     { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Active" },


  ]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#004D40]">Manage Users</h2>
        <button className="bg-[#00796B] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#004D40]">
          <FaPlus /> Add User
        </button>
      </div>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-[#004D40] text-white">
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Role</th>
              <th className="p-3 text-left">Status</th>
              <th className="p-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr key={user.id} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-cyan-700`}>
                <td className="p-3">{user.name}</td>
                <td className="p-3">{user.email}</td>
                <td className="p-3">{user.role}</td>
                <td className={`p-3 font-semibold ${user.status === "Active" ? "text-green-600" : "text-red-600"}`}>
                  {user.status}
                </td>
                <td className="p-3 flex gap-2">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UsersPage;
