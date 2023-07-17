import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import React from "react";
import Footer from "../components/footer"
import Navbar from "@/components/Navbar";
import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
const font = Open_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Store',
  description: 'Store',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <ModalProvider/>
      <ToastProvider/>
      <Navbar/>
      {children}
      <Footer />
      </body>
    </html>
  )
}
