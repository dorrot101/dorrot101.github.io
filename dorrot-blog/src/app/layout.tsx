import type { Metadata } from "next";
<<<<<<< Updated upstream
import { ColorSchemeScript, MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import "@mantine/core/styles.css";

export const metadata: Metadata = {
  title: "dorrot's blog",
  description: "The blog about web development and other things.",
=======
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dorrot Blog",
  description: "개발과 일상을 기록하는 블로그",
>>>>>>> Stashed changes
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
<<<<<<< Updated upstream
      <head>
        <ColorSchemeScript />
      </head>
      <body className="root-container">
        <MantineProvider>
          <main>{children}</main>
        </MantineProvider>
=======
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 dark:bg-gray-900`}
      >
        <nav className="bg-white dark:bg-gray-800 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <a href="/" className="text-xl font-bold text-gray-900 dark:text-white">
                  Dorrot Blog
                </a>
              </div>
            </div>
          </div>
        </nav>
        <main className="min-h-screen">
          {children}
        </main>
        <footer className="bg-white dark:bg-gray-800 mt-12">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm text-gray-500">
              © 2024 Dorrot Blog. Powered by Next.js & Notion.
            </p>
          </div>
        </footer>
>>>>>>> Stashed changes
      </body>
    </html>
  );
}
