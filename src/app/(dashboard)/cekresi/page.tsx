"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CekResiPage() {
  const router = useRouter();
  const [page, setPage] = useState<"ongkir" | "resi">("ongkir");
  const [isPricingShow, setPricingShow] = useState<boolean>(false);

  return (
    <div className="flex flex-col items-center min-h-screen p-4">
      <div className="relative flex items-center justify-center w-full py-4">
        <button onClick={() => router.back()} className="absolute left-0 px-1 py-2">
          <Image src={"/back.svg"} alt="back" width={20} height={20} />
        </button>
        <h1 className="mx-auto text-lg font-semibold text-secondary">
          Cek Resi
        </h1>
      </div>

      <div className="flex flex-col rounded-2xl w-full mb-4 mt-4 shadow-md">
        <div className="bg-bluePrimary text-white font-bold p-3 rounded-t-2xl border-b border-gray-200">
          Estimasi Tiba: 15 Feb 2025
        </div>

        <div className="flex justify-between p-4 border-b border-gray-200">
          <div>
            <p className="font-bold text-primary">SiCepat - REG</p>
            <p className="text-sm text-muted">00123123123</p>
          </div>
          <div className="text-right">
            <p className="font-semibold">Rp 20.000</p>
            <p className="text-sm text-muted">1 - 2 Hari</p>
          </div>
        </div>

        <div className="p-4">
          <p className="text-sm text-muted font-bold">Acun Maryani Ningtyas</p>
          <p className="text-sm text-muted">Jl. ABC</p>
        </div>
      </div>

      <div className="flex flex-col border-2 border-[#EFF0F6] text-justify p-4 rounded-2xl w-full justify-between">
        <p className="font-bold text-primary text-lg mb-2">Lacak Pengiriman</p>
        <p className="text-muted mb-4">
          Garansi tiba pada <b>15 Feb 2025</b>. Jika mengalami keterlambatan
          maka akan mendapat potongan pada order berikutnya.
        </p>

        <div className="relative">
          <div
            className="absolute left-[34px] top-11 w-[2px] border-l-2 border-dotted border-bluePrimary"
            style={{ height: `calc(100% - 100px)` }}
          ></div>
          {[
            {
              date: "15 Feb 2025",
              title: "Pesanan Diproses",
            },
            {
              date: "16 Feb 2025",
              title: "Dalam Pengiriman",
            },
            {
              date: "17 Feb 2025",
              title: "Pesanan Tiba",
            },
          ].map((item, index) => (
            <div key={index} className="relative flex items-center mb-4">
              <div className="flex items-center w-full border border-[#EFF0F6] p-4 rounded-lg shadow-sm">
                <div className="relative flex items-center justify-center mr-4">
                  <div className="w-9 h-9 border border-gray-300 rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-bluePrimary rounded-full"></div>
                  </div>
                </div>

                <div>
                  <p className="font-bold text-muted">{item.title}</p>
                  <p className="text-sm text-muted">{item.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
