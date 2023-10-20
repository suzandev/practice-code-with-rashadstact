import { useState } from "react";
import { Link } from "react-router-dom";
import FormButton from "./FormButton";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
import Input from "./Input";

const LoginForm = () => {
  const [loginAuthState, setLoginAuthState] = useState({
    email: "",
    password: "",
    error: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    const { email, password } = loginAuthState;

    if (!email || !password) {
      return setLoginAuthState({
        ...loginAuthState,
        error: "Please enter both email and password.",
      });
    }
  };
  function handleChange(e) {
    const { name, value } = e.target;
    setLoginAuthState({
      ...loginAuthState,
      [name]: value,
    });
  }

  return (
    <div className="bg-white sm:w-1/2 p-10">
      <FormHeader formType="Login" formTitle="Welcome Back to Foodily" />

      <form onSubmit={handleLogin}>
        <Input
          inputName="Email"
          id="email"
          type="email"
          placeholder="example@example.com"
          value={loginAuthState.email}
          onChange={handleChange}
        />
        <Input
          inputName="Password"
          id="password"
          type="password"
          placeholder="*************"
          value={loginAuthState.password}
          onChange={handleChange}
        />
        <Link
          to="#"
          className="text-xs text-neutral-400 text-end pb-4 w-full block hover:underline">
          Forgot Password?
        </Link>
        {loginAuthState.error && (
          <div className="text-red-600">{loginAuthState.error}</div>
        )}

        <FormButton title="Login" />
      </form>

      <FormFooter
        title="New to foodily?"
        linkTitle="Create account"
        to="/auth/register"
      />
    </div>
  );
};

export default LoginForm;
