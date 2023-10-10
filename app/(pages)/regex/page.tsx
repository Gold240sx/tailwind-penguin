"use client"
import { use, useState } from "react"
import Link from "next/link"
import { formatCapitalizeAllWords } from '../../functions/capitalize'
import FilterBox from '../../app_Components/filterBox'

// icons
import { GoDotFill } from "react-icons/go"

const categories = ["genFormatting", "replace"]

export default function Regex() {
	const [pickedInputType, setPickedInputType] = useState("")
	const [libFilters, setLibFilters] = useState([])

	return (
    <>
      <h1 className="pb-10 text-4xl text-center">Regex Collection</h1>
      <div className="flex items-start justify-between w-full h-auto min-h-screen gap-4">
        <section
          id="left-nav"
          className="flex flex-col items-start h-screen p-6 rounded-lg bg-zinc-300 w-fit"
        >
          <h2 className="p-1 text-3xl font-bold text-left text-teal-600">
            Components
          </h2>
          <ul className="flex flex-col items-start justify-between w-full gap-4 text-xl text-zinc-700 pt-7 ">
            {categories.map((link) => {
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

        <div className="flex flex-col w-full gap-6">
          <section
            id="component-display"
            className="flex flex-col items-start justify-between w-full h-auto rounded-lg bg-zinc-200"
          >
            <div className="flex flex-col items-start w-full h-screen px-6 py-2">
              <div className="flex items-center justify-between w-full ">
                <p className="py-5 text-3xl text-left w-fit whitespace-nowrap">
                  Components:{' '}
                  <span className="text-zinc-400">
                    {pickedInputType ? pickedInputType : 'Viewing All'}
                    {pickedInputType
                      ? pickedInputType === 'Checkbox'
                        ? "'s"
                        : 's'
                      : ''}
                  </span>
                </p>
                {pickedInputType && (
                  <button
                    onClick={() => setPickedInputType('')}
                    className={` text-zinc-900 rounded-lg p-2 h-fit align-center bg-zinc-100 hover:bg-zinc-50 hover:text-teal-500 px-3`}
                  >
                    View All
                  </button>
                )}
              </div>
              <div className="w-full ">
                <hr className="w-full border-lime-600" />
              </div>
              <ul className="flex flex-col items-start"></ul>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
