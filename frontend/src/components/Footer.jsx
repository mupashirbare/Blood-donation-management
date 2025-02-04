import { 
    FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
    FaEnvelope, FaPhone, FaMapMarkerAlt 
  } from "react-icons/fa";
  
  const Footer = () => {
    return (
      <footer className="bg-[#B71C1C] text-white py-12 mt-12 w-full">
        <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h2 className="text-2xl font-bold mb-3">About Us</h2>
            <p className="text-sm text-gray-300">
              We are a team dedicated to delivering cutting-edge solutions with creativity and innovation.
            </p>
          </div>
  
          {/* Quick Links */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Quick Links</h2>
            <ul className="space-y-2">
              {["Home", "About Us", "Services", "Contact"].map((link, index) => (
                <li key={index} className="hover:translate-x-2 transition-transform">
                  <a href="#" className="text-gray-300 hover:text-white">{link}</a>
                </li>
              ))}
            </ul>
          </div>
  
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Contact</h2>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-lg text-white" />
                Mogadishu, Somalia
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-lg text-white" />
                info@company.com
              </li>
              <li className="flex items-center gap-2">
                <FaPhone className="text-lg text-white" />
                +252 61 2345678
              </li>
            </ul>
          </div>
  
          {/* Social Media */}
          <div>
            <h2 className="text-2xl font-bold mb-3">Follow Us</h2>
            <div className="flex gap-4">
              {[FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="p-3 bg-gray-800 rounded-full hover:bg-gray-600 transition duration-300"
                >
                  <Icon className="text-xl text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
  
        {/* Footer Bottom */}
        <div className="border-t border-gray-700 mt-10 text-center text-gray-300 pt-4 text-sm">
          © {new Date().getFullYear()} Company Name. All Rights Reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  