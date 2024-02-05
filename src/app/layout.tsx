import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Pizza Golf Maandag",
  description: "Pizza Golf Maandag",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-blue-600"
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
