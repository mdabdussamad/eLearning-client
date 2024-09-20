'use client'
import "./globals.css";
import { Poppins, Josefin_Sans } from "next/font/google";
import { ThemeProvider } from "./utils/theme-provider";  
import { Toaster } from "react-hot-toast";
import { Providers } from "./Provider";
import { SessionProvider } from "next-auth/react";
import Loader from "./components/Loader/Loader";
import React, { FC } from 'react';
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";

// Font imports with correct variable usage
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Poppins",
});

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-Josefin",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${josefin.variable} bg-white dark:bg-gray-900 transition-colors duration-300`} // Tailwind dark mode
        
        // className={`${poppins.variable} ${josefin.variable} !bg-white bg-no-repeat dark:bg-gradient-to-be dark:from-gray-900 dark:to-black transition-colors duration-300`}
        >
        <Providers>
          <SessionProvider>
            {/* ThemeProvider to handle dark/light mode with "class" attribute */}
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <Custom>
                {children}
              </Custom>
              <Toaster position="top-center" reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}

// Custom loader component
const Custom: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});
  return (
    <>
      {isLoading ? <Loader /> : <>{children}</>}
    </>
  );
};
