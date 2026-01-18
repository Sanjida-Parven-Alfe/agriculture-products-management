import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppProvider } from "@/context/providers"; 
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AgriMart",
  description: "Your trusted agriculture partner",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white dark:bg-dark-bg transition-colors duration-300`}>
        <AppProvider>
          <NavBar />
          <Toaster position="top-center" />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer/>
        </AppProvider>
      </body>
    </html>
  );
}