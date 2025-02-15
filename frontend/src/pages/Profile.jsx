import { useState } from "react";
import Sidebar from "../components/Sidebar";

const Profile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1234567890",
    role: "Admin",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ ...user });

  const handleChange = (e) => {
    setUpdatedUser({ ...updatedUser, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(updatedUser);
    setIsEditing(false);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-semibold text-[#004D40] mb-6">Profile</h1>

        <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-md mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Name</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={updatedUser.name}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            ) : (
              <p className="p-2 border rounded-md">{user.name}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email</label>
            <p className="p-2 border rounded-md">{user.email}</p>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Phone</label>
            {isEditing ? (
              <input
                type="text"
                name="phone"
                value={updatedUser.phone}
                onChange={handleChange}
                className="w-full p-2 border rounded-md"
              />
            ) : (
              <p className="p-2 border rounded-md">{user.phone}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Role</label>
            <p className="p-2 border rounded-md">{user.role}</p>
          </div>

          {/* Buttons */}
          <div className="flex justify-between">
            {isEditing ? (
              <button onClick={handleSave} className="bg-green-500 text-white px-4 py-2 rounded-md">
                Save
              </button>
            ) : (
              <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
