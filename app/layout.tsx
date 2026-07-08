import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Styled By Cellas | VIP Consultation Portal",
  description: "Exquisite Bridal & Statement Asoebi. Serving royalty worldwide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
