/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "avatars.githubusercontent.com",
            },
        ],
    },
    experimental: {
        serverActions: true,
    },
    webpack: (config, { dev }) => {
        if (dev) {
            config.watchOptions = {
                poll: 1000, // Poll every second for changes to bypass WSL watch constraints
                aggregateTimeout: 300,
                ignored: [
                    "**/System Volume Information/**",
                    "**/.git/**",
                    "**/node_modules/**"
                ],
            };
        }
        return config;
    },
};

export default nextConfig;
