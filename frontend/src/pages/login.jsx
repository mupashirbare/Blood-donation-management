import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "", role: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(""); // Clear error when user starts typing
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || !formData.role) {
      setError("All fields are required.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);
      localStorage.setItem("token", res.data.token);

      if (formData.role === "admin") navigate("/admin");
      else if (formData.role === "donor") navigate("/donor-dashboard");
      else navigate("/");
    } catch (error) {
      setError("Invalid email, password, or role selection.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F9FA] px-6 py-12">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-[#B22222] mb-4">
          Welcome Back!
        </h2>
        <p className="text-center text-sm text-[#6C757D] mb-6">
          Sign in to continue managing blood donations
        </p>

        {/* Error Message */}
        {error && <p className="text-red-600 text-sm text-center">{error}</p>}

        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#343A40]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="block w-full mt-2 px-4 py-2 text-[#343A40] bg-white border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-[#B22222] focus:border-[#B22222]"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#343A40]">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="block w-full mt-2 px-4 py-2 text-[#343A40] bg-white border border-gray-300 rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-[#B22222] focus:border-[#B22222]"
              placeholder="Enter your password"
            />
          </div>

          {/* Role Selection */}
          <div>
            <label htmlFor="role" className="block text-sm font-medium text-[#343A40]">
              Select Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="block w-full mt-2 px-4 py-2 bg-white border border-gray-300 rounded-md 
                         text-[#343A40] focus:outline-none focus:ring-2 focus:ring-[#B22222] focus:border-[#B22222]"
            >
              <option value="">Choose a role</option>
              <option value="admin">Admin</option>
              <option value="donor">Donor</option>
              <option value="user">Recipient</option>
            </select>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-between text-sm">
            <a href="#" className="text-[#B22222] hover:text-[#8B0000]">
              Forgot password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-[#B22222] text-white font-semibold rounded-md hover:bg-[#8B0000] transition duration-300"
          >
            Sign In
          </button>
        </form>

        {/* Register Link */}
        <p className="text-sm text-center text-[#343A40] mt-6">
          Don't have an account?{" "}
          <a href="/register" className="font-medium text-[#B22222] hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
