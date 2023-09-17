"use client"
import { useState } from "react"
import { formatCapitalizeAllWords } from "@/app/functions/capitalize"
import { GoDotFill } from "react-icons/go"
import FilterBox from "@/app/app_Components/filterBox"

const links = ["input", "checkbox", "radio", "select", "toggle", "progress", "date"]

export default function Inputs() {
	const [pickedFormType, setpickedFormType] = useState("")
	const [libFilters, setLibFilters] = useState([])

	return (
		<>
			<h1 className="text-4xl text-center pb-10">Inputs Collection</h1>
			<div className="flex items-start justify-between w-full h-auto  gap-4 min-h-screen">
				<section id="left-nav" className="flex flex-col items-start bg-zinc-300 rounded-lg h-screen w-fit p-6">
					<h2 className="text-3xl text-left p-1 font-bold text-teal-600">Inputs</h2>

					<ul className="flex flex-col items-start justify-between text-xl text-zinc-700 w-full gap-4 pt-7 ml-6 pr-4">
						{links.map((link) => {
							const formattedlink = formatCapitalizeAllWords(link)
							return (
								<li key={formattedlink} className="w-full group ">
									<button
										onClick={() => setpickedFormType(formattedlink)}
										className="h-full  w-full text-left  rounded p-2 text-xl ">
										<span
											className={`${
												pickedFormType === formattedlink
													? "text-teal-500 font-semibold -ml-6"
													: "group-hover:text-teal-600 group-hover:font-semibold"
											} whitespace-nowrap flex items-center gap-1`}>
											{pickedFormType === formattedlink && (
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
					<FilterBox filters={libFilters} setFilters={setLibFilters} library="components" />
					<section
						id="component-display"
						className="flex flex-col w-full justify-between bg-zinc-200 rounded-lg items-start h-screen">
						<div className="flex flex-col items-start h-screen px-6 py-2 w-full">
							<div className="flex w-full items-center justify-between">
								<p className="text-3xl text-left py-5 w-fit whitespace-nowrap">
									Inputs:{" "}
									<span className="text-zinc-400">
										{pickedFormType ? pickedFormType : "Viewing All"}
										{pickedFormType ? " Forms" : ""}
									</span>
								</p>
								{pickedFormType && (
									<button
										onClick={() => setpickedFormType("")}
										className={` text-zinc-100 rounded-lg p-2 h-fit align-center bg-zinc-800 hover:bg-zinc-900 hover:text-lime-500 px-3`}>
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
			</div>
		</>
	)
}
