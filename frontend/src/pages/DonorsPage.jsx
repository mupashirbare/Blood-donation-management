import { useState, useEffect } from "react"; 
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const DonorsPage = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [donorsPerPage] = useState(5); // Change this to adjust number per page

  // Fetch donors
  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/admin/donors");
        setDonors(response.data);
      } catch (err) {
        setError("Failed to load donors");
      } finally {
        setLoading(false);
      }
    };
    fetchDonors();
  }, []);

  // Get current donors
  const indexOfLastDonor = currentPage * donorsPerPage;
  const indexOfFirstDonor = indexOfLastDonor - donorsPerPage;
  const currentDonors = donors.slice(indexOfFirstDonor, indexOfLastDonor);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="flex">
      {/* Main Content */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-semibold text-[#004D40] mb-6">Donors</h1>

        {loading && <p className="text-center text-gray-500">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}

        {/* Donors Table */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#00796B] text-white">
                <th className="p-2">Name</th>
                <th className="p-2">Email</th>
                <th className="p-2">Amount</th>
                <th className="p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentDonors.map((donor) => (
                <tr key={donor.id} className="text-center border-b">
                  <td className="p-2">{donor.name}</td>
                  <td className="p-2">{donor.email}</td>
                  <td className="p-2">${donor.amount}</td>
                  <td className="p-2 space-x-2">
                    <Link to={`/admin/donors/edit/${donor.id}`} className="text-[#00796B]">
                      <FaEdit size={20} />
                    </Link>
                    <button className="text-red-500">
                      <FaTrash size={20} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(donors.length / donorsPerPage) }).map((_, index) => (
            <button
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1 ? "bg-[#00796B] text-white" : "bg-gray-200"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DonorsPage;
