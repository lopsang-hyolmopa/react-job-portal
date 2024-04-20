import { NavLink } from "react-router-dom";

import logo from "../assets/images/logo.png";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white underline underline-offset-8 decoration-2 px-4 py-2"
      : "text-white hover:underline hover:underline-offset-8 hover:decoration-2 px-4 py-2";

  return (
    <nav className="bg-rose-700">
      <div className="flex h-20 items-center justify-between mx-auto max-w-7xl px-8 lg:px-0">
        <NavLink to="/" className="flex flex-shrink-0 items-center mr-4">
          <img className="h-10 w-auto" src={logo} alt="React Jobs Logo" />
          <span className="hidden md:block text-white text-2xl font-bold ml-2">
            React Jobs
          </span>
        </NavLink>
        <div className="md:ml-auto">
          <div className="flex space-x-2">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/jobs" className={linkClass}>
              Jobs
            </NavLink>
            <NavLink
              to="/add-job"
              className="bg-rose-700 border border-white text-white rounded-md px-4 py-2 hover:bg-white hover:text-rose-700"
            >
              Add Job
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
