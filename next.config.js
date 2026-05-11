/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["headless.404hosting.ro", "images.unsplash.com", "secure.gravatar.com", "cdn.prod.website-files.com"],
    // Adaugă domeniul WordPress-ului tău aici
    // pentru ca next/image să poată optimiza imaginile din WP
    remotePatterns: [
      {
        protocol: "https",
        hostname: "headless.404hosting.ro",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
        pathname: "/**",
      },
    ],
  },
  // Revalidare automată la fiecare 60 secunde (ISR)
  // Poți schimba per pagină dacă vrei
};

module.exports = nextConfig;
