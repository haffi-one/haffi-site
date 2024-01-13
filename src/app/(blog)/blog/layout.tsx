import { TrackingProvider } from "@/lib/tracking";
import "../../globals.css";
import "bootstrap-icons/font/bootstrap-icons.min.css";
import Nav from "@/components/Nav";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "HaffiCal Blog",
  icons: {
    icon: "favicon.svg",
  },
  alternates: { canonical: "https://haffical.com/blog" },
  viewport: "width=device-width, initial-scale=1, maximum-scale=5",
  description:
    "Generate personalized WhatsApp Business greeting messages with HaffiCal. Streamline customer interactions, save time, and enhance your brand-customer relationships.",
  keywords: [
    "HaffiCal",
    "Bot",
    "whatsapp business",
    "WhatsApp Bot",
    "WhatsApp bot free",
    "WhatsApp",
    "Create whatsapp bot",
    "Whatsapp chat bot",
    "WhatsApp Marketing",
  ],
  openGraph: {
    title: "HaffiCal Blog",
    description:
      "Generate personalized WhatsApp Business greeting messages with HaffiCal. Streamline customer interactions, save time, and enhance your brand-customer relationships.",
    url: "https://haffical.com",
    siteName: "HaffiCal",
    images: [
      {
        url: "https://haffical.com/social-share.jpg",
        secureUrl: "https://haffical.com/social-share.jpg",
        width: 1080,
        height: 566,
        alt: "Generate personalized WhatsApp Business greeting messages with HaffiCal. Streamline customer interactions, save time, and enhance your brand-customer relationships.",
      },
    ],
    type: "article",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "HaffiCal Blog",
    description:
      "Generate personalized WhatsApp Business greeting messages with HaffiCal. Streamline customer interactions, save time, and enhance your brand-customer relationships.",
    images: ["https://haffical.com/social-share.jpg"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
