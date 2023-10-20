export default function GoogleLoginButton() {
  function handleGoogleLogin() {
    console.log("GoogleLoginButton");
  }

  return (
    <button onClick={handleGoogleLogin} className="btn">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
        alt="Google Logo"
      />
      <span>Sign in with Google</span>
    </button>
  );
}
