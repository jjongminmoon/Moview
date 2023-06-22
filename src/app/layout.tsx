import Navbar from "@/components/Navbar";
import "./globals.css";
import { Open_Sans } from "next/font/google";
import SWRConfigContext from "@/context/SWRConfigContext";
import Footer from "@/components/Footer";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.className}>
      <body>
        <header>
          <Navbar />
        </header>
        <SWRConfigContext>{children}</SWRConfigContext>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}