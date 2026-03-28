import type { Metadata } from "next";
import { Playfair_Display, Lora, Great_Vibes } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Adrielle & Cézar — 25 de Abril de 2026",
  description:
    "Você está convidado(a) para celebrar o casamento de Adrielle e Cézar. 25 de abril de 2026, às 17h30, em Posse – GO.",
  openGraph: {
    title: "Adrielle & Cézar — Convite de Casamento",
    description:
      "Celebre conosco esse momento único! 25 de abril de 2026, Posse – GO.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${lora.variable} ${greatVibes.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-lora)] transition-colors duration-300">
        {children}
      </body>
    </html>
  );
}
