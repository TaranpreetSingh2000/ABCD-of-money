import "./globals.css";
import Header from "@/components/Header";
import TickerBanner from "@/components/Ticker";
import { Anek_Latin } from "next/font/google";
import FooterCard from "./FooterCard/page";

const anekLatin = Anek_Latin({ subsets: ["latin"] });

export const metadata = {
  title: "Aditya Birla Capital",
  description:
    "Aditya Birla Capital is a leading financial services provider offering a wide range of products and services, including asset management, life insurance, and wealth management, with a focus on delivering customer-centric financial solutions.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${anekLatin.className} antialiased`}>
        <TickerBanner />
        <Header />
        {children}
        <FooterCard />
      </body>
    </html>
  );
}
