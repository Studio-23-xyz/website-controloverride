import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import favicon from './favicon.png';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Control:Override - Studio 23",
  description: "Control override is a game developed by the Studio-23",
  icons: favicon.src
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
