import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import "./globals.css";

export const metadata = {
  title: "Arthur Laroya",
  description: "arthur laroyas new portfolio",
  icons: {
    icon: "/logo-colour.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${GeistSans.variable} ${GeistMono.variable} subpixel-antialiased`}
    >
      <body className="sans">{children}</body>
    </html>
  );
}
