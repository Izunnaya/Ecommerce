import { Navbar } from "./components";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-serif">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
