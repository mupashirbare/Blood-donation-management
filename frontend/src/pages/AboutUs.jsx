import { FaUsers, FaBullseye, FaLightbulb } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <div className="relative w-full h-64 bg-cover bg-center flex items-center justify-center text-white bg-[url('https://source.unsplash.com/1600x900/?teamwork')]">
        <div className="bg-black bg-opacity-50 p-6 rounded-md text-center">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg mt-2">Discover who we are and what we stand for.</p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Who We Are */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <FaUsers className="text-red-700 text-5xl" />
          <div>
            <h2 className="text-3xl font-semibold">Who We Are</h2>
            <p className="mt-3 text-gray-700">
              We are a passionate team dedicated to making a difference. Our goal is to provide
              valuable services and ensure a positive impact in our community.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8">
          <FaBullseye className="text-red-700 text-5xl" />
          <div>
            <h2 className="text-3xl font-semibold">Our Mission</h2>
            <p className="mt-3 text-gray-700">
              Our mission is to provide quality services that meet the needs of our users, ensuring
              excellence, innovation, and commitment to our vision.
            </p>
          </div>
        </div>

        {/* Our Vision */}
        <div className="flex flex-col md:flex-row items-center gap-8">
          <FaLightbulb className="text-red-700 text-5xl" />
          <div>
            <h2 className="text-3xl font-semibold">Our Vision</h2>
            <p className="mt-3 text-gray-700">
              We aim to be the leading provider in our industry, setting standards of innovation,
              trust, and customer satisfaction, while expanding our impact worldwide.
            </p>
          </div>
        </div>
      </div>

      {/* Our Team Section */}
      <div className="bg-white py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Meet Our Team</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
          {/* Team Members */}
          {[
            { name: "Alice Johnson", role: "CEO", img: "https://source.unsplash.com/150x150/?woman,portrait" },
            { name: "Michael Smith", role: "CTO", img: "https://source.unsplash.com/150x150/?man,portrait" },
            { name: "Emma Brown", role: "Designer", img: "https://source.unsplash.com/150x150/?girl,portrait" },
          ].map((member, index) => (
            <div key={index} className="bg-gray-100 p-6 shadow-md rounded-lg text-center">
              <img src={member.img} alt={member.name} className="w-24 h-24 mx-auto rounded-full mb-4" />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
