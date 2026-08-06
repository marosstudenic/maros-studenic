/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        // The Talsec, Beehive, Draxard and Weelet project images are local SVGs; without this
        // the optimizer rejects them with "image type is not allowed" and they render broken.
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
};

export default nextConfig;
