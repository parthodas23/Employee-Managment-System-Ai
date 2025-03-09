import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email", email);
    console.log("Password", password);

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center h-screen w-screen  justify-center">
      <div className="border-2 border-emerald-500 p-20 rounded-xl">
        <form className="flex flex-col justify-center items-center">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-2 border-emerald-700 rounded-full px-3 py-5 text-xl "
            required
            type="email"
            placeholder="Enter Your Email"
          />
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-2 border-emerald-700 rounded-full px-3 py-5 text-xl mt-3 "
            required
            type="password"
            placeholder="Enter your password"
          />

          <button
            onClick={(e) => handleSubmit(e)}
            className=" mt-5 border-none text-white bg-emerald-500 rounded-2xl py-2 px-6 text-xl cursor-pointer"
          >
            Log In
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
