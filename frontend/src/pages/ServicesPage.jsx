import { FaTint, FaHandHoldingHeart, FaAmbulance, FaHeartbeat } from "react-icons/fa";
import Footer from "../components/Footer";

const services = [
  {
    icon: <FaTint className="text-4xl text-red-700" />,
    title: "Blood Donation",
    description: "Donate blood to save lives. Every drop counts in emergency situations.",
  },
  {
    icon: <FaHandHoldingHeart className="text-4xl text-red-700" />,
    title: "Plasma Donation",
    description: "Help patients in need by donating plasma, crucial for treating severe illnesses.",
  },
  {
    icon: <FaAmbulance className="text-4xl text-red-700" />,
    title: "Emergency Blood Supply",
    description: "Providing urgent blood supply for hospitals and emergency cases.",
  },
  {
    icon: <FaHeartbeat className="text-4xl text-red-700" />,
    title: "Health Checkups",
    description: "Get free health checkups when you donate blood to ensure your well-being.",
  },
];

const ServicesPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div className="relative w-full h-72 flex items-center justify-center bg-gradient-to-r from-[#B71C1C] to-[#880E4F] text-white text-center">
        <h1 className="text-4xl font-bold">Our Services</h1>
        <p className="text-lg mt-2">We provide essential blood donation and emergency services.</p>
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
        <Footer/>
      
    </div>
  );
};

export default ServicesPage;
