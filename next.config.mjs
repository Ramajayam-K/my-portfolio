/** @type {import('next').NextConfig} */

const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    basePath: '/my-portfolio',
    trailingSlash: true,
    devIndicators: {
        allowedDevOrigins: ['http://192.168.0.106:3000'], // Add the IP or domain here
    },
};

export default nextConfig;
