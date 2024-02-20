/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {  hostname: 'seeklogo.com' },
            {  hostname: 'civi.uxper.co' },
            {  hostname: 'fiverr-res.cloudinary.com' },
        ],
    },
};

export default nextConfig;
