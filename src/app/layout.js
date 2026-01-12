import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricoloage = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Our Future Together!",
  description: "A heartfelt digital journey capturing our memories, promises, and moments that will last forever.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bricoloage.className} bg-rose-100 antialiased select-none`}
      >
        {children}
      </body>
    </html>
  );
}
