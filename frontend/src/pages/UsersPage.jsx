import { useState } from "react";
import { FaEdit, FaTrash, FaPlus, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const UsersPage = () => {
  const usersData = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User", status: "Inactive" },
    { id: 3, name: "Michael Brown", email: "michael@example.com", role: "Moderator", status: "Active" },
    { id: 4, name: "Sarah Wilson", email: "sarah@example.com", role: "User", status: "Active" },
    { id: 5, name: "David Clark", email: "david@example.com", role: "User", status: "Inactive" },
    { id: 6, name: "Emily Johnson", email: "emily@example.com", role: "Admin", status: "Active" },
    { id: 7, name: "Chris Lee", email: "chris@example.com", role: "User", status: "Inactive" },
    { id: 8, name: "Sophia Martinez", email: "sophia@example.com", role: "Moderator", status: "Active" },
    { id: 9, name: "Daniel White", email: "daniel@example.com", role: "User", status: "Active" },
    { id: 10, name: "Olivia Harris", email: "olivia@example.com", role: "User", status: "Inactive" },
    { id: 11, name: "Ethan Moore", email: "ethan@example.com", role: "Admin", status: "Active" },
    { id: 12, name: "Isabella Lewis", email: "isabella@example.com", role: "User", status: "Active" },
    { id: 13, name: "Alexander Walker", email: "alex@example.com", role: "Moderator", status: "Active" },
    { id: 14, name: "Mia Hall", email: "mia@example.com", role: "User", status: "Inactive" },
    { id: 15, name: "James Allen", email: "james@example.com", role: "User", status: "Active" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 10;

  // Calculate the displayed users
  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const displayedUsers = usersData.slice(startIndex, endIndex);

  // Pagination logic
  const totalPages = Math.ceil(usersData.length / usersPerPage);

  return (
    <div className="p-6">
      {/* Header with Add User Button */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold text-[#004D40]">Manage Users</h2>
        <button className="bg-[#00796B] text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-[#004D40]">
          <FaPlus /> Add User
        </button>
      </div>

      {/* Table Container */}
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
