module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.hashnode.com',
        pathname: '/**',
      },
    ],
  },
}
export default nextConfig;