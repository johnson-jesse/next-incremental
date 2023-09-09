/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return [
          {
            source: '/apis/:path*',
            destination: `${process.env.NEXT_PUBLIC_API}/:path*`,
          },
        ]
      },
}

module.exports = nextConfig
