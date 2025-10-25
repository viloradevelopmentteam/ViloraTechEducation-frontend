import "./globals.css";

export const metadata = {
  title: "Vilora Tech Education | AI, Software & Multimedia Training Institute",
  description:
    "Vilora Tech Education offers expert-led training in Artificial Intelligence, Software Development, Multimedia, Photoshop, Accounts, and Spoken English. Learn job-ready skills with hands-on courses in technology and creativity.",
  keywords: [
    // Core Education & Training Keywords
    "AI training institute",
    "Artificial Intelligence course",
    "Machine Learning training",
    "Software development course",
    "Full Stack Developer course",
    "Front-end development training",
    "Back-end development training",
    "Python course",
    "Python full stack course",
    "Java course",
    "Advanced Java training",
    "React JS course",
    "React developer course",
    "Web development institute",
    "JavaScript training",
    "HTML CSS JavaScript course",
    "Node.js course",
    "Database and SQL training",

    // Multimedia & Creative Skills
    "Photoshop classes",
    "Graphic design course",
    "Multimedia institute",
    "Video editing training",
    "Animation and VFX course",
    "UI UX design course",

    // Business & Language Skills
    "Accounts training",
    "Tally course",
    "MS Office course",
    "Spoken English course",
    "English speaking classes",
    "Communication skills training",
    "Personality development classes",

    // Career & Local Keywords
    "Job-ready courses",
    "Tech education India",
    "Best training institute in India",
    "Career-oriented courses",
    "IT training center",
    "Online tech courses",
    "Professional certification courses",
  ],
  authors: [{ name: "Vilora Tech Education", url: "https://viloratecheducation.com" }],
  metadataBase: new URL("https://viloratecheducation.com"),
  openGraph: {
    title: "Vilora Tech Education | Learn AI, Software, and Multimedia Skills",
    description:
      "Join Vilora Tech Education for professional training in AI, Multimedia, and Software. Get certified and boost your career with practical, industry-focused courses.",
    url: "https://viloratecheducation.com",
    siteName: "Vilora Tech Education",
    images: [
      {
        url: "../../public/assets/LOGO.jpg",
        width: 1200,
        height: 630,
        alt: "Vilora Tech Education – AI & Multimedia Courses",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vilora Tech Education | AI, Software & Multimedia Courses",
    description:
      "Enhance your career with Vilora Tech’s hands-on training in AI, Software, Multimedia, Accounts, and English.",
    images: ["../../public/assets/LOGO.jpg"],
    creator: "@ViloraTech",
  },
  alternates: {
    canonical: "https://viloratecheducation.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Favicons and manifest */}
        <link rel="apple-touch-icon" sizes="180x180" href="../../src/app/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="../../src/app/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="../../src/app/favicon-16x16.png" />
        <link rel="manifest" href="../../src/app/site.webmanifest" />

        {/* Schema.org JSON-LD for rich snippets */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "Vilora Tech Education",
              url: "https://viloratecheducation.com",
              logo: "https://viloratecheducation.com/images/og-image.png",
              description:
                "Vilora Tech Education provides hands-on training in AI, Software Development, Multimedia, Accounts, and Spoken English.",
              // sameAs: [
              //   "https://www.facebook.com/viloratech",
              //   "https://www.instagram.com/viloratech",
              //   "https://www.linkedin.com/company/viloratech",
              // ],

//               Address: 1st Floor, 62, Vallalar Salai Rd, Venkata Nagar, Puducherry, 605011
// Phone: 086103 91458
              address: {
                "@type": "PostalAddress",
                streetAddress: "1st Floor, 62, Vallalar Salai Rd, Venkata Nagar",
                addressLocality: "Puducherry",
                addressRegion: "Pondicherry,Puducherry",
                postalCode: "605011",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9944025562",
                contactType: "customer service",
                areaServed: "IN",
                availableLanguage: "English,Tamil",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
