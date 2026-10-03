/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
        return {
            // Run before public files so every open reaches the Convex counter.
            beforeFiles: [{
                source: '/zavod-tajnicka.pdf',
                destination: 'https://festive-mandrill-700.eu-west-1.convex.site/zavod-tajnicka.pdf',
            }],
            afterFiles: [],
            fallback: [],
        };
    },
    images: {
        // The Talsec, Beehive, Draxard and Weelet project images are local SVGs; without this
        // the optimizer rejects them with "image type is not allowed" and they render broken.
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
};

export default nextConfig;
