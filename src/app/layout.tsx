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
        <footer className="w-screen bg-gray-dark-1 pt-[100px] pb-[60px]">
          <div className="max-w-[820px] mx-auto px-3 md:px-0">
            <section>
              <div className="w-full flex flex-col gap-2 justify-center">
                <h1 className="text-green-1 font-bold text-center text-[36px] leading-[44px] md:text-[55px] md:leading-[70px]">
                  Free for the first 3 months
                </h1>
                <p className="text-green-1 text-center text-[20px] leading-[29px] md:text-[22px] md:leading-[30px]">
                  Get rid of us if we don&apos;t help your business
                </p>
              </div>
              <div className="my-10 text-center">
                <button className="bg-green-1 text-2xl font-semibold py-3 px-7 rounded-full inline-block">
                  Join Waitlist
                </button>
              </div>
              <p className="text-green-1 text-center opacity-80">
                &copy; HAFFI.one 2023-2024
              </p>
            </section>
          </div>
        </footer>
      </body>
    </html>
  );
}
