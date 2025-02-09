"use client";
import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <div className="mt-4"></div>
      <Image src={"/logo.svg"} width={150} height={100} alt="Logo" />

      <div className="bg-white shadow-lg rounded-2xl p-6 mt-6 w-full max-w-sm">
        <div className="text-center">
          <p className="text-2xl font-bold text-center">Login</p>
          <span className="text-xs">
            Don’t have an account?{" "}
            <Link className="text-[#4D81E7]" href={"/signup"}>
              Sign Up
            </Link>
          </span>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Masukkan email"
          />
        </div>

        <div className="mb-2">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Masukkan password"
          />
        </div>
        <div className="flex flex-row justify-between mb-4">
          <div className="flex flex-row items-center justify-center space-x-2">
            <input
              type="checkbox"
              id="remember"
              className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring focus:ring-blue-300"
            />
            <label htmlFor="remember" className="text-sm text-gray-700">
              Remember me
            </label>
          </div>
          <p className="text-sm text-[#4D81E7] hover:cursor-pointer">
            Forgot Password ?
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link
            className="w-full bg-bluePrimary text-white py-3 rounded-lg font-medium hover:bg-[#1A8AC0] transition text-center"
            href={"/home"}
          >
            Login
          </Link>

          <div className="flex items-center">
            <div className="flex-grow h-px bg-[#EFF0F6]"></div>
            <span className="px-3 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-[#EFF0F6]"></div>
          </div>

          <button className="w-full flex items-center justify-center py-3 border border-[#EFF0F6] rounded-lg font-medium hover:bg-gray-100 transition">
            <Image
              src="/google.svg"
              alt="Google"
              width={20}
              height={20}
              className="mr-2"
            />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}
