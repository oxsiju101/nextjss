import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "My Portfolio",
  description:
    "Portfolio website built with Next.js App Router and Tailwind CSS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        <Navbar />
        <main className="p-8">{children}</main>
      </body>
    </html>
  );
}
