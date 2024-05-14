import NavbarMenu from "@/components/navbar";
import Footer from "@/components/footer";
import "@/styles/globals.css"
import TopMarguee from "@/components/Marquee";
import { League_Spartan } from 'next/font/google'

const leaguespartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "RETELE — huolla & osta puhelin",
  description: "Tingi huomattavasti hinnassa mutta älä laadussa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fi" style={{ height: "100%" }} className={leaguespartan.className}>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <NavbarMenu />
        <main style={{ flex: "1 0 auto" }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}