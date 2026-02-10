import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-cinzel"
});

export const metadata: Metadata = {
  title: "Sush!l RK | Portfolio",
  description: "Secure Full-Stack Developer Portfolio",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${cinzel.variable} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
