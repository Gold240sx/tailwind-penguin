import React from "react"
import ComponentView from "../../app_Components/ ComponentView"
import { Carousel } from "flowbite-react"

const Test = ({ library, component, filters }: any) => {
	const TestComponents = [
		{
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
			name: "Test",
			tags: ["test", "test", "test"],
			library: "Tailspark",
			install: "install tailspark",
			importing: "",
		},
		{
			code: `
                <Carousel>
                    <img alt="..." src="https://flowbite.com/docs/images/carousel/carousel-1.svg" />
                    <img alt="..." src="https://flowbite.com/docs/images/carousel/carousel-2.svg" />
                    <img alt="..." src="https://flowbite.com/docs/images/carousel/carousel-3.svg" />
                    <img alt="..." src="https://flowbite.com/docs/images/carousel/carousel-4.svg" />
                    <img alt="..." src="https://flowbite.com/docs/images/carousel/carousel-5.svg" />
                </Carousel>
            `,
			name: "Default Carousel",
			tags: ["test", "test", "test"],
			library: "Flowbite",
			install: "",
			importing: 'import { Carousel } from "flowbite-react"',
		},
	]

	return (
		<div className="w-full pb-10">
			{TestComponents.map((TestComponent, index) => (
				<ComponentView item={TestComponent} />
			))}
		</div>
	)
}

export default Test
