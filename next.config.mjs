/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {  hostname: 'seeklogo.com' },
            {  hostname: 'cdn.discordapp.com' },
            {  hostname: 'civi.uxper.co' },
            {  hostname: 'fiverr-res.cloudinary.com' },
            {  hostname: 't4.ftcdn.net' },
            {  hostname: 'img.freepik.com' },
        ],
    },
};

export default nextConfig;
