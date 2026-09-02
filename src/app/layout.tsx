import Navbar from "@/Components/Navbar";
import "./globals.css";
import Footer from "@/Components/Footer";
import { MyProvider } from "@/Components/Context";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kerolos Fayez | Frontend Developer",
  description:
    "Portfolio of Kerolos Fayez, a frontend developer building modern, responsive, user-focused web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <MyProvider>
          <Navbar />
          {children}
          <Footer />
        </MyProvider>
      </body>
    </html >
  );
}
