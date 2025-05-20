import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "./providers";

const JetBrainsMono = JetBrains_Mono({ subsets: ["latin"] , weight: ['100','200', '300', '400', '500', '600', '700', '800'],
  variable: '--font-jetbrainsMono'
});

export const metadata = {
  title: "Sean Lee",
  description: "the coolest and raddest dude",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={JetBrainsMono.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
