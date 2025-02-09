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
          <p className="text-2xl font-bold text-center">Register</p>
          <span className="text-xs">
            Already have an account?{" "}
            <Link className="text-[#4D81E7]" href={"/login"}>Login</Link>
          </span>
        </div>

        <div className="mb-4 mt-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Nama Lengkap
          </label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Masukkan nama lengkap"
          />
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

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Tanggal Lahir
          </label>
          <input
            type="date"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Masukkan tanggal lahir"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            No HP
          </label>
          <input
            type="email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Masukkan no hp"
          />
        </div>

        <div className="mb-8">
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
            placeholder="Masukkan password"
          />
        </div>

        <button className="w-full bg-bluePrimary text-white py-3 rounded-lg font-medium hover:bg-[#1A8AC0] transition">
          Register
        </button>
      </div>
    </div>
  );
}
