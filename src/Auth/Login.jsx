import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl rounded-3xl overflow-hidden flex">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Welcome Back</h2>
          <p className="text-gray-500 mb-8">
            Login to continue your learning journey 🚀
          </p>

          <form className="space-y-5">
            <div>
              <label className="block text-gray-700 mb-2 text-sm">Email</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
            </div>

            <div>
              <label className="block text-gray-700 mb-2 text-sm">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
              />
            </div>

            <div className="text-right">
              <a
                href="#"
                className="text-sm text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold transition duration-300"
            >
              Login
            </button>
          </form>

          <div className="flex items-center my-6">
            <div className="flex-grow h-px bg-gray-300"></div>
            <span className="px-3 text-gray-400 text-sm">OR</span>
            <div className="flex-grow h-px bg-gray-300"></div>
          </div>

          <div className="flex gap-3">
            <button className="flex-1 py-3 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition">
              Google
            </button>
            <button className="flex-1 py-3 rounded-lg bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition">
              Facebook
            </button>
          </div>

          <p className="text-center text-gray-500 mt-6 text-sm">
            Don’t have an account?{" "}
            <a href="#" className="text-indigo-600 hover:text-indigo-500">
              Sign Up
            </a>
          </p>
        </div>

        {/* Right Side - Image/Illustration */}
        <div className="hidden md:flex w-1/2 bg-gradient-to-br from-indigo-100 via-white to-indigo-50 items-center justify-center p-10">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/online-learning-lecture-3985524-3299308.png"
            alt="LMS Login"
            className="max-w-sm w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
