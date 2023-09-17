import Link from "next/link"
import Image from "next/image"
import SiteLogo from "../assets/Logo/PenguinTail.png"
import { SiStylelint, SiGoogleforms } from "react-icons/si"
import { BiSolidComponent } from "react-icons/bi"
import { BsRegex, BsInputCursorText } from "react-icons/bs"
import { MdInsertEmoticon } from "react-icons/md"
import { FaRegStar } from "react-icons/fa"
import { FaFishFins } from "react-icons/fa6"
import { ImFontSize } from "react-icons/im"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { LuPackageSearch } from "react-icons/lu"

const nav = ["favorites", "avatars", "icons", "fonts", "regex", "classes", "components", "inputs", "forms"]
const signedInNav = ["projects", "packages"]

const Navbar = () => {
	const user = true
	return (
		<nav className="flex flex-row justify-between w-full px-16 text-2xl py-4 relative">
			<Link href="/">
				<div className="flex flex-row justify-between  text-2xl py-4 w-fit -mt-4">
					<Image src={SiteLogo} alt="PenguinTail Logo" className="h-14" width={60} height={50} />
					<p className="text-black ml-2 text-2xl line-clamp-2">
						<span className="font-bold text-teal-600">Tailwind </span>
						<span className="text-zinc-400">Penguin</span>
					</p>
				</div>
			</Link>
			<div className="flex flex-col items-end justify-center">
				{/* Main Navigation */}
				<div id="main-navigation" className="flex justify-around width-fit gap-4">
					{nav.map((link) => (
						<div className="">
							<div className=" items-center  h-fit group">
								<Link href={`/${link === "home" ? "/" : link}`} className="rounded px-3 py-0.5 mt-4 h-fit">
									<button className="text-teal-500 text-4xl hover:text-teal-400">
										{link === "favorites" && <FaRegStar className={`inline-block text-3xl`} />}
										{link === "classes" && <SiStylelint className={`inline-block`} />}
										{link === "fonts" && <ImFontSize className={`inline-block text-3xl`} />}
										{link === "components" && <BiSolidComponent className={`inline-block`} />}
										{link === "inputs" && <BsInputCursorText className={`inline-block`} />}
										{link === "forms" && <SiGoogleforms className={`inline-block text-3xl`} />}
										{link === "regex" && <BsRegex className={`inline-block`} />}
										{link === "avatars" && <MdInsertEmoticon className={`inline-block`} />}
										{link === "icons" && <FaFishFins className={`inline-block`} />}
									</button>
								</Link>
								<Link href={`/${link === "home" ? "/" : link}`} className="">
									<p
										className={` pt-5 -mt-2  absolute pointer-events-none h-0  group-hover:h-fit group-hover:w-fit text-right text-zinc-400 right-20 opacity-0 duration-500 ease-in transition-all group-hover:opacity-100`}>
										{link}
									</p>
								</Link>
							</div>
						</div>
					))}
				</div>
				{/* User Navigation */}
				<div className="flex items-end justify-center gap-4 mt-2">
					<div id="user-navigation" className="bg-zinc-400 rounded-full h-12 items-center relative">
						<div className=" items-center flex h-fit  text-4xl px-4 gap-2.5 pt-[2px] mb-2">
							{user &&
								signedInNav.map((link) => (
									<div className="group">
										<div className="flex flex-col">
											<Link href={link} className="rounded py-1 flex h-fit items-center">
												{link === "projects" && (
													<AiOutlineFundProjectionScreen
														className={`inline-block  text-zinc-200 hover:text-white align-middle`}
													/>
												)}
											</Link>
											<Link href={link} className="rounded -my-1 mb-7 flex h-fit items-center">
												{link === "packages" && (
													<LuPackageSearch
														className={`inline-block  text-zinc-200 hover:text-white align-middle`}
													/>
												)}
											</Link>
										</div>
										<Link href={link} className="text-2xl absolute items-end text-right bg-red-500">
											<p
												className={` pt-5 -mt-2  absolute pointer-events-none h-0  group-hover:h-fit group-hover:w-fit text-right text-zinc-400 right-20 opacity-0 duration-500 ease-in transition-all group-hover:opacity-100`}>
												{link}
											</p>
										</Link>
									</div>
								))}
						</div>
					</div>
					<div className="bg-purple-500 rounded-full h-12 w-12 flex items-center justify-center">
						<p className="text-white text-2xl">A</p>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
