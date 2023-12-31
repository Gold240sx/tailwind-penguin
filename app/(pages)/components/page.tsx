"use client"
import { use, useState } from "react"
import Link from "next/link"
import { formatCapitalizeAllWords } from '../../functions/capitalize'
import FilterBox from '../../app_components/filterBox'
import { Carousel } from "flowbite-react"
import Test from "./test"

// icons
import { GoDotFill } from "react-icons/go"

const links = [
  'button',
  'checkbox',
  'input',
  'modal',
  'navbar',
  'radio',
  'select',
  'form',
  'layout',
  'table',
  'toast',
  'toggle',
  'tooltip',
  'mode selector',
  'pill'
]
const defaultFilters = [
  'tailwind',
  'tailwind ui',
  'flowbite',
  'flowbite react',
  'daisyui',
  'r suite js',
  'hyper ui',
  'tailspark',
  'pines ui',
  'tailwind elements',
  'shadcn',
  'next ui',
  'sweetalert2',
  'react-select'
] as string[]

export default function Components({ children }: any) {
  const [pickedInputType, setPickedInputType] = useState('all')
  const [navbarOpen, setNavbarOpen] = useState(true)
  const [libFilters, setLibFilters] = useState(defaultFilters)

  return (
    <>
      <h1 className="pb-10 text-4xl text-center">Component Collection</h1>
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-12">
        {navbarOpen && (
          <section
            id="left-nav"
            className="flex flex-col items-start px-6 pt-10 rounded-lg box w-fi lg:col-span-3 bg-zinc-100"
          >
            <h2 className="p-1 text-3xl font-bold text-left text-teal-600">
              Components
            </h2>
            <ul className="flex flex-col items-start justify-between w-full gap-4 text-xl text-zinc-700 pt-7">
              {links.map((link) => {
                const formattedlink = formatCapitalizeAllWords(link)
                return (
                  <li key={formattedlink} className="w-full pr-4 ml-6 group">
                    <button
                      onClick={() => setPickedInputType(formattedlink)}
                      className="w-full h-full p-2 text-xl text-left transition-all duration-300 rounded"
                    >
                      <span
                        className={`${
                          pickedInputType === formattedlink
                            ? 'text-teal-500 font-semibold -ml-6'
                            : 'group-hover:text-teal-600 group-hover:font-semibold'
                        } whitespace-nowrap flex items-center gap-1`}
                      >
                        {pickedInputType === formattedlink && (
                          <span className="text-teal-400/20">
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
        )}
        <section
          id="component-display"
          className={`${
            navbarOpen ? '' : 'lg:col-span-12'
          } flex flex-col items-start w-full gap-6 pl-6 lg:grid lg:col-span-9`}
        >
          <div className="flex flex-col items-start w-full overflow-hidden rounded-lg box">
            {/* Filter Box */}
            <FilterBox
              filters={libFilters}
              setFilters={setLibFilters}
              library="components"
            />
            {/* Conponent / Code View */}
            <div className="flex flex-col items-start w-full px-6 py-2 mt-4 rounded-lg bg-zinc-300/40">
              <div className="flex items-center justify-between w-full ">
                <p className="flex gap-2 pt-2 pb-5 text-3xl text-left w-fit whitespace-nowrap text-zinc-400">
                  <p className="text-black">Components: </p>
                  <div className="flex">
                    <span className="">
                      {(pickedInputType !== 'all' && pickedInputType) ||
                        (pickedInputType === 'all' && '')}
                    </span>
                    {pickedInputType
                      ? pickedInputType === 'Checkbox'
                        ? "'s"
                        : pickedInputType === 'all'
                        ? 'Viewing all'
                        : 's'
                      : ''}
                  </div>
                </p>

                {pickedInputType !== 'all' && (
                  <button
                    onClick={() => setPickedInputType('all')}
                    className="p-2 px-3 rounded-lg text-zinc-900 h-fit align-center bg-zinc-100 hover:bg-zinc-50 hover:text-teal-500"
                  >
                    View All
                  </button>
                )}
              </div>

              {/* Render your Test component */}
              <Test
                library="components"
                pickedInputType={pickedInputType}
                setPickedInputType={setPickedInputType}
                setLibFilters={setLibFilters}
                defaultFilters={defaultFilters}
                component={
                  pickedInputType ? pickedInputType.toLowerCase() : 'all'
                }
                filters={libFilters}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}


