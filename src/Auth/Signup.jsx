import React from "react";
import loginIllustration from "../assets/images/download.png";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 ">
      <div className="my-6 w-full max-w-5xl shadow-md rounded-2xl flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side - Form */}
        <div className="md:w-1/2 w-full bg-white p-8 md:p-10 border-r border-gray-200">
          <h2 className="text-3xl font-bold text-gray-800">
            Create Account ✨
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Join the <span className="font-semibold text-indigo-600">LMS</span> community and start your learning journey today!
          </p>

          <form className="space-y-4">
            {/* Full Name */}
            <div>
              <label className="block text-gray-700 mb-1 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 mb-1 text-sm font-medium">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm"
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-gray-700 mb-1 text-sm font-medium">
                Password
              </label>
              <input
                type="password"
                placeholder="Create a password"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-gray-700 mb-1 text-sm font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                placeholder="Re-enter your password"
                className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none text-sm"
              />
            </div>

            {/* Role Selection */}
         <div>
  <label className="block text-gray-700 mb-1 text-sm font-medium">
    Select Role
  </label>
  <select
    name="role"
                   className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500  outline-none text-sm"

    defaultValue=""
  >
    <option value="" disabled>
      Choose your role
    </option>
    <option value="student">Student</option>
    <option value="teacher">Teacher</option>
    <option value="admin">Admin</option>
  </select>
</div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-2.5 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold transition duration-300 shadow-sm"
            >
              Sign Up
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-5">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="px-2 text-gray-400 text-xs">OR</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          {/* Social Buttons */}
          <div className="flex gap-2">
            <button className="flex-1 py-2 rounded-md bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition text-xs font-medium">
              Google
            </button>
            <button className="flex-1 py-2 rounded-md bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100 transition text-xs font-medium">
              Facebook
            </button>
          </div>

          {/* Already have account */}
          <p className="text-center text-gray-500 mt-5 text-xs">
            Already have an account?{" "}
            <Link
              to={"/"}
              className="text-indigo-600 hover:text-indigo-500 font-semibold"
            >
              Login
            </Link>
          </p>
        </div>

        {/* Right Side - Illustration */}
        <div className="md:w-1/2 w-full flex justify-center items-center bg-gradient-to-br from-indigo-100 to-indigo-50 p-10">
          <img
            src={loginIllustration}
            alt="LMS Illustration"
            className="max-h-[350px] object-contain drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
