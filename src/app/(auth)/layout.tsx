"use client";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section
      className="relative max-w-[420px] w-full mx-auto min-h-screen bg-white shadow-md"
      style={{
        backgroundImage: "url('bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <main>{children}</main>
    </section>
  );
}
