import React from "react";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center bg-[#F8F9FA] text-[#343A40] py-16 px-6 text-center"
    >
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold mb-6">
          Donate Blood, Save Lives
        </h1>
        <p className="text-lg mb-8">
          Every drop of blood counts. Join us in our mission to provide safe
          and adequate blood to those in need. Become a hero today!
        </p>
        <a
          href="#donate"
          className="bg-[#B22222] text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#8B0000] transition-all"
        >
          Donate Now
        </a>
      </div>
    </section>
  );
};

export default Home;
