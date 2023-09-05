"use client";
import Header from "./components/Header";
import "./styles/globals.scss";
import { Open_Sans } from "next/font/google";
import { useEffect } from "react";

const open_sans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  return (
    <html lang="en">
      <body className={open_sans.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
