import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Navbar from "../../Components/Header/Navbar";
import toast from "react-hot-toast";

const LoginForm = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }

    // Password validation
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

    signIn(email, password)
      .then((result) => {
        console.log(result);
        navigate(location?.state ? location.state : "/");
        toast.success("Login Successfully");
        toast.dismiss(toastId);
      })
      .catch(() => {
        toast.error("Password does not match");

        toast.dismiss(toastId);
      });
    const toastId = toast.loading("Waiting...");
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-500 via-pink-500 to-red-500">
        <div
          className="bg-cover bg-no-repeat bg-center p-8 rounded-lg shadow-md md:h-[600px] lg:h-[800px] w-full sm:w-3/4 md:w-2/3 lg:w-3/5 flex flex-col justify-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1599795418571-2e2a4ca9019f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80')`,
            backgroundPosition: `center center`,
          }}
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-16">Login</h2>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-purple-800 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 bg-transparent text-blue-800 placeholder:text-blue-800 font-semi-bold"
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-purple-800 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="w-full px-3 py-2 border-b-2 border-gray-400 focus:outline-none focus:border-blue-500 bg-transparent text-purple-800 placeholder:text-blue-800 font-semi-bold"
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="text-red-600">{error}</div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
                type="submit"
              >
                Login
              </button>
              <a className="text-sm text-blue-500 hover:underline" href="#">
                Forgot Password?
              </a>
            </div>
          </form>

          <p className="text-center mt-4 text-gray-200 font-medium">
            Do not have an account?{" "}
            <Link className="text-blue-600 font-bold" to="/signIn">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
