"use client"
import { useState } from "react"
import { formatCapitalizeAllWords } from '../../functions/capitalize'
import { GoDotFill } from "react-icons/go"
import FilterBox from '../../app_Components/filterBox'

const forms = [
	"basic form",
	"sign in",
	"sign up",
	"forgot password",
	"change password",
	"change email",
	"change username",
	"delete account",
	"delete user",
]

export default function Forms() {
	const [pickedFormType, setpickedFormType] = useState("")
	const [libFilters, setLibFilters] = useState([])

	return (
    <>
      <h1 className="pb-10 text-4xl text-center">Forms Collection</h1>
      <div className="flex items-start justify-between w-full h-auto min-h-screen gap-4">
        <section
          id="left-nav"
          className="flex flex-col items-start h-screen p-6 rounded-lg bg-zinc-300 w-fit"
        >
          <h2 className="p-1 text-3xl font-bold text-left text-teal-600">
            Forms
          </h2>

          <ul className="flex flex-col items-start justify-between w-full gap-4 pr-4 ml-6 text-xl text-zinc-700 pt-7">
            {forms.map((link) => {
              const formattedlink = formatCapitalizeAllWords(link)
              return (
                <li key={formattedlink} className="w-full group ">
                  <button
                    onClick={() => setpickedFormType(formattedlink)}
                    className="w-full h-full p-2 text-xl text-left rounded "
                  >
                    <span
                      className={`${
                        pickedFormType === formattedlink
                          ? 'text-teal-500 font-semibold -ml-6'
                          : 'group-hover:text-teal-600 group-hover:font-semibold'
                      } whitespace-nowrap flex items-center gap-1`}
                    >
                      {pickedFormType === formattedlink && (
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
          <FilterBox
            filters={libFilters}
            setFilters={setLibFilters}
            library="components"
          />
          <section
            id="component-display"
            className="flex flex-col items-start justify-between w-full h-screen rounded-lg bg-zinc-200"
          >
            <div className="flex flex-col items-start w-full h-screen px-6 py-2">
              <div className="flex items-center justify-between w-full">
                <p className="py-5 text-3xl text-left w-fit whitespace-nowrap">
                  Forms:{' '}
                  <span className="text-zinc-400">
                    {pickedFormType ? pickedFormType : 'Viewing All'}
                    {pickedFormType ? ' Forms' : ''}
                  </span>
                </p>
                {pickedFormType && (
                  <button
                    onClick={() => setpickedFormType('')}
                    className={` text-zinc-100 rounded-lg p-2 h-fit align-center bg-zinc-800 hover:bg-zinc-900 hover:text-lime-500 px-3`}
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
