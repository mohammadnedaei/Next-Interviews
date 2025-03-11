import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'avatar.iran.liara.run',
                pathname: '/public/*',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
                pathname: '/*'
            }
        ],
    },
};

export default nextConfig;
