"use client";
import Image from "next/image";
import Link from "next/link";

export default function ListOrderPage() {
  return (
    <div className="flex flex-col min-h-screen p-4">
      <div className="relative flex items-center justify-center w-full py-4">
        <Link href={"/home"} className="absolute left-0 px-1 py-2">
          <Image src={"/back.svg"} alt="back" width={20} height={20} />
        </Link>
        <h1 className="mx-auto text-lg font-semibold text-secondary">
          Buat Order
        </h1>
      </div>

      <div className="border-2 border-[#EFF0F6] rounded-lg w-full bg-[#F7F6F6] mb-4">
        <div className="flex gap-3 items-center px-4 py-2">
          <Image alt="resi" src={"/person.svg"} height={18} width={18} />
          <span className="font-semibold text-muted">Detail Penerima</span>
        </div>

        <div className="flex flex-col gap-3 bg-white w-full rounded-lg border-t border-[#EFF0F6] px-4 py-2">
          <div className="w-full">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              No Order
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Masukkan nomor order"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Nama Penerima
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Masukkan nama penerima"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Alamat Penerima
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Masukkan alamat penerima"
            />
          </div>
        </div>
      </div>

      <div className="border-2 border-[#EFF0F6] rounded-lg w-full bg-[#F7F6F6] mb-4">
        <div className="flex gap-3 items-center px-4 py-2">
          <Image alt="resi" src={"/person.svg"} height={18} width={18} />
          <span className="font-semibold text-muted">Detail Pengirim</span>
        </div>

        <div className="flex flex-col gap-3 bg-white w-full rounded-lg border-t border-[#EFF0F6] px-4 py-2">
          <div className="w-full">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Nama Pengirim
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Masukkan nama pengirim"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Alamat Pengirim
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Masukkan alamat pengirim"
            />
          </div>
        </div>
      </div>

      <div className="border-2 border-[#EFF0F6] rounded-lg w-full bg-[#F7F6F6] mb-4">
        <div className="flex gap-3 items-center px-4 py-2">
          <Image alt="resi" src={"/barang.svg"} height={18} width={18} />
          <span className="font-semibold text-muted">Detail Barang</span>
        </div>

        <div className="flex flex-col gap-3 bg-white w-full rounded-t-lg border-t border-[#EFF0F6] px-4 py-2">
          <div className="w-full">
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              Nama Barang
            </label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring focus:ring-blue-300"
              placeholder="Masukkan nama barang"
            />
          </div>
          <div className="w-full">
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
          <div className="w-full">
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
        </div>
      </div>
    </div>
  );
}
