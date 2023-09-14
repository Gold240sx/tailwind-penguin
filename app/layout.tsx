import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

export const dynamic = "force-dynamic"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Components Library",
	description: "Components and form library for React and Next.js",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
