import "./globals.css"
// import "../../node_modules/highlight.js/styles"
import "../node_modules/highlight.js/styles/stackoverflow-light.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

export const dynamic = "force-dynamic"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "Tailwind Penguin",
	description: "Components and Asset and Reference Library - Combined library of Tailwind focused assets and code-bites",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}
