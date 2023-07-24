import "./globals.css";
import Navbar from "./components/Navbar";
import Credit from "./components/Credit";

export const metadata = {
  title: "Wiki Lookup",
  description: "Next.js v13 app that fetches search results from wiki API.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-800">
        <Navbar />
        <div className="flex justify-center">
          <Credit />
        </div>
        {children}
      </body>
    </html>
  );
}
