import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plus_jakarta_sans = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Muhammad Mohsin | Portfolio",
  description: "Porfolio Website",
  metadataBase: new URL("https://supdeity.com/"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en">
      <body className={plus_jakarta_sans.className}>{children}</body>
    </html>
  );
}
