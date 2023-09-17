"use client"
import { use, useState } from "react"
import Link from "next/link"
import { formatCapitalizeAllWords } from "@/app/functions/capitalize"
import FilterBox from "@/app/app_Components/filterBox"
import { Button, Tooltip } from "flowbite-react"

// icons
import { GoDotFill } from "react-icons/go"

const links = ["my uploads", "most recent"]

export default function Favorites() {
	const [pickedInputType, setPickedInputType] = useState("")
	const [libFilters, setLibFilters] = useState([])

	return (
		<>
			<h1 className="text-4xl text-center pb-10">My Favorites</h1>
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
													: "group-hover:text-teal-600 group-hover:font-semibold"
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

				<div className="flex flex-col gap-6 w-full">
					<FilterBox filters={libFilters} setFilters={setLibFilters} library="icons" />
					<section
						id="component-display"
						className="flex flex-col w-full justify-between bg-zinc-200 rounded-lg items-start h-auto">
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
							<>
								<Tooltip content="Tooltip content" trigger="hover">
									<Button>Tooltip hover</Button>
								</Tooltip>
								<Tooltip content="Tooltip content" trigger="click">
									<Button>Tooltip click</Button>
								</Tooltip>
							</>
						</div>
					</section>
				</div>
			</div>
		</>
	)
}
