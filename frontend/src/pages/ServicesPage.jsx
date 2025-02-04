import { FaCode, FaMobileAlt, FaCloud, FaShieldAlt } from "react-icons/fa";
import Footer from "../components/Footer";

const services = [
  {
    icon: <FaCode className="text-4xl text-red-700" />,
    title: "Web Development",
    description: "We create high-performance websites tailored to your business needs.",
  },
  {
    icon: <FaMobileAlt className="text-4xl text-red-700" />,
    title: "Mobile App Development",
    description: "Developing modern mobile applications with a seamless user experience.",
  },
  {
    icon: <FaCloud className="text-4xl text-red-700" />,
    title: "Cloud Solutions",
    description: "Secure cloud-based applications with high scalability and reliability.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-red-700" />,
    title: "Cyber Security",
    description: "Ensuring data security with cutting-edge cybersecurity solutions.",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="bg-red-700 text-white text-center py-16 px-4">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg mt-2">Delivering top-quality solutions for your business needs.</p>
      </div>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto py-12 px-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:scale-105 transition duration-300"
          >
            {service.icon}
            <h2 className="text-xl font-bold mt-4">{service.title}</h2>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center bg-red-700 text-white py-16 px-6">
        <h2 className="text-3xl font-bold">Let's Build Something Amazing Together!</h2>
        <p className="mt-2 text-lg">Contact us today to discuss your project.</p>
        <a href="/contact" className="mt-4 inline-block bg-white text-red-700 font-bold py-3 px-6 rounded-lg hover:bg-gray-200 transition">
          Get in Touch
        </a>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default ServicesPage;
