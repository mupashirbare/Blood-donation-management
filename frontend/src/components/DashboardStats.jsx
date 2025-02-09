import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const bloodRequestData = [
  { month: "Jan", requests: 20 },
  { month: "Feb", requests: 35 },
  { month: "Mar", requests: 50 },
  { month: "Apr", requests: 40 },
  { month: "May", requests: 55 },
];

const donorData = [
  { month: "Jan", donors: 15 },
  { month: "Feb", donors: 25 },
  { month: "Mar", donors: 40 },
  { month: "Apr", donors: 30 },
  { month: "May", donors: 50 },
];

const DashboardStats = () => {
  return (
    <div className="p-6">
      {/* Dashboard Overview Section */}
      <h2 className="text-3xl font-bold mb-4">Dashboard Overview</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold">Total Blood Requests</h3>
          <p className="text-2xl font-bold text-red-600">150</p>
        </div>
        
        {/* Card 2 */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold">Total Donors</h3>
          <p className="text-2xl font-bold text-green-600">80</p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-white shadow-lg rounded-lg">
          <h3 className="text-lg font-semibold">Pending Requests</h3>
          <p className="text-2xl font-bold text-yellow-600">20</p>
        </div>
      </div>

      {/* Charts Section */}
      <h2 className="text-3xl font-bold mt-6 mb-4">Blood Requests & Donor Trends</h2>
      
      {/* Blood Requests Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-2">Blood Requests</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={bloodRequestData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="requests" fill="#f87171" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Donor Trends Chart */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold mb-2">Donor Trends</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={donorData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="donors" fill="#34d399" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardStats;
