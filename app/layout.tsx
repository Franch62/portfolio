import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Francis Dev",
  description: "Software Developer",
  icons: {
    icon: "/star-rock.svg", // <-- define aqui o ícone da aba
    shortcut: "/star-rock.svg",
    apple: "/star-rock.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${montserrat.variable} antialiased bg-zinc-950 text-zinc-100`}
      >
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
