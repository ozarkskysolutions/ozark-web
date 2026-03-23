import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ozark Sky Solutions",
  description:
    "Modern web applications, backend systems, and automation solutions for growing businesses.",
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
    </html>
  );
}