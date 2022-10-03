import { updateCurrentUser } from "firebase/auth";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const [isLoggingIn, setIsLoggingIn] = useState(true);

  const { login, signup } = useAuth();

  console.log(updateCurrentUser);

  async function handleSubmit() {
    if (!email || !password) {
      setError("Please enter correct email and password !!");
      return;
    }
    if (isLoggingIn) {
      try {
        await login(email, password);
      } catch (err) {
        setError("Incorrect email or password");
      }
      return;
    }
    await signup(email, password);
  }

  return (
    <div
      className="relative flex flex-1 flex-col text-xs sm:text-sm items-center justify-center
    gap-2 sm:gap-4"
    >
      <h1 className="font-extrabold select-none text-white text-2xl sm:text-4xl uppercase">
        {isLoggingIn ? "Login" : "Register"}
      </h1>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email Address"
        className="outline-none text-stone-800 border-b-2 border-solid border-stone-400 w-full max-w-[40ch]
      duration-300 focus:border-b-4 p-2 rounded-lg"
      />
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="outline-none text-stone-800 border-b-2 border-solid border-stone-400 w-full max-w-[40ch]
      duration-300 focus:border-b-4 p-2 rounded-lg"
      />
      <button
        onClick={handleSubmit}
        className="w-full max-w-[40ch] text-white font-semibold uppercase border-2 border-solid border-white
            overflow-hidden duration-300 py-2 rounded-lg bg-red-300 relative 
            after:absolute 
            after:top-0
            after:right-full
            after:bg-red-700 
            after:z-10 
            after:w-full 
            after:h-full
            hover:after:translate-x-full 
            after:duration-300
            hover:text-stone-200"
      >
        <h2 className="relative z-20">submit</h2>
      </button>
      {error && (
        <div className="rounded-lg bg-white bg-opacity-40 text-center">
          <p className="text-red-700 px-2 text-sm py-1">{error}</p>
        </div>
      )}
      <h1 className="text-white text-sm">- OR -</h1>
      <button className="submitButton">
        <h2 className="relative z-20">
          <span className="">
            <i className="fa-brands fa-google text-[16px] gap-5"></i>
          </span>
          Login with Google
        </h2>
      </button>
      <button className="submitButton">
        <h2 className="relative z-20">
          <span className="">
            <i className="fa-brands fa-facebook text-[16px] gap-5"></i>
          </span>
          Login with Facebook
        </h2>
      </button>
      <button className="submitButton">
        <h2 className="relative z-20">
          <span className="">
            <i className="fa-brands fa-github text-[16px] gap-5"></i>
          </span>
          Login with GitHub
        </h2>
      </button>
      <h2
        className="duration-300 hover:scale-110 font-semibold text-white cursor-pointer"
        onClick={() => setIsLoggingIn(!isLoggingIn)}
      >
        {!isLoggingIn ? "Login" : "Register"}
      </h2>
    </div>
  );
};

export default Login;
