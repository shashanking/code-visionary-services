"use client";

import Script from "next/script";

export default function TawkChat() {
  return (
    <>
      {/* DNS + TLS warm-up */}
      <link rel="dns-prefetch" href="https://embed.tawk.to" />
      <link rel="preconnect" href="https://embed.tawk.to" crossOrigin="" />

      {/* Load Tawk as early as possible */}
      <Script
        id="tawk-chat"
        strategy="afterInteractive"
        src="https://embed.tawk.to/6968c557c03c961980f0097f/1jf0k5nj7"
      />
    </>
  );
}
