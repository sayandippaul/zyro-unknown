import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Tech Nature - Green Innovation for a Sustainable Future",
  description: "From energy-saving devices to green architecture, we're dedicated to preserving the planet while enhancing everyday life. Join us in building a harmonious balance between nature and technology.",
  keywords: ["green tech", "sustainable", "eco-friendly", "nature", "technology", "innovation"],
  authors: [{ name: "Tech Nature" }],
  openGraph: {
    title: "Tech Nature - Green Innovation",
    description: "Pioneering green tech for eco-conscious living",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
