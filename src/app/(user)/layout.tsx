import type { Metadata } from "next";
import localFont from "next/font/local";
import "../globals.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SideBar from "../../components/SideBar";
import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";
import logo from "@/assets/pxpLogo.png"

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PXP",
  description: "Courses website",
};
 
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Layout>
          <Header />
          {children}
          {/* <SideBar /> */}
          <Footer />
          <Toaster 
            position="bottom-right"
            toastOptions={{
              style: {
                background: "#000000",
                color: "#ffffff",
              }
            }}
          />
        </Layout>
      </body>
    </html>
  );
}
