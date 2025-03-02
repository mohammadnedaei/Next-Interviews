import type { Metadata } from "next";
import "@/styles/globals.scss";
import StoreProvider from "@/providers/redux-provider";
import {ThemeProvider} from "@/providers/theme-provider";
export const metadata: Metadata = {
    title: "Next Interviews",
    description: "fully customizable interview platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
      <StoreProvider>
          <ThemeProvider>{children}</ThemeProvider>
      </StoreProvider>
      </body>
    </html>
  );
}
