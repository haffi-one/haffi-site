import Image from "next/image";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        <nav className="max-w-[820px] mx-auto py-4 md:py-7 px-3 md:px-0 flex flex-row justify-between sticky top-0 bg-white/90 backdrop-blur-md">
          <Image alt="Haffi Logo" src="/HAFFI.svg" width={139} height={46} />
          <button className="bg-gray-dark-1 font-medium text-green-1 px-4 py-2 rounded-full">
            Join Waitlist
          </button>
        </nav>
        <main className="max-w-[820px] mx-auto px-3 md:px-0">{children}</main>
      </body>
    </html>
  );
}
