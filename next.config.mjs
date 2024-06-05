import MillionLint from "@million/lint";
import million from "million/compiler";
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
        ],
    },
};

export default withAxiom(
    million.next(
        MillionLint.next({
            rsc: true,
        })(nextConfig),
        {
            auto: true,
            rsc: true,
        },
    ),
);
