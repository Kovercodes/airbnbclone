import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import RegisterModal from "./components/modals/registerModal";
import Navbar from "./components/Navbar/Navbar";
import "./globals.css";
import ToasterProvider from "./providers/ToasterProvider";

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
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
