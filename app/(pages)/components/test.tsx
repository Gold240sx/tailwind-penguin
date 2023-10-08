import React from "react"
import ComponentView from "../../app_Components/ ComponentView"
import { Carousel } from "flowbite-react"
import * as flowbiteReact from "flowbite-react"

const Test = ({ library, component, filters }: any) => {
	const TestComponents = [
		{
			name: "Test",
			tags: ["cards", "grid", "blog"],
			library: "Tailspark",
			install: null,
			importing: "",
			libAddress: null,
			dependancies: null,
			componentName: null,
			type: "layout",
			sub_type: "blog",
			favorite: false,
			code: `<div class="">
  <div class="px-5 md:px-10">
    <div class="mx-auto w-full max-w-7xl">
      <div class="py-16 md:py-24 lg:py-32">
        <div class="">
          <div class="mb-20">
            <h2 class="text-3xl font-semibold md:text-5xl">Similar Blogs</h2>
          </div>
          <div class="mb-24">
            <div class="">
              <div class="grid grid-cols-1 gap-6 max-[991px]:grid-flow-row max-[991px]:gap-x-4 md:grid-cols-3">
                <div class="max-[991px]:flex max-[991px]:flex-col max-[991px]:justify-between">
                  <div class="flex h-full flex-col justify-between max-[991px]:flex max-[991px]:items-stretch md:justify-between">
                    <a href="#" class="mb-4 inline-block max-w-full hover:outline-0 md:mb-6">
                      <img alt="" src="https://assets.website-files.com/64fde6fd0e029101efaf5157/64fdf4f93714902ecf7eba93_Clear%20Communication.png" class="inline-block w-full max-w-full object-cover max-[767px]:mb-4 rounded-2xl h-64">
                    </a>
                    <div class="flex flex-col items-start">
                      <div class="text-xs font-semibold text-blue-600 sm:text-sm">Remote Work</div>
                      <a href="https://focus-template-bf49ac.webflow.io/blog-posts/the-power-of-clear-communication-enhancing-team-collaboration" class="mb-2 flex max-w-full flex-col gap-4 text-[#13182f] no-underline hover:outline-0">
                        <h3 class="text-xl font-semibold md:text-xl lg:text-3xl">The Power of Clear Communication: Enhancing Team Collaboration</h3>
                      </a>
                    </div>
                    <div>November 23, 2023</div>
                  </div>
                </div>
                <div class="max-[991px]:flex max-[991px]:flex-col max-[991px]:justify-between">
                  <div class="flex h-full flex-col justify-between max-[991px]:flex max-[991px]:items-stretch md:justify-between">
                    <a href="#" class="mb-4 inline-block max-w-full hover:outline-0 md:mb-6">
                      <img alt="" src="https://assets.website-files.com/64fde6fd0e029101efaf5157/64fdf4b95a21476b34e3d43d_Embracing%20Change.png" class="inline-block w-full max-w-full object-cover max-[767px]:mb-4 rounded-2xl h-64">
                    </a>
                    <div class="flex flex-col items-start">
                      <div class="text-xs font-semibold text-blue-600 sm:text-sm">Remote Work</div>
                      <a href="https://focus-template-bf49ac.webflow.io/blog-posts/embracing-change-adapting-to-new-work-environments" class="mb-2 flex max-w-full flex-col gap-4 text-[#13182f] no-underline hover:outline-0">
                        <h3 class="text-xl font-semibold md:text-xl lg:text-3xl">Embracing Change: Adapting to New Work Environments</h3>
                      </a>
                    </div>
                    <div>November 8, 2023</div>
                  </div>
                </div>
                <div class="max-[991px]:flex max-[991px]:flex-col max-[991px]:justify-between">
                  <div class="flex h-full flex-col justify-between max-[991px]:flex max-[991px]:items-stretch md:justify-between">
                    <a href="#" class="mb-4 inline-block max-w-full hover:outline-0 md:mb-6">
                      <img alt="" src="https://assets.website-files.com/64fde6fd0e029101efaf5157/64fdf470ec4645b5bd02f363_Heavy%20Workflows.png" class="inline-block w-full max-w-full object-cover max-[767px]:mb-4 rounded-2xl h-64">
                    </a>
                    <div class="flex flex-col items-start">
                      <div class="text-xs font-semibold text-blue-600 sm:text-sm">Productivity Tips</div>
                      <a href="https://focus-template-bf49ac.webflow.io/blog-posts/navigating-workload-tips-for-managing-heavy-workflows" class="mb-2 flex max-w-full flex-col gap-4 text-[#13182f] no-underline hover:outline-0">
                        <h3 class="text-xl font-semibold md:text-xl lg:text-3xl">Navigating Workload: Tips for Managing Heavy Workflows</h3>
                      </a>
                    </div>
                    <div>October 20, 2023</div>
                  </div>
                </div>
              </div>
              <div class="flex flex-wrap justify-center"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`,
		},
		{
			name: "Simple & Fixed Pricing",
			tags: ["layout", "test", "saas"],
			library: "Tailspark",
			install: null,
			importing: null,
			libAddress: null,
			dependancies: null,
			componentName: null,
			type: "layout",
			sub_type: "saas",
			favorite: true,
			code: `
<section class="relative">
  <img src="https://assets.website-files.com/646f65e37fe0275cfb808405/646f683b1e3793b739a1c34c_Pricing%20BG%20(1).svg" alt="" class="absolute inset-[0%] -z-[1] inline-block h-full w-full object-cover" />
  <!-- Container -->
  <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    <!-- Component -->
    <div class="rounded-[60px] bg-[#101010] px-12 py-16 text-white md:py-24 lg:py-32">
      <!-- Heading Content -->
      <div class="mx-auto mb-8 max-w-3xl text-center md:mb-12 lg:mb-16">
        <h2 class="mb-4 mt-6 text-3xl font-extrabold md:text-5xl">Simple &amp; Affordable Pricing</h2>
        <div class="mx-auto mt-4 max-w-[528px]">
          <p class="text-[#636262]">Simple &amp; fixed pricing. 30 days money-back guarantee</p>
        </div>
      </div>
      <!-- Pricing Content -->
      <div class="mx-auto grid h-auto w-full grid-cols-1 gap-4 rounded-md bg-[#f2f2f700] py-12 lg:grid-cols-2">
        <!-- Pricing Features -->
        <div class="grid h-full grid-cols-1 gap-4 rounded-xl border border-solid border-[#181818] px-10 py-14 sm:grid-cols-2">
          <div class="flex flex-row items-center">
            <img src="https://assets.website-files.com/646603af5972c5339c9b35dc/64664039e1dd42b6d2fd5626_tick-circle.svg" alt="" class="mr-4 inline-block h-4 w-4" />
            <p>Premium Designs</p>
          </div>
          <div class="flex flex-row items-center">
            <img src="https://assets.website-files.com/646603af5972c5339c9b35dc/64664039e1dd42b6d2fd5626_tick-circle.svg" alt="" class="mr-4 inline-block h-4 w-4" />
            <p>Regular updates</p>
          </div>
          <div class="flex flex-row items-center">
            <img src="https://assets.website-files.com/646603af5972c5339c9b35dc/64664039e1dd42b6d2fd5626_tick-circle.svg" alt="" class="mr-4 inline-block h-4 w-4" />
            <p>Copy &amp; Paste</p>
          </div>
          <div class="flex flex-row items-center">
            <img src="https://assets.website-files.com/646603af5972c5339c9b35dc/64664039e1dd42b6d2fd5626_tick-circle.svg" alt="" class="mr-4 inline-block h-4 w-4" />
            <p>Lifetime Access</p>
          </div>
          <div class="flex flex-row items-center">
            <img src="https://assets.website-files.com/646603af5972c5339c9b35dc/64664039e1dd42b6d2fd5626_tick-circle.svg" alt="" class="mr-4 inline-block h-4 w-4" />
            <p>Early bird price</p>
          </div>
          <div class="flex flex-row items-center">
            <img src="https://assets.website-files.com/646603af5972c5339c9b35dc/64664039e1dd42b6d2fd5626_tick-circle.svg" alt="" class="mr-4 inline-block h-4 w-4" />
            <p>Premium Support</p>
          </div>
        </div>
        <!-- Pricing Cost -->
        <div class="flex flex-col rounded-xl bg-[#181818] p-10">
          <div class="flex w-full flex-col items-center justify-between sm:flex-row">
            <h2 class="mb-4 mt-6 text-left text-3xl font-extrabold md:text-5xl">$149<span class="text-sm font-light text-[#636262]">/month</span>
            </h2>
            <a href="#" class="inline-block rounded-[60px] border border-solid border-[#c9fd02] bg-[#c9fd02] px-6 py-4 text-center font-bold text-black transition hover:border-black hover:bg-white">Get started</a>
          </div>
          <div class="mb-6 mt-6 w-full border-[0.5px] border-solid border-[#242424]"></div>
          <p class="text-sm text-[#636262]">Lorem ipsum dolor sit amet consectetur adipiscing elit ut aliquam,purus sit amet luctus magna fringilla urna</p>
        </div>
      </div>
    </div>
  </div>
</section>`,
		},
	]

	return (
		<div className="w-full pb-10">
			{TestComponents.map((TestComponent, index) => (
				<ComponentView item={TestComponent} key={index} />
			))}
		</div>
	)
}

export default Test

//	const TestComponents = [
		// 		{
		// 			name: "Test",
		// 			tags: ["cards", "grid", "blog"],
		// 			library: "Tailspark",
		// 			install: "install tailspark",
		// 			importing: "",
		// 			libAddress: null,
		// 			dependancies: null,
		// 			componentName: null,
		// 			type: "layout",
		// 			sub_type: "blog",
		// 			favorite: false,
		// 			code: `<div class="">
		//   <div class="px-5 md:px-10">
		//     <div class="mx-auto w-full max-w-7xl">
		//       <div class="py-16 md:py-24 lg:py-32">
		//         <div class="">
		//           <div class="mb-20">
		//             <h2 class="text-3xl font-semibold md:text-5xl">Similar Blogs</h2>
		//           </div>
		//           <div class="mb-24">
		//             <div class="">
		//               <div class="grid grid-cols-1 gap-6 max-[991px]:grid-flow-row max-[991px]:gap-x-4 md:grid-cols-3">
		//                 <div class="max-[991px]:flex max-[991px]:flex-col max-[991px]:justify-between">
		//                   <div class="flex h-full flex-col justify-between max-[991px]:flex max-[991px]:items-stretch md:justify-between">
		//                     <a href="#" class="mb-4 inline-block max-w-full hover:outline-0 md:mb-6">
		//                       <img alt="" src="https://assets.website-files.com/64fde6fd0e029101efaf5157/64fdf4f93714902ecf7eba93_Clear%20Communication.png" class="inline-block w-full max-w-full object-cover max-[767px]:mb-4 rounded-2xl h-64">
		//                     </a>
		//                     <div class="flex flex-col items-start">
		//                       <div class="text-xs font-semibold text-blue-600 sm:text-sm">Remote Work</div>
		//                       <a href="https://focus-template-bf49ac.webflow.io/blog-posts/the-power-of-clear-communication-enhancing-team-collaboration" class="mb-2 flex max-w-full flex-col gap-4 text-[#13182f] no-underline hover:outline-0">
		//                         <h3 class="text-xl font-semibold md:text-xl lg:text-3xl">The Power of Clear Communication: Enhancing Team Collaboration</h3>
		//                       </a>
		//                     </div>
		//                     <div>November 23, 2023</div>
		//                   </div>
		//                 </div>
		//                 <div class="max-[991px]:flex max-[991px]:flex-col max-[991px]:justify-between">
		//                   <div class="flex h-full flex-col justify-between max-[991px]:flex max-[991px]:items-stretch md:justify-between">
		//                     <a href="#" class="mb-4 inline-block max-w-full hover:outline-0 md:mb-6">
		//                       <img alt="" src="https://assets.website-files.com/64fde6fd0e029101efaf5157/64fdf4b95a21476b34e3d43d_Embracing%20Change.png" class="inline-block w-full max-w-full object-cover max-[767px]:mb-4 rounded-2xl h-64">
		//                     </a>
		//                     <div class="flex flex-col items-start">
		//                       <div class="text-xs font-semibold text-blue-600 sm:text-sm">Remote Work</div>
		//                       <a href="https://focus-template-bf49ac.webflow.io/blog-posts/embracing-change-adapting-to-new-work-environments" class="mb-2 flex max-w-full flex-col gap-4 text-[#13182f] no-underline hover:outline-0">
		//                         <h3 class="text-xl font-semibold md:text-xl lg:text-3xl">Embracing Change: Adapting to New Work Environments</h3>
		//                       </a>
		//                     </div>
		//                     <div>November 8, 2023</div>
		//                   </div>
		//                 </div>
		//                 <div class="max-[991px]:flex max-[991px]:flex-col max-[991px]:justify-between">
		//                   <div class="flex h-full flex-col justify-between max-[991px]:flex max-[991px]:items-stretch md:justify-between">
		//                     <a href="#" class="mb-4 inline-block max-w-full hover:outline-0 md:mb-6">
		//                       <img alt="" src="https://assets.website-files.com/64fde6fd0e029101efaf5157/64fdf470ec4645b5bd02f363_Heavy%20Workflows.png" class="inline-block w-full max-w-full object-cover max-[767px]:mb-4 rounded-2xl h-64">
		//                     </a>
		//                     <div class="flex flex-col items-start">
		//                       <div class="text-xs font-semibold text-blue-600 sm:text-sm">Productivity Tips</div>
		//                       <a href="https://focus-template-bf49ac.webflow.io/blog-posts/navigating-workload-tips-for-managing-heavy-workflows" class="mb-2 flex max-w-full flex-col gap-4 text-[#13182f] no-underline hover:outline-0">
		//                         <h3 class="text-xl font-semibold md:text-xl lg:text-3xl">Navigating Workload: Tips for Managing Heavy Workflows</h3>
		//                       </a>
		//                     </div>
		//                     <div>October 20, 2023</div>
		//                   </div>
		//                 </div>
		//               </div>
		//               <div class="flex flex-wrap justify-center"></div>
		//             </div>
		//           </div>
		//         </div>
		//       </div>
		//     </div>
		//   </div>
		// </div>`,
		// 		},
		// {
		// 	name: "Default Form",
		// 	tags: ["test", "test", "test"],
		// 	library: "Flowbite-React",
		// 	libAddress: "flowbite-react",
		// 	install: "",
		// 	importing: "import { Button, Checkbox, Label, TextInput } from 'flowbite-react';",
		// 	componentName: "Form",
		// 	dependencies: ["Button", "TextInput", "Checkbox"],
		// 	code: `<form className="flex flex-col max-w-md gap-4">
		//   <div>
		//     <div className="block mb-2">
		//       <Label
		//         htmlFor="email1"
		//         value="Your email"
		//       />
		//     </div>
		//     <TextInput
		//       id="email1"
		//       placeholder="name@flowbite.com"
		//       required
		//       type="email"
		//     />
		//   </div>
		//   <div>
		//     <div className="block mb-2">
		//       <Label
		//         htmlFor="password1"
		//         value="Your password"
		//       />
		//     </div>
		//     <TextInput
		//       id="password1"
		//       required
		//       type="password"
		//     />
		//   </div>
		//   <div className="flex items-center gap-2">
		//     <Checkbox id="remember" />
		//     <Label htmlFor="remember">
		//       Remember me
		//     </Label>
		//   </div>
		//   <Button type="submit">
		//     Submit
		//   </Button>
		// </form>`,
		// },
		// 		{
		// 			name: "Accordion",
		// 			tags: ["test", "test", "test"],
		// 			library: "Flowbite",
		// 			libAddress: "flowbite",
		// 			install: "",
		// 			code: `<div id="accordion-collapse" data-accordion="collapse">
		//   <h2 id="accordion-collapse-heading-1">
		//     <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
		//       <span>What is Flowbite?</span>
		//       <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
		//         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
		//       </svg>
		//     </button>
		//   </h2>
		//   <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
		//     <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
		//       <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
		//       <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
		//     </div>
		//   </div>
		//   <h2 id="accordion-collapse-heading-2">
		//     <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
		//       <span>Is there a Figma file available?</span>
		//       <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
		//         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
		//       </svg>
		//     </button>
		//   </h2>
		//   <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
		//     <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
		//       <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
		//       <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
		//     </div>
		//   </div>
		//   <h2 id="accordion-collapse-heading-3">
		//     <button type="button" class="flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
		//       <span>What are the differences between Flowbite and Tailwind UI?</span>
		//       <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
		//         <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
		//       </svg>
		//     </button>
		//   </h2>
		//   <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
		//     <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
		//       <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
		//       <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
		//       <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
		//       <ul class="pl-5 text-gray-500 list-disc dark:text-gray-400">
		//         <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
		//         <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
		//       </ul>
		//     </div>
		//   </div>
		// </div>
		// `,
		// 		},
		// 	{
		// 		name: "Default Form",
		// 		tags: ["test", "test", "test"],
		// 		library: "Flowbite",
		// 		install: "",
		// 		// importing: "import { Button, Checkbox, Label, TextInput } from 'flowbite-react';",
		// 		componentName: "Form",
		// 		// dependencies: [
		// 		// 	"Button",
		// 		// 	"Checkbox",
		// 		// 	"FileInput",
		// 		// 	"Label",
		// 		// 	"Radio",
		// 		// 	"RangeSlider",
		// 		// 	"Select",
		// 		// 	"Textarea",
		// 		// 	"TextInput",
		// 		// 	"ToggleSwitch",
		// 		// ],
		// 		dependencies: ["flowbite-react/Button", "flowbite-react/TextInput", "flowbite-react/Checkbox"],
		// 		code: `<form className="flex flex-col max-w-md gap-4">
		//   <div>
		//     <div className="block mb-2">
		//       <Label
		//         htmlFor="email1"
		//         value="Your email"
		//       />
		//     </div>
		//     <TextInput
		//       id="email1"
		//       placeholder="name@flowbite.com"
		//       required
		//       type="email"
		//     />
		//   </div>
		//   <div>
		//     <div className="block mb-2">
		//       <Label
		//         htmlFor="password1"
		//         value="Your password"
		//       />
		//     </div>
		//     <TextInput
		//       id="password1"
		//       required
		//       type="password"
		//     />
		//   </div>
		//   <div className="flex items-center gap-2">
		//     <Checkbox id="remember" />
		//     <Label htmlFor="remember">
		//       Remember me
		//     </Label>
		//   </div>
		//   <Button type="submit">
		//     Submit
		//   </Button>
		// </form>`,
		// 	},
		// 		{
		// 			code: `<Carousel>
		//     <img alt="..." src="https://flowbite.com/docs/images/carousel/carousel-1.svg" />
		//     <img alt="..." src="https://flowbite.com/docs/images/carousel/carousel-2.svg" />
		//     <img alt="..." src="https://flowbite.com/docs/images/carousel/carousel-3.svg" />
		//     <img alt="..." src="https://flowbite.com/docs/images/carousel/carousel-4.svg" />
		//     <img alt="..." src="https://flowbite.com/docs/images/carousel/carousel-5.svg" />
		// </Carousel>`,
		// 			name: "Default Carousel",
		// 			tags: ["test", "test", "test"],
		// 			library: "Flowbite",
		// 			install: "",
		// 			dependencies: ["Carousel"],
		// 			importing: 'import { Carousel } from "flowbite-react";',
		// 		},
		// 		{
		// 			name: "Default Card",
		// 			tags: ["test", "test", "test"],
		// 			library: "Flowbite",
		// 			install: "",
		// 			dependencies: ["Card"],
		// 			importing: 'import { Card } from "flowbite-react";',
		// 			code: `<Card
		//       className="max-w-sm"
		//       href="#"
		//     >
		//       <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
		//         <p>
		//           Noteworthy technology acquisitions 2021
		//         </p>
		//       </h5>
		//       <p className="font-normal text-gray-700 dark:text-gray-400">
		//         <p>
		//           Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
		//         </p>
		//       </p>
		//     </Card>`,
		// 		},
	//]
