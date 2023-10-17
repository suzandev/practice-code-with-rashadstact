import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import toast from "react-hot-toast";
import SignUpWithGoogle from "./SignUpWithGoogle";
import { AuthContext } from "../AuthProvider";
import Navbar from "../../Components/HomePages/Header/Navbar";

const SignIn = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();

    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const firstName = form.get("firstName");
    const lastName = form.get("lastName");
    const phoneNumber = form.get("phoneNumber");
    const email = form.get("email");
    const password = form.get("password");
    const confirmPassword = form.get("confirmPassword");

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^a-zA-Z\d]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        toast.error(
          "Password must be at least 6 characters long, contain a capital letter, and a special character."
        )
      );

      return;
    }

    if (password !== confirmPassword) {
      toast.error("password does not match");
      toast.dismiss(toastId);
      return;
    }

    console.log(
      firstName,
      lastName,
      phoneNumber,
      email,
      password,
      confirmPassword
    );

    createUser(email, password)
      .then(() => {
        navigate(location?.state ? location.state : "/");
        toast.success("Sign up Successfully");
        toast.dismiss(toastId);
      })
      .catch((error) => {
        toast.error(error.message);
        toast.dismiss(toastId);
      });

    const toastId = toast.loading("Waiting...");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
        <div
          className="bg-cover bg-center p-8 rounded-lg shadow-md w-full sm:w-3/4 md:w-2/3 lg:w-3/5 "
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1615438969112-a58e50dd9f15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80')`,
          }}
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Sign Up</h2>
          </div>
          <form onSubmit={handleSignIn}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="firstName"
              >
                First Name
              </label>
              <input
                className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500 bg-transparent placeholder:text-blue-800"
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Enter your first name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="lastName"
              >
                Last Name
              </label>
              <input
                className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500 bg-transparent placeholder:text-blue-800"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Enter your last name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500 bg-transparent placeholder:text-blue-800"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="birthDate"
              >
                Birth Date
              </label>
              <input
                className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500 bg-transparent placeholder:text-blue-800"
                type="date"
                id="birthDate"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500 bg-transparent placeholder:text-blue-800"
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder="Enter your phone number"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500 bg-transparent placeholder:text-blue-800"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="confirmPassword"
              >
                Confirm Password
              </label>
              <input
                className="border rounded-lg py-2 px-3 w-full focus:outline-none focus:ring focus:border-blue-500 bg-transparent placeholder:text-blue-800"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm your password"
              />
            </div>
            <div className="text-center">
              <div className="text-red-600">{error}</div>
              <button
                className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition duration-300 w-full md:w-3/4"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <p>
              Already have an account?{" "}
              <Link to="/login" className="text-blue-800">
                Log In
              </Link>
            </p>
          </div>
          <div className="text-center mt-4">
            <SignUpWithGoogle />
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
