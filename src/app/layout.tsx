import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Lalithya Raavi",
  description: "Systems Design Engineering student, UX/product designer, and frontend developer.",
  openGraph: {
    title: "Lalithya Raavi",
    description: "Systems Design Engineering student at UWaterloo. Designing human-centred things.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
