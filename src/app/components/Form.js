import { useState } from "react";

const Login = () => {


  const handleLogin = (e) => {


  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-slate-900 to-slate-700 px-4">
      <form
        className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-8 w-full max-w-md shadow-lg"
      >
        <h2 className="text-2xl font-semibold text-white text-center mb-2">
          Login
        </h2>
        <p className="text-gray-300 text-center mb-6">
          Welcome back! Please enter your details.
        </p>

     

        <label className="text-gray-200 text-sm">Email</label>
        <input
          type="text"
          placeholder="you@example.com"
          className="w-full p-3 rounded-lg mt-1 bg-white/20 text-white outline-none border border-white/30 focus:border-blue-400 transition"
        />

        <label className="text-gray-200 text-sm mt-4 block">Password</label>
        <input
          type="password"
          placeholder="Enter password"
          className="w-full p-3 rounded-lg mt-1 bg-white/20 text-white outline-none border border-white/30 focus:border-blue-400 transition"
        />

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold p-3 rounded-lg mt-6 transition"
        >
          Login
        </button>

        <p className="text-center text-gray-300 text-sm mt-4">
          Forgot password? <a href="#" className="text-blue-400 underline">Click here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;

