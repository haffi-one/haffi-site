import Image from "next/image";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Haffi - Making WhatsApp for Business Alot Easier</title>
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="description"
          content="Haffi - Tools to make booking your customers on WhatsApp Business a lot easier, saving you time, and time is money"
        />
        <meta
          name="keywords"
          content="Haffi, Haffitalk, WhatsApp Chat Bot, Conversation Automation, Messaging Bot, Marketing, Innovative Conversations, Automated Interaction, Caribbean WhatsApp Business Bot "
        />

        <meta
          property="og:title"
          content="Haffi - Making WhatsApp for Business Alot Easier"
        />
        <meta
          property="og:description"
          content="Haffi - Tools to make booking your customers on WhatsApp Business a lot easier, saving you time, and time is money"
        />
        <meta property="og:url" content="https://haffi.one" />
        <meta property="og:site_name" content="Haffi" />
        <meta property="og:image" content="social.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Haffi - Your tools for WhatsApp for Business"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Haffi - Your tools for WhatsApp for Business"
        />
        <meta
          name="twitter:description"
          content="Haffi - Tools to make booking your customers on WhatsApp Business a lot easier, saving you time, and time is money"
        />
        <meta name="twitter:image" content="social.png" />
        <meta
          name="twitter:image:alt"
          content="Haffi - Your tools for Business for WhatsApp"
        />
      </head>
      <body>
        <nav className="max-w-[820px] mx-auto py-4 md:py-7 px-3 md:px-0 flex flex-row justify-between sticky top-0 bg-white/90 backdrop-blur-md">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img alt="Haffi Logo" src="/HAFFI.svg" className="h-[46px] w-auto" />
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
