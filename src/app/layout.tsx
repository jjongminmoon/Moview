import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthContext from "@/context/AuthContext";
import { Open_Sans } from "next/font/google";
import { SWRConfigContext } from "@/context/SWRConfigContext";

const sans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Moview",
    template: "Moview | %s"
  },
  description: "영화 정보 검색 및 리뷰 커뮤니티 Moview"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={sans.className}>
      <body className="min-w-[1280px]">
        <AuthContext>
          <header className="sticky top-0 z-10 ">
            <Navbar />
          </header>
          <main className="min-h-screen">
            <SWRConfigContext>{children}</SWRConfigContext>
          </main>
          <footer>
            <Footer />
          </footer>
        </AuthContext>
        <div id="portal" />
      </body>
    </html>
  );
}
