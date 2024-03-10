/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "leurys93.github.io",
        port: "",
        pathname: "/Letras-YLPDR-Img/**",
      },
    ],
  },
};

module.exports = nextConfig;
