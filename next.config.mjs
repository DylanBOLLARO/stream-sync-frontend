/** @type {import('next').NextConfig} */
const nextConfig = {
	assetPrefix: "/stream-sync",
	images: {
		unoptimized: true,
		remotePatterns: [
			{
				hostname: "localhost"
			}
		]
	}
};

export default nextConfig;
