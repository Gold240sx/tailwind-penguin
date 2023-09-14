"use client"
import { useState } from "react"
import Link from "next/link"
import { formatCapitalizeAllWords } from "@/app/functions/capitalize"

// icons
import { GoDotFill } from "react-icons/go"

const links = ["button", "checkbox", "input", "modal", "navbar", "radio", "select", "table", "toast", "toggle", "tooltip", "mode selector"]

export default function Components() {
	const [pickedInputType, setPickedInputType] = useState("")
	return (
		<>
			<h1 className="text-4xl text-center pb-10">Component Collection</h1>
			<div className="flex items-start justify-between w-full h-auto  gap-4 min-h-screen">
				<section id="left-nav" className="flex flex-col items-start bg-zinc-300 rounded-lg h-screen w-fit p-6">
					<h2 className="text-3xl text-left p-1 font-bold text-teal-600">Components</h2>
					<ul className="flex flex-col items-start justify-between text-xl text-zinc-700 gap-4 pt-7 w-full ">
						{links.map((link) => {
							const formattedlink = formatCapitalizeAllWords(link)
							return (
								<li key={formattedlink} className="w-full group ml-6 pr-4">
									<button
										onClick={() => setPickedInputType(formattedlink)}
										className="h-full  w-full text-left  rounded p-2 text-xl duration-300 transition-all">
										<span
											className={`${
												pickedInputType === formattedlink
													? "text-teal-500 font-semibold -ml-6"
													: "group-hover:text-white group-hover:underline "
											} whitespace-nowrap flex items-center gap-1`}>
											{pickedInputType === formattedlink && (
												<span className="text-teal-400/20">
													<GoDotFill />
												</span>
											)}
											{formattedlink}
										</span>
									</button>
								</li>
							)
						})}
					</ul>
				</section>
				<section
					id="component-display"
					className="flex flex-col w-full justify-between bg-zinc-200 rounded-lg items-start h-screen">
					<div className="flex flex-col items-start h-screen px-6 py-2 w-full">
						<div className="flex  justify-between w-full items-center ">
							<p className="text-3xl text-left py-5 w-fit whitespace-nowrap">
								Components:{" "}
								<span className="text-zinc-400">
									{pickedInputType ? pickedInputType : "Viewing All"}
									{pickedInputType ? (pickedInputType === "Checkbox" ? "'s" : "s") : ""}
								</span>
							</p>
							{pickedInputType && (
								<button
									onClick={() => setPickedInputType("")}
									className={` text-zinc-900 rounded-lg p-2 h-fit align-center bg-zinc-100 hover:bg-zinc-50 hover:text-teal-500 px-3`}>
									View All
								</button>
							)}
						</div>
						<div className=" w-full">
							<hr className="w-full border-lime-600" />
						</div>
						<ul className="flex flex-col items-start"></ul>
					</div>
				</section>
			</div>
		</>
	)
}
