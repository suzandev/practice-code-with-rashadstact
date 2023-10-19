import { Link, NavLink } from "react-router-dom";
import { BsFillCartCheckFill } from "react-icons/bs";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className="text-slate-600 hover:text-slate-900 text-base"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProducts"
          className="text-slate-600 hover:text-slate-900 text-base"
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProducts"
          className="text-slate-600 hover:text-slate-900 text-base"
        >
          Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addProducts"
          className="text-slate-600 hover:text-slate-900 text-base"
        >
          Gallery
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/products"
          className="text-slate-600 hover:text-slate-900 text-base"
        >
          Products
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/"
          className="text-slate-600 hover:text-slate-900 text-base"
        >
          My Cart
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar bg-[#FFFFFF] px-4 py-3 rounded-md">
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
            className="menu menu-sm dropdown-content mt-3 z-[50] p-2 shadow bg-[#FFFFFF] rounded-md w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="">
          <img
            src="https://thememxpro.com/theme/foodily/wp-content/uploads/2022/09/logo-2.png"
            alt="Logo"
            className=""
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end flex gap-2">
        <button>
          <Link to="myCart">
            <BsFillCartCheckFill size={25} className="cursor-pointer" />
          </Link>
        </button>
        <button className="">
          <Link
            to="/login"
            className="text-slate-600 hover:text-slate-900 text-base hover:underline font-semibold"
          >
            Login
          </Link>
        </button>
        <button className="">
          <Link
            to="/signIn"
            className="text-slate-600 hover:text-slate-900 text-base hover:underline font-semibold"
          >
            Sign In
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
