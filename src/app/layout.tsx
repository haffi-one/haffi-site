import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>Haffi - Simplified Automation for WhatsApp</title>
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="description"
          content="Streamline WhatsApp Bookings, Save Time & Grow Your Business"
        />
        <meta
          name="keywords"
          content="Haffi, Haffi, haffi chat, Booking App, WhatsApp, booking, appointment, Appointment Booking, WhatsApp Marketing, whatsapp market automation, WhatsApp Business Web, WhatsApp Web Business, free whatsapp business api, WA Business Web, Whatsapp Business automation, Automated WhatsApp messages, Automatically reply on WhatsApp, WhatsApp Booking System, Book appointments On WhatsApp, Whatsapp business greeting message, Broadcast message on whatsapp business, WhatsApp booking tool, Caribbean business software, Broadcast message on whatsapp business"
        />

        <meta property="og:title" content="Haffi for WhatsApp Business" />
        <meta
          property="og:description"
          content="Streamline WhatsApp Bookings, Save Time & Grow Your Business"
        />
        <meta property="og:url" content="https://haffi.one" />
        <meta property="og:site_name" content="Haffi" />
        <meta
          property="og:image"
          content="https://haffi.one/social-share.jpg"
        />
        <meta
          property="og:image:secure_url"
          content="https://haffi.one/social-share.jpg"
        />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="566" />

        <meta
          property="og:image:alt"
          content="Streamline WhatsApp Bookings, Save Time & Grow Your Business"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Haffi for WhatsApp Business" />
        <meta
          name="twitter:description"
          content="Streamline WhatsApp Bookings, Save Time & Grow Your Business"
        />
        <meta
          name="twitter:image"
          content="https://haffi.one/social-share.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="Streamline WhatsApp Bookings, Save Time & Grow Your Business"
        />
      </head>
      <body>
        <nav className="max-w-[820px] mx-auto py-4 md:py-7 px-3 md:px-0 flex flex-row justify-between sticky top-0 bg-white/90 backdrop-blur-md">
          <a href="/">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              alt="Haffi Logo"
              src="/HAFFI.svg"
              className="h-[46px] w-auto"
            />
          </a>
          <a
            href="/join-waitlist"
            className="transition-all ease-in-out delay-150 border-2 border-gray-dark-1 bg-transparent text-gray-dark-1 hover:border-green-1 hover:bg-green-1 font-bold px-4 py-2 rounded-full"
          >
            Join Waitlist
          </a>
        </nav>
        <main className="max-w-[820px] mx-auto px-3 md:px-0">{children}</main>
        <footer className="w-screen bg-gray-dark-1 pt-[100px] pb-[60px]">
          <div className="max-w-[820px] mx-auto px-3 md:px-0">
            <section>
              <div className="w-full flex flex-col gap-2 justify-center">
                <h2 className="text-green-1 font-bold text-center text-[36px] leading-[44px] md:text-[55px] md:leading-[70px]">
                  Free until March 2024
                </h2>
                <p className="text-green-1 text-center text-[20px] leading-[29px] md:text-[22px] md:leading-[30px]">
                  The Secret weapons for your WhatsApp workflow
                </p>
                <p className="text-green-1 text-center text-[17px] leading-[30px] md:text-[20px] md:leading-[40px]">
                  Schedule appointments & send reminders 24/7
                  <br />
                  Verify payments instantly with screenshots
                  <br />
                  Manage bookings & customers all in one place
                  <br />
                  Interactive WhatsApp Experience
                  <br />
                  Business calendar integration <br />
                  and much, much more.
                </p>
              </div>
              <div className="my-10 text-center">
                <a
                  href="/join-waitlist"
                  className="transition-all ease-in-out delay-150 border-2 border-green-1 bg-gray-dark-1 text-green-1 hover:bg-green-1 hover:text-gray-dark-1 text-2xl font-semibold py-3 px-7 rounded-full inline-block"
                >
                  Join The Waitlist
                </a>
              </div>
              <div className="w-full flex flex-col gap-2 justify-center">
                <a
                  href="/faq"
                  className="text-green-1 text-center text-[20px] leading-[29px] md:text-[22px] md:leading-[30px] underline"
                >
                  Frequently Asked Questions
                </a>
              </div>
              <p className="text-green-1 text-center opacity-80 mt-10">
                &copy; HAFFI.one 2023-2024
              </p>
            </section>
          </div>
        </footer>
      </body>
    </html>
  );
}
