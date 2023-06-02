import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>Ozan Ocak</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Great+Vibes&family=Kalam:wght@300&family=Poppins:ital,wght@1,300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className={inter.className}>
        <div
          className="w-full h-screen font-bodyFont bg-black text-white 
    overflow-x-hidden no-scrollbar overflow-y-scroll md:scrollbar scrollbar-track-gray-700/20 scrollbar-thumb-gray-500/60"
        >
          <Navbar />
          <div className="w-full h-[88vh] xl:flex items-center gap-20 justify-between bg-black">
            <div className=" xl:inline-flex w-12 md:w-32 h-full fixed left-0 bottom-0">
              <LeftSide />
            </div>
            <div className="h-[88vh] w-[94%] md:w-[80%] mx-auto p-4">
              {children}
            </div>
            <div className="hidden md:inline-flex w-32 fixed right-0 bottom-0">
              <RightSide />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
