"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <section
      className="relative max-w-[420px] w-full mx-auto min-h-screen bg-white shadow-md"
      style={{
        backgroundImage: "url('bg2.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="fixed bottom-0 max-w-[420px] w-full h-1/2 bg-white rounded-t-3xl z-0"></div>
      <main className="relative z-10">{children}</main>

      <nav className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[420px] bg-white shadow-md flex justify-between items-center px-12 py-3 rounded-t-3xl border-t z-10">
        <Link
          href="/home"
          className={`flex flex-col items-center ${
            pathname === "/home" ? "text-bluePrimary" : "text-muted"
          }`}
        >
          <Image
            src={pathname === "/home" ? "/home-active.svg" : "/home.svg"}
            width={24}
            height={24}
            alt="home"
          />
          <span className="text-xs font-medium">Beranda</span>
        </Link>

        <div className="relative flex flex-col items-center">
          <Link href="/create-order">
            <Image
              className="absolute -top-10 left-1/2 -translate-x-1/2"
              src={"/create-order.svg"}
              width={52}
              height={52}
              alt="Create order"
            />
          </Link>
          <span className="text-xs mt-6 text-gray-600 font-semibold">
            Buat Order
          </span>
        </div>

        <Link
          href="/list-order"
          className={`flex flex-col items-center ${
            pathname === "/list-order" ? "text-bluePrimary" : "text-muted"
          }`}
        >
          <Image
            src={
              pathname === "/list-order"
                ? "/list-order-active.svg"
                : "/list-order.svg"
            }
            width={24}
            height={24}
            alt="list order"
          />
          <span className="text-xs font-medium">List Order</span>
        </Link>
      </nav>
    </section>
  );
}
