import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sarkar Plumbing Works | Best Plumbing in Malda",
  description: "Modern and reliable plumbing services for societies and buildings in Malda, West Bengal. Quality plumbing works you can trust.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <a href="#main-content" className="skipLink">Skip to content</a>
        <main id="main-content" role="main">
          {children}
        </main>
      </body>
    </html>
  );
}
