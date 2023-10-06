"use client"
import React, { useState, useRef, useEffect, Suspense } from "react"
import Highlight from "react-highlight"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BiCopy } from "react-icons/bi"
import Swal from "sweetalert2"
import { libraries } from "../context/libraries"
import Image from "next/image"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Badge, Rating } from "flowbite-react"
import { MoonLoader } from "react-spinners"
import { FaStar, FaRegStar } from "react-icons/fa"
import { Carousel } from "flowbite-react"
// import "flowbite-react"

// const LazyComponentView = React.lazy(() => import("./ComponentView"))

const ComponentViewWrapper = ({ item }: any) => {
	const { code, name, library, tags, importing } = item
	const [pickedTab, setPickedTab] = useState("sandbox")
	const [width, setWidth] = useState("100%")
	const [isFavorite, setIsFavorite] = useState(false)
	const resizer = useRef(null)
	const resizableDiv = useRef(null)

	const handleWidthChange = (e) => {
		setWidth(e.target.clientWidth)
	}

	const showAlert = () => {
		Swal.fire({
			position: "top-end",
			icon: "success",
			title: "The code has been copied to your clipboard.",
			showConfirmButton: false,
			toast: true,
			timer: 1800,
		})
	}

	const copyCode = () => {
		navigator.clipboard.writeText(code)
		showAlert()
	}

	const techLogo = (library: any) => {
		const matchedLib = libraries.find((lib) => lib.brand === library)
		return matchedLib ? matchedLib.logo : ""
	}

	const toggleFavorite = () => {
		setIsFavorite(!isFavorite)
		Swal.fire({
			icon: !isFavorite ? "success" : "error",
			imageAlt: "toast icon",
			position: "top-end",
			imageWidth: 50,
			imageHeight: 50,
			title: isFavorite ? ` ${name} has been removed from your favorites.` : `${name} has been added to your favorites.`,
			showConfirmButton: false,
			toast: true,
			timer: 1800,
		})
	}

	return (
		<div className="relative flex flex-col items-center h-fit">
			<div
				ref={resizableDiv}
				className="relative flex flex-col w-full mt-4 mb-2 border-2 shadow-inner codeView text-zinc-100 rounded-xl bg-white/20 item-center shadow-black/20 border-zinc-300 min-h-30 "
				// draggable="true"
				style={{
					width: `${width}px`,
					// border: "1px solid black",
					// overflow: "hidden",
					resize: "horizontal", // Enable horizontal resizing
				}}>
				<div className="absolute w-full bg-white rounded-t-xl h-14"></div>
				<div className="flex w-full justify-between absolute pl-4 pr-2 pt-2 z-[12]">
					<div className="flex items-center">
						<Tabs defaultValue="sandbox" className="space-y-4 rounded-lg">
							<TabsList>
								<TabsTrigger value="sandbox" onClick={() => setPickedTab("sandbox")} defaultChecked>
									Sandbox
								</TabsTrigger>
								<TabsTrigger value="code" onClick={() => setPickedTab("code")}>
									Code
								</TabsTrigger>
							</TabsList>
						</Tabs>
						<div className="ml-4 text-2xl text-teal-500 text-semibold">
							<p>{name}</p>
						</div>
					</div>
					<div className="flex lg:gap-2">
						<Rating onClick={toggleFavorite} size="lg" className="scale-[80%]  cursor-pointer">
							{isFavorite && <Rating.Star className="text-yellow-500" />}
							{!isFavorite && <Rating.Star filled={false} />}
						</Rating>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<div className="items-center w-10 -mt-1.5 bg-white rounded-md">
										<Image
											src={techLogo(library)}
											alt="tech logo"
											className="w-auto h-10 mx-auto rounded-md"
											width={40}
											height={20}
										/>
									</div>
								</TooltipTrigger>
								<TooltipContent>
									<p className="text-base">{library}</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
						<TooltipProvider>
							<Tooltip>
								<TooltipTrigger>
									<button onClick={copyCode} className="pl-2">
										<BiCopy className="text-4xl border-zinc-300 text-zinc-600 hover:text-teal-500 hover:border-teal-400/50 dark:hover:text-yellow-200 dark:hover:border-yellow-500 border-2 rounded-md p-1.5 h-10 w-10 duration-200 transition-colors" />
									</button>
								</TooltipTrigger>
								<TooltipContent>
									<p className="text-base">Copy Code</p>
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
				</div>

				{/* Views */}
				{pickedTab === "sandbox" && (
					<div className="relative flex items-center w-full h-full rounded-xl">
						{!importing && (
							// IF straight JSX, render code directly
							<div className="text-black pt-14">
								<Highlight
									innerHTML={true}
									className=" html bg-zinc-100 max-h-[400px] overflow-scroll no-scrollbar select-none rounded-b-xl">
									{code}

									{/* If straight JSX + tailwind incorporate provide code. If an import statement is required, include ahead of code.*/}
								</Highlight>
							</div>
						)}
						{importing && (
							<div className="text-black pt-14 w-full h-[400px] p-3 mt-3">
								<Highlight
									innerHTML={true}
									className=" html bg-zinc-100 max-h-[400px] overflow-scroll no-scrollbar select-none rounded-b-xl">
									{code}
								</Highlight>
							</div>
						)}

						{/* Resize Handler */}
						{pickedTab === "sandbox" && (
							<div
								onPointerUp={handleWidthChange}
								id="resize-handler"
								ref={resizer}
								className="absolute mt-10 cursor-pointer -right-5">
								<div className="bg-black/30 rounded-full h-[150px] w-2 my-auto z-10 right-1 hover:bg-black/50"></div>
							</div>
						)}
						{/*  */}
					</div>
				)}

				{pickedTab === "code" && (
					<div className="w-full overflow-hidden pt-14 bg-zinc-100 rounded-xl">
						<Highlight className="html max-h-[400px] w-full">{code}</Highlight>
					</div>
				)}
			</div>
			<div className="flex items-end justify-end w-full gap-2 px-3">
				<h4 className="text-lg text-gray-400">Tags:</h4>
				{tags.map((tag: string) => (
					<Badge href="/badges" size="md" className="px-3 text-white rounded-full bg-zinc-400 hover:bg-[#A8A8B1]">
						{tag}
					</Badge>
				))}
			</div>
		</div>
	)
}

const ComponentView = ({ item }: any) => {
	const [isLoading, setIsLoading] = useState(true)

	// Simulate a delay to show loading indicator
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false)
		}, 1000) // Adjust the delay as needed
		return () => clearTimeout(timer)
	}, [])

	// Render the loading skeleton while loading
	if (isLoading) {
		return <LoadingSkeleton />
	}

	return (
		<Suspense fallback={<LoadingSkeleton />}>
			<ComponentViewWrapper item={item} />
		</Suspense>
	)
}

const LoadingSkeleton = () => {
	const tags = ["...loading"]
	return (
		<div className="skeleton">
			<div className="relative flex flex-col items-center h-fit">
				<div className="relative flex flex-col items-center h-[400px] w-full mt-4 mb-2 border-2  codeView text-zinc-100 rounded-xl bg-white/20 item-center shadow-black/20 border-zinc-300 min-h-30 ">
					<div className="absolute w-full bg-white rounded-t-xl h-14"></div>
					<div className="flex w-full justify-between absolute pl-4 pr-2 pt-2 z-[12]">
						<div className="flex items-center">
							<Tabs defaultValue="sandbox" className="space-y-4 rounded-lg">
								<TabsList>
									<TabsTrigger value="sandbox" defaultChecked>
										Sandbox
									</TabsTrigger>
									<TabsTrigger value="code">Code</TabsTrigger>
								</TabsList>
							</Tabs>
							<div className="ml-4 text-xl text-zinc-300 text-semibold">
								<p className="text-pulse-dark">...Loading</p>
							</div>
						</div>
						<div className="flex lg:gap-2">
							<Rating size="lg" className="scale-[80%]  cursor-pointer">
								<Rating.Star filled={false} />
							</Rating>

							<button disabled>
								<BiCopy className=" cursor-not-allowed text-4xl border-zinc-300 text-zinc-300 border-2 rounded-md p-1.5 h-10 w-10" />
							</button>
						</div>
					</div>

					{/* Views */}

					<div className="relative flex items-center w-full h-full rounded-xl">
						<div className="w-full h-full text-black pt-14">
							<div className="w-full h-full select-none skeleton html bg-zinc-100 bg-pulse no-scrollbar rounded-b-xl">
								<div className="flex items-center justify-center w-full h-full">
									<MoonLoader color="#B2B2B4" className="h-full" size={120} speedMultiplier={0.75} />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex items-end justify-end w-full gap-2 px-3">
					<h4 className="text-lg">Tags:</h4>
					{tags.map((tag: string) => (
						<Badge href="/badges" size="md" className="px-3 text-white rounded-full bg-zinc-400 tag-bg-pulse">
							<p className="text-pulse">{tag}</p>
						</Badge>
					))}
				</div>
			</div>
		</div>
	)
}

export default ComponentView
