"use client"
import { libraries, iconLibraries, fontLibraries } from "../context/libraries"
import Image from "next/image"
import { Tooltip } from "flowbite-react"

interface FilterBoxProps {
	filters: string[]
	// setFilters: (event: React.ChangeEvent<HTMLInputElement>) => void
	setFilters: any
	library: string
}

const FilterCollection = ({ filters, setFilters, library }: FilterBoxProps) => {
	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		console.log(e.currentTarget.children[0].getAttribute("alt"))
		const buttonVal = e.currentTarget.children[0].getAttribute("alt")
		// check if filters array contains the button value and if it does, remove it else add it
		try {
			if (filters?.includes(buttonVal!)) {
				setFilters(filters.filter((filter) => filter !== buttonVal))
			} else {
				setFilters([...filters, buttonVal])
			}
			console.log("toggle complete")
		} catch (error) {
			console.log(error)
			throw new Error("Error in FilterBox.tsx")
		}
	}

	return (
		<>
			{
				library === "components" &&
					libraries.map((lib) => {
						return (
							<div className="w-10 h-10 overflow-hidden rounded-md cursor-pointer" onClick={handleClick}>
								<Image src={lib.logo} alt={lib.brand} className="w-10 h-10" height={12} width={12} />
							</div>
						)
					})
			}
			{
				library === "icons" &&
					iconLibraries.map((lib) => {
						return (
							<div key={lib.brand} className="w-10 h-10 cursor-pointer" onClick={handleClick}>
								<Tooltip
									// id={`tooltip-${lib.brand}`}

									role="tooltip"
									trigger="hover"
									className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-800"
									content={"lib.brand"}
									arrow={true}>
									<Image
										// data-tooltip-target={`tooltip-${lib.brand}`}
										src={lib.logo}
										alt={lib.brand}
										className={` ${filters?.includes(lib.brand) ? "" : "grayscale opacity-80"} h-10 w-10`}
										height={12}
										width={12}
									/>
								</Tooltip>
							</div>
						)
					})
			}

			{library === "fonts" &&
				fontLibraries.map((lib) => {
					return (
						<div className="w-12 h-12 cursor-pointer" onClick={handleClick}>
							<Image
								src={lib.logo}
								alt={lib.brand}
								className={` ${filters?.includes(lib.brand) ? "" : "grayscale opacity-60"} h-12 w-12`}
								height={75}
								width={75}
							/>
						</div>
					)
				})}
		</>
	)
}

export default FilterCollection
