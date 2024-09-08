import { useState } from "react";
import Header from "./Header";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/IN-en-20240903-TRIFECTA-perspective_0d3aac9c-578f-4e3c-8aa8-bbf4a392269b_small.jpg"
          alt="Background image"
        />
      </div>

      <form className="absolute bg-black bg-opacity-70 w-5/12 my-36 mx-auto right-0 left-0 px-24 py-24 text-white">
        <h1 className="text-4xl font-bold mb-10 text-center">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-4 m-2 bg-gray-800 rounded-lg"
          />
        )}

        <input
          type="text"
          placeholder="Email"
          className="w-full p-4 m-2 bg-gray-800 rounded-lg"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-4 m-2 bg-gray-800 rounded-lg"
        />
        <br />
        <button className="p-3 mx-2 my-4 bg-red-600 rounded-lg w-full">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <div>
          {isSignInForm ? (
            <p className="mx-2 py-2">
              New to NetflixGPT?
              <span
                className="font-bold hover:cursor-pointer hover:underline"
                onClick={toggleSignInForm}
              >
                Sign Up now.
              </span>
            </p>
          ) : (
            <p className="mx-2 py-2">
              Already registered?
              <span
                className="font-bold hover:cursor-pointer hover:underline"
                onClick={toggleSignInForm}
              >
                Sign In now.
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};
export default Login;
