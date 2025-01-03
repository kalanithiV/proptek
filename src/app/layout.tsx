import ThemeRegistry from "@/helper/themes/ThemeRegistry";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css";
import "../styles/media.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "200", "300", "500", "600", "700", "800", "900"],
  variable: "--font-Poppins",

});

export const metadata: Metadata = {
  title: "Proptek",
  description: "Proptek",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={`${poppins.variable}`}>{children}</body>
      </ThemeRegistry>
    </html>
  );
}
