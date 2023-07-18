// import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ['@prisma/client'],
    },
}

// export default withContentlayer(nextConfig)
module.exports = nextConfig
