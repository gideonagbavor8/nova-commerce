import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import CartSidebar from "./components/CartSidebar";
import Footer from "./components/Footer";
import { Providers } from "./Providers";

export const metadata: Metadata = {
  title: "NOVA COMMERCE | Premium Essentials",
  description: "Curated collection of premium essentials for the modern connoisseur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Navbar />
          <CartSidebar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
