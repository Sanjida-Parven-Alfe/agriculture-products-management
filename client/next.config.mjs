/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "m.media-amazon.com", // এই লাইনটি নতুন যোগ করা হয়েছে
      },
      {
        protocol: "https",
        hostname: "i.ibb.co", // ভবিষ্যতে imgbb ব্যবহার করলে কাজে লাগবে (অপশনাল)
      },
    ],
  },
};

export default nextConfig;