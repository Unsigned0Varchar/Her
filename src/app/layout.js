import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricoloage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "US!",
  description: "A heartfelt digital journey capturing our memories, promises, and moments that will last forever.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bricoloage.className} bg-rose-100 antialiased select-none`}
      >
        <header className="fixed top-2 w-full text-center text-[10px] md:text-sm text-rose-500 font-medium z-50 px-4 opacity-80 pointer-events-none">
          Software engineer hone ka kya hi matlab if i dont code a cute website a gift for my Bun... Hehe Love you
        </header>
        {children}
        <footer className="fixed bottom-2 w-full text-center text-sm text-rose-600 font-semibold pointer-events-none z-50 opacity-90">
          Copyright 2026, Abhikraj
        </footer>

      </body>
    </html>
  );
}
