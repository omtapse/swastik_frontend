import Sidebar from '../Components/Sidebar'
import './globals.css'
import { Inter } from 'next/font/google'
import "@/styles/globals.css";
import "@/styles/Template Styles/css/style.css";
import "@/styles/Template Styles/css/uikit.css";
import "@/styles/Template Styles/css/style-preset.css";
import "@/styles/Template Styles/css/landing.css";
import "@/styles/Template Styles/css/fonts/material.css";
import "@/styles/Template Styles/css/fonts/inter/inter.css";
import "@/styles/Template Styles/css/fonts/tabler-icons.min.css";
import "@/styles/Template Styles/css/fonts/feather.css";
import "@/styles/Template Styles/css/fonts/inter/inter.css";
import "@/styles/Template Styles/css/fonts/fontawesome.css";
import Script from 'next/script';


import 'react-quill/dist/quill.snow.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Swastik Nyati-group',
  description: '',
}

// 'use client'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Script  src="/assets/js/plugins/choices.min.js"></Script>
    </html>
  )
}
