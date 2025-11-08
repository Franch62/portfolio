import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // pesos que tu quer usar
  variable: "--font-montserrat", // opcional, pra usar com Tailwind
});

export const metadata: Metadata = {
  title: "Francis Dev",
  description: "Software Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} ${montserrat.variable} antialiased`}
      >
      <Header />
        {children}
      </body>
    </html>
  );
}
