import type { Metadata } from 'next';
import Script from 'next/script';
import '../index.css';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Code Visionary Services",
  alternateName: "CVS",
  url: "https://codevisionaryservices.com/",
  logo: "https://codevisionaryservices.com/assets/cvs-logo-navbar-BoQSa6BQ.png",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91 8637515632",
    contactType: "customer service",
    areaServed: "IN",
    availableLanguage: "en",
  },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61579748491813",
    "https://www.instagram.com/codevisionaryservices/",
    "https://www.linkedin.com/company/code-visionary-services/posts/?feedView=all",
  ],
};

export const metadata: Metadata = {
  title: {
    default: 'Hire the Best Developers | Code Visionary Services',
    template: '%s | Code Visionary Services',
  },
  description: 'Hire dedicated developers for Python, React, and app development. Code Visionary Services delivers expert dev talent, AI insights & growth funnels.',
  metadataBase: new URL('https://codevisionaryservices.com'),
  openGraph: {
    type: 'website',
    siteName: 'Code Visionary Services',
    images: [{ url: '/og-image.png' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  verification: {
    google: '3zb_ud3rU5BxqcsCZr9B6k9E8fGkxmtwnDPQsNkykYw',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect for Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Montserrat font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Favicon */}
        <link rel="icon" type="image/png" href="/cvs-logo-short.png" />
        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-87YPDFRZQR"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-87YPDFRZQR');
          `}
        </Script>
        {/* Meta Pixel */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s){
              if(f.fbq)return;
              n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)
            }(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
            fbq('init','891464866773373');
            fbq('track','PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=891464866773373&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>

        <div className="w-full min-h-screen bg-white overflow-x-hidden">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
