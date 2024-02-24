/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
export default {
  // Other configurations...
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      // Add other pages as needed
    };
  },
};
