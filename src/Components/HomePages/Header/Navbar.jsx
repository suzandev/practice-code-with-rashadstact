import { Link, NavLink } from "react-router-dom";
import { BsApple } from "react-icons/bs";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className="text-slate-800 hover:text-blue-200 text-xl font-semibold"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProducts"
          className="text-slate-800 hover:text-blue-200 text-xl font-semibold"
        >
          Add Product
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/my-cart"
          className="text-slate-800 hover:text-blue-200 text-xl font-semibold"
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-blue-400 px-4 py-3 rounded-md">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-blue-400 rounded-md w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="text-white text-2xl font-bold flex items-center"
        >
          <BsApple size={35} />
          {/* <img
            src="https://w7.pngwing.com/pngs/775/812/png-transparent-apple-logo-apple-logo-cupertino-company-apple-iphone-electronics-leaf-computer.png"
            alt="Logo"
            className="w-10 h-10 mr-2 bg-transparent"
          /> */}
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-link">
          <Link
            to="/login"
            className="text-slate-800 hover:text-blue-200 md:text-xl font-semibold"
          >
            Login
          </Link>
        </button>
        <button className="btn btn-link">
          <Link
            to="/signIn"
            className="text-slate-800 hover:text-blue-200 md:text-xl font-semibold"
          >
            Sign In
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
