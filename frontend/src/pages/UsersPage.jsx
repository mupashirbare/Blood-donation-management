import { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaChevronLeft, FaChevronRight, FaSearch } from "react-icons/fa";

const UsersPage = () => {
  const usersData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Moderator", status: "Active" },
    { id: 4, name: "Sarah Wilson", email: "sarah@example.com", role: "User", status: "Active" },
    { id: 5, name: "David Clark", email: "david@example.com", role: "User", status: "Inactive" },
    { id: 6, name: "Emily Johnson", email: "emily@example.com", role: "Admin", status: "Active" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const usersPerPage = 5;

  const filteredUsers = usersData.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.status.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);
  const startIndex = (currentPage - 1) * usersPerPage;
  const displayedUsers = filteredUsers.slice(startIndex, startIndex + usersPerPage);

  return (
    <div className="p-4">
      {/* Header with Add User Button and Search Input */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 gap-4">
        <h2 className="text-2xl font-bold text-[#004D40]">Manage Users</h2>
        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 bg-white">
          <FaSearch className="text-gray-500 mr-2" />
          <input 
            type="text" 
            placeholder="Search users..." 
            className="outline-none w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button className="bg-[#00796B] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#004D40]">
          <FaPlus /> Add User
        </button>
      </div>

      {/* Desktop Table View */}
      <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4 hidden md:block">
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
            {displayedUsers.map((user, index) => (
              <tr key={user.id} className={`${index % 2 === 0 ? "bg-gray-100" : "bg-white"} hover:bg-gray-200`}>
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

      {/* Mobile Card View */}
      <div className="md:hidden space-y-4">
        {displayedUsers.map((user) => (
          <div key={user.id} className="bg-white shadow-md p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-[#004D40]">{user.name}</h3>
            <p className="text-gray-600"><strong>Email:</strong> {user.email}</p>
            <p className="text-gray-600"><strong>Role:</strong> {user.role}</p>
            <p className={`font-semibold ${user.status === "Active" ? "text-green-600" : "text-red-600"}`}>
              <strong>Status:</strong> {user.status}
            </p>
            <div className="flex gap-4 mt-3">
              <button className="text-blue-500 hover:text-blue-700">
                <FaEdit />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <button
          className={`px-4 py-2 text-white rounded-lg flex items-center gap-2 ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-[#00796B] hover:bg-[#004D40]"
          }`}
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <FaChevronLeft /> Previous
        </button>

        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className={`px-4 py-2 text-white rounded-lg flex items-center gap-2 ${
            currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-[#00796B] hover:bg-[#004D40]"
          }`}
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default UsersPage;
