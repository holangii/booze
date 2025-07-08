import type { Metadata } from "next";
import "./globals.css";
import { CartProvider } from "../contexts/CartContext";

export const metadata: Metadata = {
  title: "Mashija",
  description: "Discover new drinks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
