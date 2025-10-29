import "../../../public/css/globals.css";
import "../../../public/font/stylesheet.css"
import Header from "./Header/page";
import Footer from "./Footer/page";
import TopButton from "./components/TopButton"
import { SpeedInsights } from '@vercel/speed-insights/next';

export default function RootLayout({ children }) {
  return (
    <html lang="de">     
      <body className="overflow-x-hidden">
        <Header />
        <main>
          {children}
          <SpeedInsights />
          </main>
        <TopButton />
        <Footer />
      </body>
    </html>
  );
}

