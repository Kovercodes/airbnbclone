import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Modal from "./components/modals/Modal";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Find your perfect holiday house",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <Modal actionLabel="Ok" isOpen title="Hello world" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
