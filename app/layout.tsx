import type { Metadata } from "next";
import { Montserrat, Nunito, Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { CartProvider } from "@/contexts/CartContext";
import { OrderProvider } from "@/contexts/OrderContext";
import { Toaster as Sonner } from "@/components/ui/sonner";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UniMentor",
  description: "Plataforma de Mentoria Profissional",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`light ${manrope.variable}`}>
      <body className="flex flex-col min-h-screen w-screen overflow-x-hidden font-[var(--font-manrope)]">
        <OrderProvider>
          <CartProvider>
            <Navbar />
            <div className="flex-grow">{children}</div>
            <Footer />
          </CartProvider>
          <Sonner richColors />
        </OrderProvider>
      </body>
    </html>
  );
}
