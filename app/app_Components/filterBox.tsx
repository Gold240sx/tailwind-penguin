import React from "react"
import { libraries, iconLibraries, fontLibraries } from "../context/libraries"
import Image from "next/image"

import FilterCollection from "./filterCollection"

interface FilterBoxProps {
	filters: string[]
	setFilters: (event: React.ChangeEvent<HTMLInputElement>) => void
	library: string
}

const FilterBox = ({ filters, setFilters, library }: FilterBoxProps) => {
	return (
		<div className="border-zinc-400 border-2  rounded-md h-fit w-full px-3">
			<div className="flex items-center w-full justify-between">
				<h2 className="text-3xl text-left p-1 font-semibold  whitespace-nowrap">Filter by Library</h2>
				<div className="w-fit flex p-1 gap-2">
					<FilterCollection filters={filters} setFilters={setFilters} library={library} />
				</div>
			</div>
		</div>
	)
}

export default FilterBox
