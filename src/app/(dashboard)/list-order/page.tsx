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
          List Pengiriman
        </h1>
      </div>

      <div className="relative mt-4 w-full">
        <Image
          src={"/search.svg"}
          width={18}
          height={18}
          alt="search"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          className="w-full pl-12 p-3 border border-gray-300 rounded-full focus:ring focus:ring-blue-300"
          placeholder="Cari transaksi apa?"
        />
      </div>
      <div className="flex border-t-2 border-[#EFF0F6] w-full h-2 mb-3 mt-4"></div>

      <div className="mb-2 text-muted font-semibold">
        <p className="">17 Jan 2025</p>
      </div>

      <div className="border-2 border-[#EFF0F6] rounded-lg w-full bg-[#F7F6F6] mb-4">
        <div className="flex items-center px-4 py-2 justify-between">
          <div className="flex flex-row gap-3">
            <Image alt="resi" src={"/send.svg"} height={18} width={18} />
            <span className="font-semibold text-muted">DG429374HDN</span>
          </div>
          <p className="text-muted">Sedang Dikirim</p>
        </div>

        <div className="flex gap-3 bg-white w-full rounded-t-lg border-t border-[#EFF0F6] px-4 py-2">
          <div className="w-1/3">
            <p className="font-semibold text-sm">Nama Penerima</p>
            <p className="text-sm text-muted">Yanto Maryanto</p>
          </div>
          <div className="w-2/3">
            <p className="font-semibold text-sm">Alamat Penerima</p>
            <p className="text-sm text-muted">
              Jl. Kenangan yanti cangtip, Kab Wonorejo, Kota Jakarta Barat
            </p>
          </div>
        </div>

        <div className="flex gap-3 bg-white w-full rounded-b-lg border-t border-[#EFF0F6] px-4 py-2 justify-between text-center">
          <p className="w-1/3 text-sm text-muted break-words">SiCepat</p>
          <p className="w-1/3 text-sm text-muted break-words">REG</p>
          <Link
            href={"/cekresi"}
            className="w-1/3 text-sm break-words text-bluePrimary underline"
          >
            000123123123
          </Link>
        </div>
      </div>

      <div className="border-2 border-[#EFF0F6] rounded-lg w-full bg-[#F7F6F6] mb-4">
        <div className="flex items-center px-4 py-2 justify-between">
          <div className="flex flex-row gap-3">
            <Image alt="resi" src={"/send.svg"} height={18} width={18} />
            <span className="font-semibold text-muted">DG429374HDN</span>
          </div>
          <p className="text-muted">Sedang Dikirim</p>
        </div>

        <div className="flex gap-3 bg-white w-full rounded-t-lg border-t border-[#EFF0F6] px-4 py-2">
          <div className="w-1/3">
            <p className="font-semibold text-sm">Nama Penerima</p>
            <p className="text-sm text-muted">Yanto Maryanto</p>
          </div>
          <div className="w-2/3">
            <p className="font-semibold text-sm">Alamat Penerima</p>
            <p className="text-sm text-muted">
              Jl. Kenangan yanti cangtip, Kab Wonorejo, Kota Jakarta Barat
            </p>
          </div>
        </div>

        <div className="flex gap-3 bg-white w-full rounded-b-lg border-t border-[#EFF0F6] px-4 py-2 justify-between text-center">
          <p className="w-1/3 text-sm text-muted break-words">SiCepat</p>
          <p className="w-1/3 text-sm text-muted break-words">REG</p>
          <Link
            href={"/cekresi"}
            className="w-1/3 text-sm break-words text-bluePrimary underline"
          >
            000123123123
          </Link>
        </div>
      </div>

      <div className="mb-2 text-muted font-semibold">
        <p className="">11 Jan 2025</p>
      </div>

      <div className="border-2 border-[#EFF0F6] rounded-lg w-full bg-[#F7F6F6] mb-4">
        <div className="flex items-center px-4 py-2 justify-between">
          <div className="flex flex-row gap-3">
            <Image alt="resi" src={"/send.svg"} height={18} width={18} />
            <span className="font-semibold text-muted">DG429374HDN</span>
          </div>
          <p className="text-muted">Sedang Dikirim</p>
        </div>

        <div className="flex gap-3 bg-white w-full rounded-t-lg border-t border-[#EFF0F6] px-4 py-2">
          <div className="w-1/3">
            <p className="font-semibold text-sm">Nama Penerima</p>
            <p className="text-sm text-muted">Yanto Maryanto</p>
          </div>
          <div className="w-2/3">
            <p className="font-semibold text-sm">Alamat Penerima</p>
            <p className="text-sm text-muted">
              Jl. Kenangan yanti cangtip, Kab Wonorejo, Kota Jakarta Barat
            </p>
          </div>
        </div>

        <div className="flex gap-3 bg-white w-full rounded-b-lg border-t border-[#EFF0F6] px-4 py-2 justify-between text-center">
          <p className="w-1/3 text-sm text-muted break-words">SiCepat</p>
          <p className="w-1/3 text-sm text-muted break-words">REG</p>
          <Link
            href={"/cekresi"}
            className="w-1/3 text-sm break-words text-bluePrimary underline"
          >
            000123123123
          </Link>
        </div>
      </div>
    </div>
  );
}
