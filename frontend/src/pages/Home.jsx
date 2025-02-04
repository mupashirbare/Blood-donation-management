import React from "react";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full max-w-screen-xl px-6 py-12 md:py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#B22222]">
          Welcome to Our Blood Donation System
        </h1>
        <p className="mt-4 text-lg md:text-xl text-[#343A40]">
          A platform where every drop of blood matters. Join us and make a
          difference in someone's life today.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <button className="px-6 py-3 bg-[#B22222] text-white rounded-md font-semibold hover:bg-[#8B0000] transition duration-300">
            Get Started
          </button>
          <button className="px-6 py-3 bg-[#F8F9FA] text-[#B22222] border border-[#B22222] rounded-md font-semibold hover:bg-[#B22222] hover:text-white transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-[#FFF] py-12 px-6 md:px-12">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#343A40] mb-8">
          Why Choose Us?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="p-6 border border-gray-200 rounded-md shadow-md text-center">
            <h3 className="text-xl font-bold text-[#B22222] mb-4">Reliable</h3>
            <p className="text-[#6C757D]">
              Our platform ensures that every donation is handled with care and
              reliability.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="p-6 border border-gray-200 rounded-md shadow-md text-center">
            <h3 className="text-xl font-bold text-[#B22222] mb-4">Accessible</h3>
            <p className="text-[#6C757D]">
              Easily register and track your donations or requests anytime,
              anywhere.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="p-6 border border-gray-200 rounded-md shadow-md text-center">
            <h3 className="text-xl font-bold text-[#B22222] mb-4">Impactful</h3>
            <p className="text-[#6C757D]">
              Your contributions save lives, creating a lasting impact in the
              community.
            </p>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default Home;
