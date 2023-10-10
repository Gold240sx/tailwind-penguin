"use client"
import React, { useState, useRef, useEffect, Suspense, lazy, use } from 'react'
import ReactDOMServer from 'react-dom/server'
import Link from 'next/link'
import Highlight from 'react-highlight'
import { Tabs, TabsList, TabsTrigger } from '../../components/ui/tabs'
import { BiCopy } from 'react-icons/bi'
import Swal from 'sweetalert2'
import { libraries } from '../context/libraries'
import Image from 'next/image'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '../../components/ui/tooltip'
import { Badge, Rating, TextInput } from 'flowbite-react'
import { MoonLoader } from 'react-spinners'
import { FaStar, FaRegStar } from 'react-icons/fa'
import { Carousel, Dropdown } from 'flowbite-react'
import { AiOutlineColumnHeight } from 'react-icons/ai'
import { GrInstallOption } from 'react-icons/gr'

const ComponentViewWrapper = ({ item }: any) => {
  const {
    code,
    name,
    library,
    tags,
    dependencies,
    codeString,
    installation,
    importing,
    installInstructions,
    theming,
    docs,
    componentName,
    libAddress
  } = item
  const [pickedTab, setPickedTab] = useState('sandbox')
  const [width, setWidth] = useState('100%')
  const [height, setHeight] = useState('400px')
  const [isFavorite, setIsFavorite] = useState(false)
  const [showInstall, setShowInstall] = useState(false)
  const resizer = useRef(null)
  const resizableDiv = useRef(null)

  const handleWidthChange = (e) => {
    setWidth(e.target.clientWidth)
  }

  const showAlert = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'The code has been copied to your clipboard.',
      showConfirmButton: false,
      toast: true,
      timer: 1800
    })
  }

  const copyCode = () => {
    navigator.clipboard.writeText(code)
    showAlert()
  }

  const techLogo = (library: any) => {
    const matchedLib = libraries.find((lib) => lib.brand === library)
    return matchedLib ? matchedLib.logo : ''
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
    Swal.fire({
      icon: !isFavorite ? 'success' : 'error',
      imageAlt: 'toast icon',
      position: 'top-end',
      imageWidth: 50,
      imageHeight: 50,
      title: isFavorite
        ? ` ${name} has been removed from your favorites.`
        : `${name} has been added to your favorites.`,
      showConfirmButton: false,
      toast: true,
      timer: 1800
    })
  }

  const toggleInstall = () => {
    setShowInstall(showInstall ? false : true)
  }

  const toggleHeight = () => {
    setHeight(height === '400px' ? 'auto' : '400px')
  }

  function jsxToString(jsx) {
    const jsxString = ReactDOMServer.renderToStaticMarkup(jsx)

    // Define the number of spaces for indentation
    const indentSpaces = 2

    // Custom formatting function to add indentation
    function formatJSON(json, level) {
      const spaces = ' '.repeat(level * indentSpaces)
      return JSON.stringify(json, null, 2)
        .split('\n')
        .map((line) => spaces + line)
        .join('\n')
    }

    // Parse the JSX string to JSON
    const parsedJSON = JSON.parse(jsxString)

    // Format the JSON with custom indentation
    const formattedJSX = formatJSON(parsedJSON, 0)

    return formattedJSX
  }

  return (
    <div className="relative flex flex-col items-center h-fit">
      {showInstall && (
        <div
          onClick={() => setShowInstall(false)}
          className="absolute h-full w-full z-[11]"
        ></div>
      )}
      <div
        ref={resizableDiv}
        className="relative flex flex-col w-full mt-4 mb-2 border-2 shadow-inner codeView text-zinc-100 rounded-xl bg-white/20 item-center shadow-black/20 border-zinc-300 min-h-30 "
        // draggable="true"
        style={{
          width: `${width}px`,
          // border: "1px solid black",
          // overflow: "hidden",
          resize: 'horizontal' // Enable horizontal resizing
        }}
      >
        <div className="absolute z-10 w-full bg-white rounded-t-xl h-14"></div>
        <div className="flex w-full justify-between absolute pl-4 pr-2 pt-2 z-[12]">
          <div className="flex items-center">
            <Tabs defaultValue="sandbox" className="space-y-4 rounded-lg">
              <TabsList>
                <TabsTrigger
                  value="sandbox"
                  onClick={() => setPickedTab('sandbox')}
                  defaultChecked
                >
                  Sandbox
                </TabsTrigger>
                <TabsTrigger value="code" onClick={() => setPickedTab('code')}>
                  Code
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <button
              onClick={toggleHeight}
              className={` ${
                height === '400px'
                  ? ' text-zinc-400 scale-x-150 scale-y-75 '
                  : ' scale-y-100 scale-x-100  text-teal-500'
              } border border-zinc-300 ml-5 rounded-md text-2xl  text-semibold ease-in-out duration-200 transition-all h-full`}
            >
              <AiOutlineColumnHeight />
            </button>
            <div className="ml-4 text-2xl text-teal-500 text-semibold">
              <p>{name}</p>
            </div>
          </div>
          <div className="flex lg:gap-2">
            <Rating
              onClick={toggleFavorite}
              size="lg"
              className="scale-[80%]  cursor-pointer"
            >
              {isFavorite && <Rating.Star className="text-yellow-500" />}
              {!isFavorite && <Rating.Star filled={false} />}
            </Rating>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="items-center w-10 -mt-1.5 bg-white rounded-md">
                    <Image
                      src={techLogo(library)}
                      alt="tech logo"
                      className="w-auto h-10 mx-auto mt-1.5 rounded-md"
                      width={40}
                      height={20}
                    />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-base">{library}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <GrInstallOption
                    onClick={toggleInstall}
                    className={` ${
                      showInstall
                        ? 'opacity-100'
                        : 'hover:opacity-80 opacity-40'
                    } text-4xl hover:border-2  hover:border-teal-400/50 rounded-full p-1 h-10 w-10 duration-200 transition-colors dark:invert`}
                  />
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-base">Installation</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div onClick={copyCode} className="pl-2">
                    <BiCopy className="text-4xl border-zinc-300 text-zinc-600 hover:text-teal-500 hover:border-teal-400/50 dark:hover:text-yellow-200 dark:hover:border-yellow-500 border-2 rounded-md p-1.5 h-10 w-10 duration-200 transition-colors" />
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-base">Copy Code</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        {/* Views */}
        {pickedTab === 'sandbox' && (
          <div className="relative flex items-center w-full h-full rounded-xl">
            {/* dependencies */}
            {/* {dependencies && <Importer />} */}
            {dependencies && (
              // <>{code}</>
              <div className="pt-16 bg-zinc-100 w-full overflow-scroll rounded-xl flex items-center justify-center py-8 min-h-[456px]">
                <div
                  className={`${
                    showInstall ? 'h-[300px]' : 'h-0'
                  } absolute shadow-xl z-[12] shadow-black/50 top-14 overflow-scroll select-none html bg-zinc-800 no-scrollbar rounded-b-xl text-white w-full transition-400 ease-in-out duration-300`}
                >
                  <InstallDetails
                    installation={installation}
                    importing={importing}
                    dependencies={dependencies}
                    installInstructions={installInstructions}
                    theming={theming}
                    docs={docs}
                  />
                </div>
                {/* <Monoco code={code} /> */}
                {/* <MonocoTailwind code={code} /> */}
                {/* <Highlight>
                                    <div style={{ height: `${height}` }} className="text-black">{code}</div>
                                </Highlight> */}
                {code}
              </div>
            )}
            {/* {dependencies && (
							<DynamicComponentLoader
								dynamicImport={async () => {
									try {
										const importPromises = dependencies.map((dep) => import(`../../node_modules/${libAddress}/${dep}`))
										await Promise.all(importPromises)
									} catch (error) {
										console.error("manual error", error)
									}
								}}
								code={code}
								dependencies={dependencies}
								className="w-full h-[400px] text-black pt-14"
							/>
			)} */}

            {/* not dependencies */}
            {!dependencies && (
              // IF straight JSX, render code directly
              <div className="relative flex items-center justify-center w-full text-black rounded pt-14 ">
                <div
                  className={`${
                    showInstall ? 'h-[300px]' : 'h-0'
                  } absolute shadow-xl shadow-black/50 top-14 z-[12] overflow-scroll select-none html bg-zinc-800 no-scrollbar rounded-b-xl text-white w-full transition-400 ease-in-out duration-300`}
                >
                  <InstallDetails
                    // install={install}
                    // import={importing}
                    dependencies={dependencies}
                  />
                </div>
                <Highlight
                  innerHTML={true}
                  className={` ${
                    height === '400px' ? 'max-h-[400px]' : 'h-fit'
                  } overflow-scroll select-none html bg-zinc-100 no-scrollbar rounded-b-xl`}
                >
                  {code}
                  {/* If straight JSX + tailwind incorporate provide code. If an import statement is required, include ahead of code.*/}
                </Highlight>
              </div>
            )}

            {/* Resize Handler */}
            {pickedTab === 'sandbox' && (
              <div
                onPointerUp={handleWidthChange}
                id="resize-handler"
                ref={resizer}
                className="absolute mt-10 cursor-pointer -right-5"
              >
                <div className="bg-black/30 rounded-full h-[150px] w-2 my-auto z-10 right-1 hover:bg-black/50"></div>
              </div>
            )}
            {/*  */}
          </div>
        )}
        {pickedTab === 'code' && (
          <div className="w-full overflow-hidden pt-14 bg-zinc-100 rounded-xl">
            <Highlight
              className={` ${
                height === '400px' ? 'max-h-[400px]' : 'h-fit'
              } overflow-scroll select-none html bg-zinc-100 no-scrollbar rounded-b-xl`}
            >
              <div style={{ height: `${height}` }}>
                {/* {dependencies ? jsxToString(code) : code} */}
                {!dependencies ? code : codeString}
                {/* {dependencies && <pre>{JSON.stringify(code, null, 2)}</pre>} */}
              </div>
            </Highlight>
          </div>
        )}
      </div>
      <div className="flex items-end justify-end w-full gap-2 px-3">
        <h4 className="text-lg text-gray-400">Tags:</h4>
        {tags.map((tag: string, index) => (
          <Badge
            key={index}
            href="/badges"
            size="md"
            className="px-3 text-white rounded-full bg-zinc-400 hover:bg-[#A8A8B1]"
          >
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )
}

const ComponentView = ({ item }: any) => {
  const [isLoading, setIsLoading] = useState(true)

  // Simulate a delay to show loading indicator
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000) // Adjust the delay as needed
    return () => clearTimeout(timer)
  }, [])

  // Render the loading skeleton while loading
  if (isLoading) {
    return <LoadingSkeleton />
  }

  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <ComponentViewWrapper item={item} />
    </Suspense>
  )
}

const LoadingSkeleton = () => {
  const tags = ['...loading']
  return (
    <div className="skeleton">
      <div className="relative flex flex-col items-center h-fit">
        <div className="relative flex flex-col items-center w-full mt-4 mb-2 border-2 codeView text-zinc-100 rounded-xl bg-white/20 item-center shadow-black/20 border-zinc-300 min-h-30 ">
          <div className="absolute w-full bg-white rounded-t-xl h-14"></div>
          <div className="flex w-full justify-between absolute pl-4 pr-2 pt-2 z-[12]">
            <div className="flex items-center">
              <Tabs defaultValue="sandbox" className="space-y-4 rounded-lg">
                <TabsList>
                  <TabsTrigger value="sandbox" defaultChecked>
                    Sandbox
                  </TabsTrigger>
                  <TabsTrigger value="code">Code</TabsTrigger>
                </TabsList>
              </Tabs>
              <div className="ml-4 text-xl text-zinc-300 text-semibold">
                <p className="text-pulse-dark">...Loading</p>
              </div>
            </div>
            <div className="flex lg:gap-2">
              <Rating size="lg" className="scale-[80%]  cursor-pointer">
                <Rating.Star filled={false} />
              </Rating>

              <GrInstallOption className="w-10 h-10 p-1 text-4xl opacity-50 cursor-not-allowed text-zinc-300" />

              <button disabled>
                <BiCopy className=" cursor-not-allowed text-4xl border-zinc-300 text-zinc-300 border-2 rounded-md p-1.5 h-10 w-10" />
              </button>
            </div>
          </div>

          {/* Views */}

          <div className="relative flex items-center w-full h-full rounded-xl">
            <div className="w-full h-full text-black pt-14">
              <div className="w-full h-full select-none skeleton html bg-zinc-100 bg-pulse no-scrollbar rounded-b-xl">
                <div className="flex items-center justify-center w-full h-full">
                  <MoonLoader
                    color="#B2B2B4"
                    className="h-full"
                    size={120}
                    speedMultiplier={0.75}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-end w-full gap-2 px-3">
          <h4 className="text-lg">Tags:</h4>
          {tags.map((tag: string, index) => (
            <Badge
              key={index}
              href="/badges"
              size="md"
              className="px-3 text-white rounded-full bg-zinc-400 tag-bg-pulse"
            >
              <p className="text-pulse">{tag}</p>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  )
}

const InstallDetails = ({
  dependencies,
  installation,
  importing,
  installInstructions,
  theming,
  docs
}: any) => {
  const showAlert = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'The code has been copied to your clipboard.',
      showConfirmButton: false,
      toast: true,
      timer: 1800
    })
  }

  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text)
    showAlert()
  }
  return (
    <div className="flex flex-col ">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-3xl">Installation Details</h1>
        {docs && (
          <a target="_blank" href={docs}>
            <p className="bg-zinc-600 cursor-pointer rounded-full px-2 py-0.5 text-white hover:bg-zinc-500">
              Docs
            </p>
          </a>
        )}
      </div>
      <div className="flex gap-8 p-6 pt-0">
        <div className="flex flex-col w-1/2 gap-2 pl-4 ">
          {installation && (
            <div className="flex items-start gap-3 text-center">
              <h2 className="text-lg">Install:</h2>
              <div className="flex items-center w-full px-4 py-1 text-center rounded-lg bg-black/40 min-h-10">
                <p>{installation}</p>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div
                      className="flex mb-auto"
                      onClick={() => copyCode(installation)}
                    >
                      <BiCopy className="text-2xl border-zinc-500 text-zinc-600 hover:text-teal-500 hover:border-teal-400/50 dark:hover:text-yellow-200 dark:hover:border-yellow-500 border-2 rounded-md p-1.5 h-8 w-8 duration-200 transition-colors" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-base">Copy Code</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )}
          {importing && (
            <div className="flex items-start gap-3 text-center">
              <h2 className="text-lg">Import:</h2>
              <div className="flex items-center w-full px-4 py-1 text-left rounded-lg bg-black/40 min-h-10">
                <p>{importing}</p>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <div
                      className="flex mb-auto"
                      onClick={() => copyCode(importing)}
                    >
                      <BiCopy className="text-2xl border-zinc-500 text-zinc-600 hover:text-teal-500 hover:border-teal-400/50 dark:hover:text-yellow-200 dark:hover:border-yellow-500 border-2 rounded-md p-1.5 h-8 w-8 duration-200 transition-colors" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="text-base">Copy Code</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          )}
          {installInstructions && (
            <div className="flex flex-col items-start w-full gap-3 text-left">
              <h2 className="text-lg">Install Instructions:</h2>
              <div className="flex w-full gap-3">
                <div className="flex items-center w-full px-4 py-1 text-center rounded-lg bg-black/40 min-h-10">
                  <p>{installInstructions}</p>
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="w-1/2">
          {theming && (
            <div className="flex flex-col items-start gap-3 text-center ">
              <div className="flex justify-between w-full">
                <h2 className="text-lg">Theming:</h2>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <div
                        className="flex mb-auto"
                        onClick={() => copyCode(theming)}
                      >
                        <BiCopy className="text-2xl border-zinc-500 text-zinc-600 hover:text-teal-500 hover:border-teal-400/50 dark:hover:text-yellow-200 dark:hover:border-yellow-500 border-2 rounded-md p-1.5 h-8 w-8 duration-200 transition-colors" />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-base">Copy Code</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <div className="flex items-start w-full max-h-[150px] px-4 text-left rounded-lg bg-black/40 min-h-10 py-4 overflow-scroll">
                <p>{theming}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

// const Importer = () => {
// 	const { Footer } = require("flowbite-react")
// 	return (
// 		<div className="flex items-center justify-center text-black pt-14 max-h-[400px]">
// 			{/* {Footer && ( */}
// 			<Footer container>
// 				<Footer.Copyright by="Flowbite™" href="#" year={2022} />
// 				<Footer.LinkGroup>
// 					<Footer.Link href="#">About</Footer.Link>
// 					<Footer.Link href="#">Privacy Policy</Footer.Link>
// 					<Footer.Link href="#">Licensing</Footer.Link>
// 					<Footer.Link href="#">Contact</Footer.Link>
// 				</Footer.LinkGroup>
// 			</Footer>
// 			{/* )} */}
// 			{/* {!Footer && <div className="text-black pt-14">...loading</div>} */}
// 		</div>
// 	)
// }

// const Importers = ({ dependencies, libAddress, code }) => {
// 	//import each component object from the dependancy so that when the code is executed the code has access to each component object
// 	const component = async () => {
// 		try {
// 			const importPromises = dependencies.map((dep) => import(`../../node_modules/${libAddress}/${dep}`))
// 			await Promise.all(importPromises)
// 		} catch (error) {
// 			console.error("manual error", error)
// 		}
// 	}

// const component = async () =>
// 	dependencies.map((dep) => {
// 		return import("../../node_modules/flowbite-react").then((d) => (
// 			<Highlight innerHTML={true} className="h-[400px] text-center items-center text-black pt-16 px-6">
// 				{code}
// 			</Highlight>
// 		))
// 	})

// 	return component()
// }

// const DynamicComponentLoader = ({ dynamicImport, dependencies, code, className }) => {
// 	const [Component, setComponent] = useState()

// 	useEffect(() => {
// 		const importDependencies = async () => {
// 			try {
// 				const importedDependencies = await Promise.all(dependencies.map((dep) => dynamicImport(dep)))

// 				// Create a props object with dependency names as keys
// 				const componentProps = {}
// 				dependencies.forEach((dep, index) => {
// 					const depName = dep.split("/").pop() // Extract the dependency name
// 					componentProps[depName] = importedDependencies[index].default // Store the default export of the dependency
// 				})

// 				// Dynamically import the main component
// 				const mainComponent = await dynamicImport()

// 				// Set the component to render with the props
// 				setComponent(() => (
// 					<Suspense fallback={<div>Loading...</div>} className={` h-[400px]`}>
// 						{React.createElement(mainComponent.default, componentProps)}
// 					</Suspense>
// 				))
// 			} catch (error) {
// 				console.error(error)
// 			}
// 		}

// 		importDependencies()
// 	}, [dynamicImport, dependencies, code, className])

// 	return <div>{Component ? Component : <div>Loading component and its dependencies...</div>}</div>
// }

export default ComponentView

// for single dependancy import
// const DynamicComponentLoader = ({ dynamicImport, code, componentName, dependencies }) => {
// 	const LazyComponent = lazy(() => dynamicImport().then((module) => ({ default: module[componentName] })))

// 	useEffect(() => {
// 		console.log(
// 			"dynamicImport",
// 			dynamicImport().then((module) => module.componentName)
// 		)
// 		console.log(dependencies)
// 		console.log("lazyComponent", <LazyComponent code={code} />)
// 	}, [])

// 	return (
// 		<>
// 			<Suspense fallback={<div>Loading...</div>}>
// 				<LazyComponent code={code} />
// 				<p>{componentName}</p>
// 			</Suspense>
// 		</>
// 	)
// }

// <div dangerouslySetInnerHTML={{ __html: code }} />
{
	/* <Highlight innerHTML={true} className="w-fit h-[400px]">
					<div className="text-black pt-14 w-full h-[400px] p-3 mt-3">
						<LazyComponent code={code} />
					</div>
				</Highlight> */
}
{
	/* <LazyComponent code={<div dangerouslySetInnerHTML={{ __html: code }} />} /> */
}
{
	/*<Carousel>
					<img alt="..." src="https://flowbite.com/docs/images/carousel/carousel-1.svg" />
					<img alt="..." src="https://flowbite.com/docs/images/carousel/carousel-2.svg" />
					<img alt="..." src="https://flowbite.com/docs/images/carousel/carousel-3.svg" />
					<img alt="..." src="https://flowbite.com/docs/images/carousel/carousel-4.svg" />
					<img alt="..." src="https://flowbite.com/docs/images/carousel/carousel-5.svg" />
				</Carousel> */
}
{
	/* <pre>{JSON.stringify(dynamicImport, null, 2)}</pre> */
}
{
	/* <p>{code}</p> */
}