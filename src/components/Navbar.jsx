import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaCertificate } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="logo image" style={{ width: "100px" }} />
      </div>

      {/* menu */}

      <ul className="hidden md:flex">
        <li className=" hover:bg-pink-600 duration-300">
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className=" hover:bg-pink-600 duration-300">
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className=" hover:bg-pink-600 duration-300">
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className=" hover:bg-pink-600 duration-300">
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className=" hover:bg-pink-600 duration-300">
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes onClick={handleClick} />}
      </div>
      {/* Mobile Menu*/}

      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl hover:text-pink-600 duration-300">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 duration-300">
          <Link onClick={handleClick} to="about" smooth={true} duration={600}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 duration-300">
          <Link onClick={handleClick} to="skills" smooth={true} duration={700}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 duration-300">
          <Link onClick={handleClick} to="work" smooth={true} duration={800}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl hover:text-pink-600 duration-300">
          <Link onClick={handleClick} to="contact" smooth={true} duration={900}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social-icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300  "
              href="https://www.linkedin.com/in/vinod-singh-developer/"
              target="_blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300  "
              href="https://github.com/VinodSingh07/"
              target="_blank"
            >
              GitHub <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <a
              className="flex justify-between items-center w-full text-gray-300  "
              href="https://ude.my/UC-9de196ef-2d32-4a72-93c7-3703f5485cdc/"
              target="_blank"
            >
              Certificates <FaCertificate size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565fc9]">
            <a
              className="flex justify-between items-center w-full text-gray-300  "
              href="https://drive.google.com/file/d/1a6fbdvhNGJkER3upi8Z_042B0v7ab1NZ/view?usp=sharing/"
              target="_blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
