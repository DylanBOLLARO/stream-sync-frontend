/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
	assetPrefix: isProd ? "/stream-sync" : "",
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
