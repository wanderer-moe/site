// import MillionLint from "@million/lint";
// import million from "million/compiler";
import { withAxiom } from "next-axiom";

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "cdn.wanderer.moe",
                port: "",
            },
            {
                protocol: "https",
                hostname: "cdn.discordapp.com",
                port: "",
            },
        ],
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
};

// export default withAxiom(
//     million.next(
//         MillionLint.next({
//             rsc: true,
//         })(nextConfig),
//         {
//             auto: true,
//             rsc: true,
//         },
//     ),
// );

export default withAxiom(nextConfig);
