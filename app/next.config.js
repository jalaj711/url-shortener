/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [{
      source: '/api/:path',
      destination: 'http://localhost:8000/api/:path'
    },{
      source: '/u/:path',
      destination: 'http://localhost:8000/u/:path'
    }]
  }
}

module.exports = nextConfig
