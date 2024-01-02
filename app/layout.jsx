import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

export const metadata = {
  title: "Project A",
  description: "arthur laroyas new portfolio",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
