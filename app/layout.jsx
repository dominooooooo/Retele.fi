import NavbarMenu from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import { League_Spartan } from 'next/font/google';
import { ProductProvider } from '@/contexts/ProductContext';

const leaguespartan = League_Spartan({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: "RETELE — huolla & osta puhelin",
  description: "Tingi huomattavasti hinnassa, mutta älä laadussa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fi" style={{ height: "100%" }} className={leaguespartan.className}>
      <head>
        <meta name="theme-color" content="#FFFFFF"/>
      </head>
      <body style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <NavbarMenu />
        <ProductProvider>
          <main style={{ flex: "1 0 auto" }}>
            {children}
          </main>
        </ProductProvider>
        <Footer />
      </body>
    </html>
  );
}
