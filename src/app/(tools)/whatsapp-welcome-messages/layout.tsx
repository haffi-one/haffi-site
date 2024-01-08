import { TrackingProvider } from "@/lib/tracking";
import "../../globals.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Nav from "@/components/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>HaffiCal - WhatsApp Welcome Message Generator</title>
        <link rel="icon" href="favicon.svg" type="image/svg+xml" />

        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />
        <meta
          name="description"
          content="Generate personalized WhatsApp Business greeting messages with HaffiCal. Streamline customer interactions, save time, and enhance your brand-customer relationships."
        />
        <meta
          name="keywords"
          content="HaffiCal, WhatsApp Welcome Message, WhatsApp Business Greeting, Automated Messages, WhatsApp Marketing, 21 WhatsApp Business greeting, Greeting Message, Customer Engagement, WhatsApp Business Tool, How to set WhatsApp Welcome Message, WhatsApp Business Welcome Message Generator"
        />

        <meta property="og:title" content="HaffiCal for WhatsApp Business" />
        <meta
          property="og:description"
          content="Generate personalized WhatsApp Business greeting messages with HaffiCal. Streamline customer interactions, save time, and enhance your brand-customer relationships."
        />
        <meta property="og:url" content="https://haffi.one" />
        <meta property="og:site_name" content="HaffiCal" />
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
          content="Generate personalized WhatsApp Business greeting messages with HaffiCal. Streamline customer interactions, save time, and enhance your brand-customer relationships."
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="HaffiCal - WhatsApp Welcome Message Generator"
        />
        <meta
          name="twitter:description"
          content="Generate personalized WhatsApp Business greeting messages with HaffiCal. Streamline customer interactions, save time, and enhance your brand-customer relationships."
        />
        <meta
          name="twitter:image"
          content="https://haffi.one/social-share.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="Generate personalized WhatsApp Business greeting messages with HaffiCal. Streamline customer interactions, save time, and enhance your brand-customer relationships."
        />
      </head>
      <body>
        <TrackingProvider />
        <Nav />
        <main className="max-w-[1100px] mx-auto px-3">{children}</main>
        <footer className="w-screen bg-slate-200 py-[60px]">
          <div className="max-w-[820px] mx-auto">
            <section>
              <p className="text-gray-dark-2 text-center opacity-80">
                &copy; HAFFI.one 2024
              </p>
            </section>
          </div>
        </footer>
      </body>
    </html>
  );
}
