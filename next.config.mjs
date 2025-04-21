/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // output: "export",
  images: {
    unoptimized: true,
  },

  async rewrites() {
    return [
      {
        source: "/api/(.*)",
        destination: "/api/$1",
      },
    ];
  },
};

export default nextConfig;
