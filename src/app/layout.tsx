"use client";

import "./globals.css";
import { GeistSans } from "geist/font/sans";
import { ThemeProvider } from "@/components/theme-provider";
import SiteHeader from "@/components/SiteHeader";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { cn } from "@/lib/utils";

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	const queryClient = new QueryClient({
		defaultOptions: { queries: { retry: 3, retryDelay: 1000 } }
	});

	return (
		<QueryClientProvider client={queryClient}>
			<html
				lang="en"
				className={GeistSans.className}
				suppressHydrationWarning
			>
				<body
					className={cn(
						"min-h-screen bg-background font-sans antialiased"
					)}
				>
					<ThemeProvider
						attribute="class"
						defaultTheme="dark"
						enableSystem
						disableTransitionOnChange
					>
						<div className="flex min-h-screen flex-col px-2 ">
							<SiteHeader />
							<main className="flex m-2 px-2 md:m-10 w-full max-w-5xl self-center">
								{children}
							</main>
						</div>
					</ThemeProvider>
				</body>
			</html>
		</QueryClientProvider>
	);
}
