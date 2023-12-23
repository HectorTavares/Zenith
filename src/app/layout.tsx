import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReduxStoreProvider } from "@/providers/reduxStoreProvider";

import "./default.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zenith Store",
  description: "Zenith Store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ReduxStoreProvider>
        <body className={inter.className}>{children}</body>
      </ReduxStoreProvider>
    </html>
  );
}
