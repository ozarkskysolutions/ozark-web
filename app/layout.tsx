import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ozarkskysolutions.com"),
  title: {
    default:
      "Ozark Sky Solutions | Custom Web Apps, AI Automation & Business Software",
    template: "%s | Ozark Sky Solutions",
  },
  description:
    "Custom web application development, backend systems, internal tools, and AI automation for businesses that want to save time, improve workflows, and grow with better software.",
  keywords: [
    "custom web application development",
    "custom web development",
    "business software development",
    "small business web apps",
    "internal tools development",
    "AI workflow automation",
    "business process automation",
    "backend API development",
    "Next.js developer",
    "React developer",
    "business automation consultant",
    "AI automation services",
    "AI tools for business",
    "software consultant",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "Ozark Sky Solutions | Custom Web Apps, AI Automation & Business Software",
    description:
      "Modern web apps, internal tools, backend APIs, and AI-powered automation built to help businesses reduce manual work and operate with confidence.",
    url: "/",
    siteName: "Ozark Sky Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Ozark Sky Solutions | Custom Web Apps, AI Automation & Business Software",
    description:
      "Custom software, business automation, and AI workflow tools for companies that need better systems.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
      <Analytics />
      <SpeedInsights />
    </html>
  );
}
