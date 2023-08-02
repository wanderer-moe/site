// import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ['cdn.wanderer.moe', 'files.wanderer.moe'],
    },
}

// export default withContentlayer(nextConfig)
module.exports = nextConfig
