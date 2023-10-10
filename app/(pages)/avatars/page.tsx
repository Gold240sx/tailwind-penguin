"use client"
import React, { use, useState, useEffect } from "react"
import Link from "next/link"
import { formatCapitalizeAllWords } from "@/app/functions/capitalize"
import FilterBox from "@/app/app_Components/filterBox"
import ComponentLoader from "./avtest"
import Monoco from "./monoco"

// icons
import { GoDotFill } from "react-icons/go"
import { iconLibraries, libraries } from "@/app/context/libraries"

const links = ["button", "checkbox", "input", "modal", "navbar", "radio", "select", "table", "toast", "toggle", "tooltip", "mode selector"]

export default function Avatars() {
	const [componentData, setComponentData] = useState(null)

	useEffect(() => {
		const mockComponentData = {
			components: [
				{
					name: "inputcard",
					library: "flowbite-react",
					code: `<form className="flex flex-col max-w-md gap-4">
	  <div>
	    <div className="block mb-2">
	      <Label
	        htmlFor="email1"
	        value="Your email"
	      />
	    </div>
	    <TextInput
	      id="email1"
	      placeholder="name@flowbite.com"
	      required
	      type="email"
	    />
	  </div>
	  <div>
	    <div className="block mb-2">
	      <Label
	        htmlFor="password1"
	        value="Your password"
	      />
	    </div>
	    <TextInput
	      id="password1"
	      required
	      type="password"
	    />
	  </div>
	  <div className="flex items-center gap-2">
	    <Checkbox id="remember" />
	    <Label htmlFor="remember">
	      Remember me
	    </Label>
	  </div>
	  <Button type="submit">
	    Submit
	  </Button>
	</form>`,
					dependencies: ["Card", "TextInput", "Checkbox", "Button", "Label", "Alert", "Datepicker", "Table"], // Import the dependencies from the module
				},
			],
		}
		setComponentData(mockComponentData)
	}, [])

	return (
		<>
			<h1 className="pb-10 text-4xl text-center">Avatar Collections</h1>
			<div className="flex items-start justify-between w-full h-auto min-h-screen gap-4 text-black">
				<Monoco />
				{componentData &&
					componentData.components.map((component) => <ComponentLoader key={component.name} componentData={component} />)}
			</div>
		</>
	)
}
