import React from "react"
import ReactDOMServer from "react-dom/server"
import * as flowbiteReact from "./flowbiteLibrary"

function generateDynamicComponent(code, dependencies) {
	// Generate dynamic import statements for dependencies
	const imports = dependencies.map((dependency) => `import ${dependency} from "flowbite-react/${dependency}";`).join("\n")

	// Create a function that renders the components
	const renderFunction = new Function(...dependencies, "return (" + code + ");")

	// Call the render function with the imported components
	const component = renderFunction(...dependencies.map((dependency) => eval(dependency)))

	return component
}

export default generateDynamicComponent
