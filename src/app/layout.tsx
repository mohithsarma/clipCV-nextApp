import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ClipCV App",
  description: "Easily manage and copy your job application information",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="bg-blue-600 text-white p-4">
          <h1 className="text-2xl font-bold">ClipCV</h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="bg-gray-200 p-4 text-center">
          <p>&copy; 2024 ClipCV App</p>
        </footer>
      </body>
    </html>
  );
}