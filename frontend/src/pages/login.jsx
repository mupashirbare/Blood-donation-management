import React from "react";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8F9FA] py-12 px-6">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-[#B22222] mb-6">
          Welcome Back!
        </h2>
        <p className="text-center text-sm text-[#6C757D] mb-6">
          Sign in to continue managing blood donations
        </p>
        <form className="space-y-6" action="#" method="POST">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[#343A40]"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="block w-full mt-2 px-4 py-2 text-[#343A40] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B22222] focus:border-[#B22222]"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-[#343A40]"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="block w-full mt-2 px-4 py-2 text-[#343A40] bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B22222] focus:border-[#B22222]"
              placeholder="Enter your password"
            />
          </div>

          {/* Forgot Password Link */}
          <div className="flex items-center justify-between">
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-[#B22222] hover:text-[#8B0000]"
              >
                Forgot password?
              </a>
            </div>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-3 bg-[#B22222] text-white font-semibold rounded-md hover:bg-[#8B0000] transition duration-300"
            >
              Sign In
            </button>
          </div>
        </form>

        {/* Register Link */}
        <p className="text-sm text-center text-[#343A40] mt-6">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-medium text-[#B22222] hover:underline"
          >
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
