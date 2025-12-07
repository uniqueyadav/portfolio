import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Amit Yadav - portfolio",
  description:
    "Full-Stack Developer - Creating innovative digital solutions with modern web technologies",
  keywords:
    "Amit Yadav, Full Stack Developer, Software Engineer, React, Next.js, Express.js, Node.js, JavaScript, Web Development",
  authors: [{ name: "Amit Yadav" }],
  creator: "Amit Yadav",
  openGraph: {
    title: "Amit Yadav - Full-Stack Developer",
    description:
      "Full-Stack Developer - Creating innovative digital solutions with modern web technologies",
    url: "https://surajpandit.vercel.app/", 
    siteName: "Amit Yadav Portfolio",
    images: [
      {
        url: "/profile-photo.png",
        width: 1200,
        height: 630,
        alt: "Amit Yadav - Full-Stack Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amit Yadav - Full-Stack Developer",
    description:
      "Full-Stack Developer - Creating innovative digital solutions with modern web technologies",
    images: ["/profile-photo.png"],
  },
  icons: {
    icon: "/profile-photo.png",
    shortcut: "/profile-photo.png",
    apple: "/profile-photo.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ff6b35" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="apple-mobile-web-app-title" content="Amit Yadav" />
        <link rel="canonical" href="https://your-domain.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="overflow-x-hidden">
          {children}
        </main>
      </body>
    </html>
  );
}