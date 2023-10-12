import React from "react"
import ComponentView from '../../app_components/ ComponentView'
import {
  Button,
  Checkbox,
  Datepicker,
  Label,
  TextInput,
  Carousel
} from 'flowbite-react'
import Link from 'next/link'
import * as flowbiteReact from 'flowbite-react'

// functions
import { removeHrefs } from '../../functions/removeHrefs'

const Test = ({
  filters,
  pickedInputType,
  setPickedInputType,
  defaultFilters,
  setLibFilters
}: any) => {
  const importedComponentCode = (
    <form className="flex flex-col max-w-md gap-4 code-wrapper ">
      <script src="https://cdn.tailwindcss.com"></script>
      <a href="google.com" className="text-blue-600 cursor-pointer">
        Google Link
      </a>
      <div>
        <div className="block mb-2">
          <Label htmlFor="email1" value="Your email" className="" />
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
          <Label htmlFor="password1" value="Your password" />
        </div>
        <TextInput id="password1" required type="password" />
      </div>
      <div className="flex items-center gap-2">
        <Checkbox id="remember" />
        <Label htmlFor="remember">Remember me</Label>
        <Datepicker id="date" />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  )

  const TestComponents = [
    {
      name: 'Default Form',
      tags: ['test', 'test', 'test'],
      library: 'Flowbite React',
      type: 'form',
      libAddress: 'flowbite-react',
      installation: 'npm i flowbite-react',
      installInstructions: {
        next: `Getting started#

    You can install Flowbite React to any Node.js project.

    You'll need to be familiar with Node.js, and have it installed.

    Setup Tailwind CSS#

    Install Tailwind CSS:

    npm i autoprefixer postcss tailwindcss
    npx tailwindcss init -p
    Point Tailwind CSS to files you have className=".." in:

    module.exports = {
      content: ['./src/**/*.{js,jsx,ts,tsx}' /* src folder, for example */],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    Add Tailwind CSS to a CSS file:

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    Install Flowbite React#

    Install Flowbite and Flowbite React:
    npm i flowbite-react # or yarn add flowbite flowbite-react
    Add the Flowbite plugin to tailwind.config.js, and include content from flowbite-react:
    module.exports = {
      content: [
        ...,
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
      ],
      plugins: [..., require('flowbite/plugin')],
      ...
    };
            `,
        ViteReact: `Getting started#

    You can install Flowbite React to any Node.js project.

    You'll need to be familiar with Node.js, and have it installed.

    Setup Tailwind CSS#

    Install Tailwind CSS:

    npm i autoprefixer postcss tailwindcss
    npx tailwindcss init -p
    Point Tailwind CSS to files you have className=".." in:

    module.exports = {
      content: ['./src/**/*.{js,jsx,ts,tsx}' /* src folder, for example */],
      theme: {
        extend: {},
      },
      plugins: [],
    };
    Add Tailwind CSS to a CSS file:

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    Install Flowbite React#

    Install Flowbite and Flowbite React:
    npm i flowbite-react # or yarn add flowbite flowbite-react
    Add the Flowbite plugin to tailwind.config.js, and include content from flowbite-react:
    module.exports = {
      content: [
        ...,
        'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
      ],
      plugins: [..., require('flowbite/plugin')],
      ...
    };
            `
      },
      importing:
        "import { Button, Checkbox, Label, TextInput } from 'flowbite-react';",
      componentName: 'Form',
      dependencies: ['Button', 'TextInput', 'Checkbox'],
      docs: 'https://www.flowbite-react.com/docs/components/forms',
      theming: `{
      "checkbox": {
        "root": {
          "base": "h-4 w-4 rounded focus:ring-2 border border-gray-300 dark:border-gray-600 dark:bg-gray-700 bg-gray-100",
          "color": {
            "default": "focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600 text-cyan-600",
            "dark": "focus:ring-gray-800 dark:ring-offset-gray-800 dark:focus:ring-gray-800 text-gray-800",
            "failure": "focus:ring-red-900 dark:ring-offset-red-900 dark:focus:ring-red-900 text-red-900",
            "gray": "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
            "info": "focus:ring-cyan-800 dark:ring-offset-gray-800 dark:focus:ring-cyan-800 text-cyan-800",
            "light": "focus:ring-gray-900 dark:ring-offset-gray-900 dark:focus:ring-gray-900 text-gray-900",
            "purple": "focus:ring-purple-600 dark:ring-offset-purple-600 dark:focus:ring-purple-600 text-purple-600",
            "success": "focus:ring-green-800 dark:ring-offset-green-800 dark:focus:ring-green-800 text-green-800",
            "warning": "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400",
            "blue": "focus:ring-blue-600 dark:ring-offset-blue-700 dark:focus:ring-blue-700 text-blue-700",
            "cyan": "focus:ring-cyan-600 dark:ring-offset-cyan-600 dark:focus:ring-cyan-600 text-cyan-600",
            "green": "focus:ring-green-600 dark:ring-offset-green-600 dark:focus:ring-green-600 text-green-600",
            "indigo": "focus:ring-indigo-700 dark:ring-offset-indigo-700 dark:focus:ring-indigo-700 text-indigo-700",
            "lime": "focus:ring-lime-700 dark:ring-offset-lime-700 dark:focus:ring-lime-700 text-lime-700",
            "pink": "focus:ring-pink-600 dark:ring-offset-pink-600 dark:focus:ring-pink-600 text-pink-600",
            "red": "focus:ring-red-600 dark:ring-offset-red-600 dark:focus:ring-red-600 text-red-600",
            "teal": "focus:ring-teal-600 dark:ring-offset-teal-600 dark:focus:ring-teal-600 text-teal-600",
            "yellow": "focus:ring-yellow-400 dark:ring-offset-yellow-400 dark:focus:ring-yellow-400 text-yellow-400"
          }
        }
      },
      "fileInput": {
        "root": {
          "base": "flex"
        },
        "field": {
          "base": "relative w-full",
          "input": {
            "base": "rounded-lg overflow-hidden block w-full border disabled:cursor-not-allowed disabled:opacity-50",
            "sizes": {
              "sm": "sm:text-xs",
              "md": "text-sm",
              "lg": "sm:text-md"
            },
            "colors": {
              "gray": "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
              "info": "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
              "failure": "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
              "warning": "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
              "success": "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
            }
          }
        }
      },
      "label": {
        "root": {
          "base": "text-sm font-medium",
          "disabled": "opacity-50",
          "colors": {
            "default": "text-gray-900 dark:text-white",
            "info": "text-cyan-500 dark:text-cyan-600",
            "failure": "text-red-700 dark:text-red-500",
            "warning": "text-yellow-500 dark:text-yellow-600",
            "success": "text-green-700 dark:text-green-500"
          }
        }
      },
      "radio": {
        "root": {
          "base": "h-4 w-4 border border-gray-300 focus:ring-2 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:focus:bg-cyan-600 dark:focus:ring-cyan-600 text-cyan-600"
        }
      },
      "rangeSlider": {
        "root": {
          "base": "flex"
        },
        "field": {
          "base": "relative w-full",
          "input": {
            "base": "w-full bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700",
            "sizes": {
              "sm": "h-1 range-sm",
              "md": "h-2",
              "lg": "h-3 range-lg"
            }
          }
        }
      },
      "textInput": {
        "base": "flex",
        "addon": "inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-200 px-3 text-sm text-gray-900 dark:border-gray-600 dark:bg-gray-600 dark:text-gray-400",
        "field": {
          "base": "relative w-full",
          "icon": {
            "base": "pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3",
            "svg": "h-5 w-5 text-gray-500 dark:text-gray-400"
          },
          "rightIcon": {
            "base": "pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3",
            "svg": "h-5 w-5 text-gray-500 dark:text-gray-400"
          },
          "input": {
            "base": "block w-full border disabled:cursor-not-allowed disabled:opacity-50",
            "sizes": {
              "sm": "p-2 sm:text-xs",
              "md": "p-2.5 text-sm",
              "lg": "sm:text-md p-4"
            },
            "colors": {
              "gray": "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
              "info": "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
              "failure": "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
              "warning": "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
              "success": "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
            },
            "withRightIcon": {
              "on": "pr-10",
              "off": ""
            },
            "withIcon": {
              "on": "pl-10",
              "off": ""
            },
            "withAddon": {
              "on": "rounded-r-lg",
              "off": "rounded-lg"
            },
            "withShadow": {
              "on": "shadow-sm dark:shadow-sm-light",
              "off": ""
            }
          }
        }
      },
      "textarea": {
        "base": "block w-full rounded-lg border disabled:cursor-not-allowed disabled:opacity-50 text-sm",
        "colors": {
          "gray": "bg-gray-50 border-gray-300 text-gray-900 focus:border-cyan-500 focus:ring-cyan-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          "info": "border-cyan-500 bg-cyan-50 text-cyan-900 placeholder-cyan-700 focus:border-cyan-500 focus:ring-cyan-500 dark:border-cyan-400 dark:bg-cyan-100 dark:focus:border-cyan-500 dark:focus:ring-cyan-500",
          "failure": "border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-400 dark:bg-red-100 dark:focus:border-red-500 dark:focus:ring-red-500",
          "warning": "border-yellow-500 bg-yellow-50 text-yellow-900 placeholder-yellow-700 focus:border-yellow-500 focus:ring-yellow-500 dark:border-yellow-400 dark:bg-yellow-100 dark:focus:border-yellow-500 dark:focus:ring-yellow-500",
          "success": "border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-400 dark:bg-green-100 dark:focus:border-green-500 dark:focus:ring-green-500"
        },
        "withShadow": {
          "on": "shadow-sm dark:shadow-sm-light",
          "off": ""
        }
      },
      "toggleSwitch": {
        "root": {
          "base": "group relative flex items-center rounded-lg focus:outline-none",
          "active": {
            "on": "cursor-pointer",
            "off": "cursor-not-allowed opacity-50"
          },
          "label": "ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        },
        "toggle": {
          "base": "toggle-bg rounded-full border group-focus:ring-4 group-focus:ring-cyan-500/25",
          "checked": {
            "on": "after:translate-x-full after:border-white",
            "off": "border-gray-200 bg-gray-200 dark:border-gray-600 dark:bg-gray-700",
            "color": {
              "blue": " bg-cyan-700 border-cyan-700",
              "dark": "bg-dark-700 border-dark-900",
              "failure": "bg-red-700 border-red-900",
              "gray": "bg-gray-500 border-gray-600",
              "green": "bg-green-600 border-green-700",
              "light": "bg-light-700 border-light-900",
              "red": "bg-red-700 border-red-900",
              "purple": "bg-purple-700 border-purple-900",
              "success": "bg-green-500 border-green-500",
              "yellow": "bg-yellow-400 border-yellow-400",
              "warning": "bg-yellow-600 border-yellow-600",
              "cyan": "bg-cyan-500 border-cyan-500",
              "lime": "bg-lime-400 border-lime-400",
              "indigo": "bg-indigo-400 border-indigo-400",
              "teal": "bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4",
              "info": "bg-cyan-600 border-cyan-600",
              "pink": "bg-pink-600 border-pink-600"
            }
          },
          "sizes": {
            "sm": "w-9 h-5 after:absolute after:top-[2px] after:left-[2px] after:h-4 after:w-4",
            "md": "w-11 h-6 after:absolute after:top-[2px] after:left-[2px] after:h-5 after:w-5",
            "lg": "w-14 h-7 after:absolute after:top-0.5 after:left-[4px] after:h-6 after:w-6"
          }
        }
      }
          }`,
      code: removeHrefs(importedComponentCode),
      codeString: ` <form className="flex flex-col max-w-md gap-4">
          <script src="https://cdn.tailwindcss.com"></script>
          <div>
            <div className="block mb-2">
              <Label htmlFor="email1" value="Your email" className="" />
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
              <Label htmlFor="password1" value="Your password" />
            </div>
            <TextInput id="password1" required type="password" />
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
            <Datepicker id="date" />
          </div>
          <Button type="submit">Submit</Button>
        </form>`
    },
    {
      name: 'Test',
      tags: ['cards', 'grid', 'blog'],
      library: 'Tailspark',
      install: null,
      importing: '',
      libAddress: null,
      dependancies: null,
      componentName: null,
      type: 'layout',
      sub_type: 'blog',
      favorite: false,
      code: removeHrefs(`<div class="">
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
</div>`)
    },
    {
      name: 'Simple & Fixed Pricing',
      tags: ['layout', 'test', 'saas'],
      library: 'Tailspark',
      install: null,
      importing: null,
      libAddress: null,
      dependancies: null,
      componentName: null,
      type: 'layout',
      sub_type: 'saas',
      favorite: true,
      code: removeHrefs(`
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
</section>`)
    }
  ]

  let anyComponentsMatch = false

  return (
    <div className="w-full pb-10">
      {TestComponents.map((TestComponent, index) => {
        if (
          filters.includes(TestComponent.library.toLowerCase()) &&
          (TestComponent.type.toLowerCase() === pickedInputType.toLowerCase() ||
            pickedInputType === 'all')
        ) {
          // If the component matches the filters, set the flag to true
          anyComponentsMatch = true

          return <ComponentView item={TestComponent} key={index} />
        }
        return null
      })}

      {/* Check if any components match and display the message if not */}
      {!anyComponentsMatch && (
        <div className="flex items-center rounded bg-zinc-300">
          <p className="p-4 text-lg font-semibold ">
            No Components match your search
          </p>
          <button
            onClick={() => {
              setLibFilters(defaultFilters)
              setPickedInputType('all')
            }}
            className="px-4 py-2 rounded-md bg-zinc-500 text-zinc-100 "
          >
            Reset All filters
          </button>
        </div>
      )}
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
