import type { Metadata } from "next";
import "@/styles/globals.scss";
import StoreProvider from "@/providers/redux-provider";
import {ThemeProvider} from "@/providers/theme-provider";
import ToastProvider from "@/providers/toast-provider";
import { SpeedInsights } from "@vercel/speed-insights/next"

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
      <body>
      <ToastProvider />
      <SpeedInsights />
      <StoreProvider>
          <ThemeProvider>{children}</ThemeProvider>
      </StoreProvider>
      </body>
    </html>
  );
}
