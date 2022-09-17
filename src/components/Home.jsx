import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import "../index.css";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-600">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Vinod Singh
        </h1>
        <h2 className=" text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a
        </h2>
        <div className="i-title">
          <div className="i-title-wrapper">
            <div className="i-title-item">Web Developer</div>
            <div className="i-title-item">Front-end</div>
            <div className="i-title-item">Back-end</div>
            <div className="i-title-item">UI/UX</div>
          </div>
        </div>

        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a full-stack developer specializing in building (and occasionally
          designing) exceptional digital exprerience. Currently, I'm focused on
          building responsive full-stack web applications.
        </p>
        <div>
          <button className="text-white group border-2 px-6 py-3 flex items-center hover:bg-pink-600 hover:border-pink-600">
            <Link to="work" smooth={true} duration={800}>
              View Work
            </Link>
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
