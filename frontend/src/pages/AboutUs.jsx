import { FaUsers, FaBullseye, FaLightbulb, FaUserTie } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-900 font-serif">
      {/* Hero Section */}
      <div className="relative w-full h-72 flex items-center justify-center bg-gradient-to-r from-[#B71C1C] to-[#880E4F] text-white text-center">
        <div className="p-8">
          <h1 className="text-5xl font-bold tracking-wide">About Us</h1>
          <p className="text-lg mt-2 opacity-90">Our story, vision, and the people behind our success.</p>
        </div>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto py-16 px-6 space-y-12">
        {/* About Sections */}
        {[
          {
            title: "Who We Are",
            content:
              "We are a team of innovators, creators, and visionaries dedicated to making an impact through technology and design.",
            icon: <FaUsers className="text-[#B71C1C] text-5xl" />,
          },
          {
            title: "Our Mission",
            content:
              "Our mission is to deliver high-quality solutions that drive success, innovation, and long-term value for our clients.",
            icon: <FaBullseye className="text-[#B71C1C] text-5xl" />,
          },
          {
            title: "Our Vision",
            content:
              "We aim to be pioneers in our industry, setting new standards of excellence and inspiring the next generation.",
            icon: <FaLightbulb className="text-[#B71C1C] text-5xl" />,
          },
        ].map((section, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-8 rounded-xl border-l-8 border-[#B71C1C] hover:scale-105 transition-transform flex items-center gap-6"
          >
            {section.icon}
            <div>
              <h2 className="text-2xl font-semibold text-[#B71C1C]">{section.title}</h2>
              <p className="mt-3 text-gray-600">{section.content}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Our Team Section */}
      <div className="bg-white py-16">
        <h2 className="text-3xl font-bold text-center text-[#B71C1C]">Meet Our Team</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-6 mt-8">
          {/* Team Members */}
          {[
            {
              name: "Shandamiir Abdi Ali",
              role: "CEO",
              img: ".././public/image/awerd.jpg",
            },
            {
              name: "Mubashir Bashiir Hirse",
              role: "CTO",
              img: ".././public/image/awerd.jpg",
            },
            {
              name: "Mohamed Salah AbdiKarim",
              role: "Designer",
              img: ".././public/image/awerd.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-lg shadow-lg text-center hover:shadow-2xl transition-shadow"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full mb-4 border-4 border-[#B71C1C]"
              />
              <h3 className="text-xl font-semibold text-[#B71C1C]">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
              <FaUserTie className="text-3xl text-gray-500 mt-2 mx-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
