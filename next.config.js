// import { withContentlayer } from 'next-contentlayer'
// import million from 'million/compiler'

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    // experimental: {
    //     serverActions: true,
    // },
    images: {
        domains: ['cdn.wanderer.moe', 'files.wanderer.moe'],
    },
}

// const millionConfig = {
//     auto: true,
// }

// export default withContentlayer(nextConfig)
module.exports = nextConfig
