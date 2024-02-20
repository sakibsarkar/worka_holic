/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'seeklogo.com',
            },
            {
                hostname: 'civi.uxper.co',
            },
        ],
    },
};

export default nextConfig;
