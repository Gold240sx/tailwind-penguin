import React, { useEffect, useState } from "react"
import * as flowbiteReact from "flowbite-react" // Import flowbite-react as a module

const ComponentLoader = ({ componentData }) => {
	const [components, setComponents] = useState([])

	useEffect(() => {
		async function loadComponents() {
			const componentImports = await Promise.all(
				componentData.dependencies.map(async (dependency) => {
					const Component = flowbiteReact[dependency] // Access the component from the module
					return { name: dependency, Component } // Store the Component, not module
				})
			)

			setComponents(componentImports)
		}

		loadComponents()
	}, [componentData.dependencies])

	return (
		<div>
			{components.map(({ name, Component }) => (
				<Component key={name} />
			))}
		</div>
	)
}

export default ComponentLoader
