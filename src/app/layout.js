import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Provider from "./Provider";
import Navbar from "@/components/Navbar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMBD-clone",
  description: "This is IMDB cloned website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
        <Header />
        {/* <Navbar/> */}


        {children}
        </Provider>
       </body>
    </html>
  );
}
