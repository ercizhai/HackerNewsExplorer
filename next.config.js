/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/stories/new',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
