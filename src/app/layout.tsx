import { Inter } from "next/font/google";
import StoreProvider from "@/store/StoreProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <link rel="icon" href="/images/logo.png" sizes="any" /> */}
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
