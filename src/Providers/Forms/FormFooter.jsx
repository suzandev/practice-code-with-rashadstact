import { Link } from "react-router-dom";
import GoogleLoginButton from "./GoogleLoginButton";

export default function FormFooter({ title, to, linkTitle }) {
  return (
    <>
      <div className="flex items-center justify-center mt-4 gap-2">
        <span
          className="bg-neutral-200 w-full block"
          style={{ height: "0.5px" }}></span>
        <span>or</span>
        <span
          className="bg-neutral-200 w-full block"
          style={{ height: "0.5px" }}></span>
      </div>

      <div className="flex items-center justify-center mt-4 gap-2">
        <GoogleLoginButton />
      </div>

      <p className="text-center mt-4 text-gray-400 text-xs">
        {title}{" "}
        <Link className="text-[#e8aca0] text-xs" to={to}>
          {linkTitle}
        </Link>
      </p>
    </>
  );
}
