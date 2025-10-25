import "./globals.css";

export const metadata = {
  title: "Vilora Tech Education | AI, Software Training , Multimedia",
  description: "Vilora Tech offers courses in AI, Photoshop, Accounts, Spoken English, and more.",
  keywords: ["AI training", "Photoshop course", "Accounts classes", "Spoken English"],
  openGraph: {
    title: "Vilora Tech Education",
    description: "Join Vilora Tech for industry-leading courses in AI, Multimedia, and Software.",
    url: "https://viloratecheducation.com",
    siteName: "Vilora Tech Education",
    images: [
      {
        url: "/images/og-image.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
