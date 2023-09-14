"use client"
import { useState } from "react"
import { formatCapitalizeAllWords } from "@/app/functions/capitalize"
import { GoDotFill } from "react-icons/go"

const forms = [
	"basic form",
	"sign in",
	"sign up",
	"forgot password",
	"change password",
	"change email",
	"change username",
	"delete account",
	"delete user",
]

export default function Forms() {
	const [pickedFormType, setpickedFormType] = useState("")
	return (
		<>
			<h1 className="text-4xl text-center pb-10">Component Collection</h1>
			<div className="flex items-start justify-between w-full h-auto  gap-4 min-h-screen">
				<section id="left-nav" className="flex flex-col items-start bg-zinc-900 rounded-lg h-screen w-fit p-6">
					<h2 className="text-3xl text-left p-1 font-bold text-lime-600">Forms</h2>
					<ul className="flex flex-col items-start justify-between text-xl text-zinc-300 w-full gap-4 pt-7 ml-6 pr-4">
						{forms.map((link) => {
							const formattedlink = formatCapitalizeAllWords(link)
							return (
								<li key={formattedlink} className="w-full group ">
									<button
										onClick={() => setpickedFormType(formattedlink)}
										className="h-full  w-full text-left  rounded p-2 text-xl ">
										<span
											className={`${
												pickedFormType === formattedlink
													? "text-lime-500 font-semibold -ml-6"
													: "group-hover:text-white group-hover:underline"
											} whitespace-nowrap w-full flex items-center gap-1`}>
											{pickedFormType === formattedlink && (
												<span className="text-zinc-700">
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
					className="flex flex-col w-full justify-between bg-zinc-700 rounded-lg items-start h-screen">
					<div className="flex flex-col items-start h-screen px-6 py-2 w-full">
						<div className="flex w-full items-center justify-between">
							<p className="text-3xl text-left py-5 w-fit whitespace-nowrap">
								Forms:{" "}
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
		</>
	)
}
