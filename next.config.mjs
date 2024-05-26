/** @type {import('next').NextConfig} */

const nextConfig = {
	basePath: "/stream-sync",
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
