import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaTwitter, FaGithub } from "react-icons/fa";

import logo from "../assets/images/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <section className="bg-stone-950">
      <div className="max-w-7xl mx-auto py-8 flex flex-col md:flex-row items-center justify-between gap-4 border-b border-white">
        <div className="flex items-center">
          <img className="h-10 w-auto" src={logo} alt="React Dev Jobs Logo" />
          <span className="text-white text-2xl font-bold ml-2">ReactDevJobs</span>
        </div>
        <div className="text-white">
          <ul className="flex flex-col md:flex-row text-center gap-2 md:gap-4">
            <li>
              <Link to="#">About Us</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Terms & Conditions</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <Link to="#" className="rounded-full p-1.5 bg-white">
            <FaTwitter size={24} />
          </Link>
          <Link to="#" className="rounded-full p-1.5 bg-white">
            <FaInstagram size={24} />
          </Link>
          <Link to="#" className="rounded-full p-1.5 bg-white">
            <FaFacebook size={24} />
          </Link>
        </div>
      </div>
      <div className="text-white flex items-center justify-center py-4">
        <p>
          &copy; {year}{" "}
          <a href="https://github.com/lopsang-hyolmopa" target="_blank">
            <span className="hover:underline">Lopsang Lama</span>{" "}
            <FaGithub size={24} className="inline" />
          </a>
        </p>
      </div>
    </section>
  );
};

export default Footer;
