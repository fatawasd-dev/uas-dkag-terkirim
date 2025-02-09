"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [page, setPage] = useState<"ongkir" | "resi">("ongkir");
  const [isPricingShow, setPricingShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          <div className="relative">
            <div className="text-white bg-[#96D7F2] w-[50px] h-[50px] rounded-full flex items-center justify-center text-xl font-bold ring-4 ring-[#68B2FF]">
              AM
            </div>
          </div>

          <div className="flex flex-col">
            <div className="text-white font-semibold text-sm">
              Selamat Pagi,
            </div>
            <div className="text-white font-bold text-lg">Acun Mariyadi</div>
          </div>
        </div>

        <div className="ml-auto">
          <Image src={"/inbox.svg"} width={30} height={30} alt="Logo" />
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-2xl p-6 mt-6 w-full max-w-sm">
        <div className="flex space-x-2 border border-[#EFF0F6] p-1 rounded-lg w-full mb-4">
          <button
            onClick={() => setPage("ongkir")}
            className={`w-full px-4 py-2 rounded-lg transition font-bold ${
              page === "ongkir"
                ? "bg-[#D9F2FF] text-bluePrimary"
                : "bg-transparent text-[#959595]"
            }`}
          >
            Cek Ongkir
          </button>
          <button
            onClick={() => {
              setPage("resi");
              setPricingShow(false);
            }}
            className={`w-full px-4 py-2 rounded-lg transition font-bold ${
              page === "resi"
                ? "bg-[#D9F2FF] text-bluePrimary"
                : "bg-transparent text-[#959595]"
            }`}
          >
            Cek Resi
          </button>
        </div>

        {page === "ongkir" && (
          <div>
            <p className="text-sm text-muted mb-4">
              Isilah sesuai dengan lokasimu saat ini
            </p>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Asal
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Masukkan asal lokasi"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Tujuan
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Masukkan tujuan pengiriman"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Berat
              </label>
              <div className="relative">
                <input
                  type="number"
                  className="w-full p-3 pr-14 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                  placeholder="Masukkan berat paketmu"
                />
                <span className="absolute inset-y-0 right-3 flex items-center pl-3 border-l border-gray-300 text-muted">
                  Gr
                </span>
              </div>
            </div>

            <button
              className="w-full bg-bluePrimary text-white py-3 rounded-lg font-medium hover:bg-[#1A8AC0] transition"
              onClick={() => {
                setPricingShow(true);
              }}
            >
              Cek Ongkir
            </button>
          </div>
        )}

        {page === "resi" && (
          <div>
            <div className="relative mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Kurir
              </label>
              <div className="relative">
                <select className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300 appearance-none bg-white pr-10">
                  {["SiCepat", "J&T", "JNE", "SAP"].map((v) => (
                    <option key={v} value={v}>
                      {v}
                    </option>
                  ))}
                </select>
                <div className="absolute inset-y-0 right-5 flex items-center pointer-events-none">
                  ▼
                </div>
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                No Resi
              </label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
                placeholder="Masukkan nomor resi"
              />
            </div>

            <div className="flex flex-col">
              <Link
                className="w-full bg-bluePrimary text-white py-3 rounded-lg font-medium hover:bg-[#1A8AC0] transition text-center"
                href={"/cekresi"}
              >
                Cek Resi
              </Link>
            </div>
          </div>
        )}
      </div>

      {page === "ongkir" && isPricingShow && (
        <div className="bg-white shadow-lg rounded-2xl p-6 mt-6 w-full max-w-sm">
          <p className="font-bold text-xl color-primary">List Kurir</p>
          {[
            {
              courier: "JNE",
              service: "REG",
              eta: "1 - 2 Hari",
              price: 10000,
              logo: "jne",
            },
            {
              courier: "SAP",
              service: "UDREG",
              eta: "1 - 2 Hari",
              price: 8000,
              logo: "sap",
            },
          ].map((v) => (
            <div
              key={`${v.courier}${v.service}${v.eta}${v.price}${v.logo}`}
              className="flex space-x-2 border-2 border-[#EFF0F6] p-4 rounded-lg w-full mb-4 items-center justify-between mt-4"
            >
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="text-white bg-white w-[50px] h-[50px] rounded-full flex items-center justify-center text-xl font-bold ring-4 ring-gray-300">
                    <Image
                      src={`/${v.logo}.svg`}
                      width={40}
                      height={40}
                      alt="Logo"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="text-primary font-medium text-lg">
                    {v.courier} • {v.service}
                  </div>
                  <div className="text-muted text-sm">1 - 2 Hari</div>
                </div>
              </div>

              <div className="ml-auto font-bold text-primary">
                Rp {v.price.toLocaleString().replaceAll(",", ".")}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
