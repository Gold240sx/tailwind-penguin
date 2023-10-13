import {
  type InstallationInstructionsFunction,
  type stringOrUndefined
} from '../types'

export const TailwindInstall: InstallationInstructionsFunction = (
  docLink: string
) => {
  const intructions = {
    docs: docLink,
    Next: `Tailwind comes preinstalled with Next.js`,
    ViteReact: ` Install Tailwind in your Vite React Project#
    1. Create a tailwind.config.(ts/js) 
    2. insert the following code: 

     import type { Config } from 'tailwindcss'
     import Highlight from "react-highlight"

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/flowbite/**/*.js",
		"./node_modules/flowbite-react/**/*.js",
		"./public/**/*.html",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
		},
	},
	plugins: [require("flowbite/plugin"), require("highlight.js")],
    }
    export default config
    `,
    React: `The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool. The CLI is also available as a standalone executable if you want to use it without installing Node.js.
Install Tailwind CSS

Install tailwindcss via npm, and create your tailwind.config.js file.
Terminal

npm install -D tailwindcss
npx tailwindcss init
Configure your template paths

Add the paths to all of your template files in your tailwind.config.js file.
tailwind.config.js

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
Add the Tailwind directives to your CSS

Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.
src/input.css

@tailwind base;
@tailwind components;
@tailwind utilities;
Start the Tailwind CLI build process

Run the CLI tool to scan your template files for classes and build your CSS.
Terminal

        npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch`
  }
  return intructions
}
