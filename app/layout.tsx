import type { Metadata } from "next";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Ozark Sky Solutions | Web Apps, Automation & AI Solutions",
  description:
    "Custom web applications, backend systems, and AI-powered automation tools that help businesses reduce manual work and operate more efficiently.",
  keywords: [
    "custom web development",
    "Next.js developer",
    "React developer",
    "business automation",
    "AI automation",
    "AI tools for business",
    "software consultant",
  ],
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
    </html>
  );
}
