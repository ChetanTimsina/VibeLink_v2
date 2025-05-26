// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: [
    "http://10.2.32.164:3000", // 👈 your other device's IP on LAN
    "http://localhost:3000", // local dev still cool
  ],
};

export default nextConfig;
