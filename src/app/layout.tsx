import Navbar from "@/Components/Navbar";
import "./globals.css";
import Footer from "@/Components/Footer";
import { MyProvider } from "@/Components/Context";


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
        <MyProvider>
          <Navbar />
          {children}
          <Footer />
        </MyProvider>
      </body>
    </html >
  );
}
