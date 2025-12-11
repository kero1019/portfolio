import Navbar from "@/Components/Navbar";
import "./globals.css";
import Footer from "@/Components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
