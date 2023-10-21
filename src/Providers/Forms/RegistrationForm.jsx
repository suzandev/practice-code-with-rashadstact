import { useState } from "react";
import FormButton from "./FormButton";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
import Input from "./Input";

export default function RegistrationForm() {
  const [registrationAuthState, setRegistrationAuthState] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    error: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setRegistrationAuthState({
      ...registrationAuthState,
      [name]: value,
    });
  }

  function handleRegister(e) {
    e.preventDefault();
    const { fullName, email, password, confirmPassword } =
      registrationAuthState;
    console.log(fullName, email, password, confirmPassword);
  }

  return (
    <div className="bg-white sm:w-1/2 p-10">
      <FormHeader formType="Registration" formTitle="Welcome to Foodily" />

      <form onSubmit={handleRegister}>
        <Input
          inputName="Full Name"
          id="fullName"
          type="text"
          placeholder="John Doe"
          value={registrationAuthState.fullName}
          onChange={handleChange}
        />
        <Input
          inputName="Email"
          id="email"
          type="email"
          placeholder="example@example.com"
          value={registrationAuthState.email}
          onChange={handleChange}
        />
        <Input
          inputName="Password"
          id="password"
          type="password"
          placeholder="*************"
          value={registrationAuthState.password}
          onChange={handleChange}
        />
        <Input
          inputName="Confirm Password"
          id="confirmPassword"
          type="password"
          placeholder="*************"
          value={registrationAuthState.confirmPassword}
          onChange={handleChange}
        />
        {registrationAuthState.error && (
          <div className="text-red-600">{registrationAuthState.error}</div>
        )}

        <FormButton title="Register" />
      </form>

      <FormFooter
        title="Already have an account?"
        linkTitle="Login"
        to="/auth/login"
      />
    </div>
  );
}
