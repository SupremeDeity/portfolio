/** @type {import('next').NextConfig} */
const nextConfig = {
  agentRules: false,
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
