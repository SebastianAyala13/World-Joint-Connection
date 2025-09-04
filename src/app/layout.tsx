import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "World Joint Connection - Contact Center & BPO Premium",
  description: "Ventas, atención y datos en tiempo real. Operación certificada 24/7 orientada a conversión. Servicios de contact center y BPO de alta calidad.",
  keywords: "contact center, BPO, call center, ventas telefónicas, atención al cliente, telemercadeo, soporte técnico",
  authors: [{ name: "World Joint Connection" }],
  creator: "World Joint Connection",
  publisher: "World Joint Connection",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://worldjointconnection.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "World Joint Connection - Contact Center & BPO Premium",
    description: "Ventas, atención y datos en tiempo real. Operación certificada 24/7 orientada a conversión.",
    url: "https://worldjointconnection.com",
    siteName: "World Joint Connection",
    images: [
      {
        url: "/og-cover.jpg",
        width: 1200,
        height: 630,
        alt: "World Joint Connection - Contact Center & BPO Premium",
      },
    ],
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "World Joint Connection - Contact Center & BPO Premium",
    description: "Ventas, atención y datos en tiempo real. Operación certificada 24/7 orientada a conversión.",
    images: ["/og-cover.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${manrope.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "World Joint Connection",
              url: "https://worldjointconnection.com",
              logo: "https://worldjointconnection.com/logo.png",
              description: "Contact Center y BPO premium especializado en ventas, atención al cliente y gestión de datos en tiempo real.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bogotá",
                addressCountry: "CO",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+57-316-026-8752",
                contactType: "customer service",
                availableLanguage: ["Spanish", "English"],
              },
              sameAs: [
                "https://wa.me/573160268752",
              ],
            }),
          }}
        />
      </head>
      <body className={`${manrope.className} antialiased`}>
        <a href="#main-content" className="skip-link">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
