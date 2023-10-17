import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

export default function SignUpWithGoogle() {
  const navigate = useNavigate();

  const { setUser } = useContext(AuthContext);
  function signUpWithGoogle() {
    const toastId = toast.loading("Waiting...");
    const auth = getAuth(app);
    signInWithPopup(auth, new GoogleAuthProvider())
      .then((result) => {
        // const credential = GoogleAuthProvider.credentialFromResult(result);
        // const token = credential.accessToken;

        const user = result.user;
        setUser(user);
        navigate(location?.state ? location.state : "/");
        toast.success("Sign up Successfully");
        toast.dismiss(toastId);
      })
      .catch((error) => {
        toast.error(error.message);
        toast.dismiss(toastId);
      });
  }

  return (
    <button
      onClick={signUpWithGoogle}
      className="bg-transparent border rounded-lg text-white py-2 px-4 hover:bg-blue-600 transition duration-300 w-full md:w-3/4"
      type="submit"
    >
      Sign up with Google
    </button>
  );
}
