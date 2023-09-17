"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const links = ["button", "checkbox", "input", "modal", "navbar", "radio", "select", "table", "toast", "toggle", "tooltip"]

export default function Home() {
	const [pickedInputType, setPickedInputType] = useState("")
	return (
		<main className="flex min-h-screen w-screen flex-col items-center justify-between p-10 h-fit">
			<div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm h-full">Home</div>
		</main>
	)
}
