import Link from "next/link"
import Image from "next/image"
import SiteLogo from "../assets/Logo/PenguinTail.png"
import { SiStylelint, SiGoogleforms } from "react-icons/si"
import { BiSolidComponent } from "react-icons/bi"
import { BsRegex, BsInputCursorText, BsImages } from "react-icons/bs"
import { MdInsertEmoticon } from "react-icons/md"
import { FaRegStar } from "react-icons/fa"
import { FaFishFins } from "react-icons/fa6"
import { ImFontSize } from "react-icons/im"
import { AiOutlineFundProjectionScreen } from "react-icons/ai"
import { LuPackageSearch } from "react-icons/lu"
import { GrInstallOption } from "react-icons/gr"
import { MdAnimation } from "react-icons/md"

const nav = ["avatars", "animations", "icons", "fonts", "regex", "classes", "components", "inputs", "forms"]
const signedInNav = ["favorites", "projects", "images", "packages", "installations"]

const Navbar = () => {
	const user = true
	return (
		<nav className="relative flex flex-row justify-between w-full px-16 py-4 text-2xl">
			<Link href="/">
				<div className="flex flex-row justify-between py-4 -mt-4 text-2xl w-fit">
					<Image src={SiteLogo} alt="PenguinTail Logo" className="h-14" width={60} height={50} />
					<p className="ml-2 text-2xl text-black line-clamp-2">
						<span className="font-bold text-teal-600">Tailwind </span>
						<span className="text-zinc-400">Penguin</span>
					</p>
				</div>
			</Link>
			<div className="flex gap-4">
				{/* Main Navigation */}
				<div id="main-navigation" className="flex justify-around gap-4 width-fit">
					{nav.map((link) => (
						<div className="">
							<div className="items-center h-fit group">
								<Link href={`/${link === "home" ? "/" : link}`} className="rounded px-3 py-0.5 mt-4 h-fit">
									<button className="text-4xl text-teal-500 hover:text-teal-400">
										{link === "classes" && <SiStylelint className={`inline-block`} />}
										{link === "fonts" && <ImFontSize className={`inline-block text-3xl`} />}
										{link === "components" && <BiSolidComponent className={`inline-block`} />}
										{link === "inputs" && <BsInputCursorText className={`inline-block`} />}
										{link === "forms" && <SiGoogleforms className={`inline-block text-3xl`} />}
										{link === "regex" && <BsRegex className={`inline-block`} />}
										{link === "avatars" && <MdInsertEmoticon className={`inline-block`} />}
										{link === "animations" && <MdAnimation className={`inline-block`} />}
										{link === "icons" && <FaFishFins className={`inline-block`} />}
									</button>
								</Link>
								<Link href={`/${link === "home" ? "/" : link}`} className="capitalize">
									<p
										className={` pt-5 -mt-2  absolute pointer-events-none h-0  group-hover:h-fit group-hover:w-fit text-right text-zinc-400 right-20 opacity-0 duration-500 ease-in transition-all group-hover:opacity-100`}>
										{link}
									</p>
								</Link>
							</div>
						</div>
					))}
					<div className="flex h-12 px-3 pb-1 rounded-full bg-zinc-400 w-fit">
						{signedInNav.map((link) => (
							<div className="">
								<div className="items-center h-fit group">
									<Link href={`/${link === "home" ? "/" : link}`} className="mx-2 mt-4 rounded h-fit">
										<button className="text-4xl text-teal-500 hover:text-teal-400">
											{link === "favorites" && (
												<FaRegStar className={`inline-block  text-zinc-200 hover:text-white align-middle`} />
											)}
											{link === "projects" && (
												<AiOutlineFundProjectionScreen
													className={`inline-block  text-zinc-200 hover:text-white align-middle`}
												/>
											)}
											{link === "packages" && (
												<LuPackageSearch className={`inline-block  text-zinc-200 hover:text-white align-middle`} />
											)}
											{link === "installations" && (
												<GrInstallOption
													className={`inline-block  invert opacity-70 hover:opacity-100 align-middle`}
												/>
											)}
											{link === "images" && (
												<BsImages className={`inline-block  text-zinc-200 hover:text-white align-middle`} />
											)}
										</button>
									</Link>
									<Link href={`/${link === "home" ? "/" : link}`} className="capitalize">
										<p
											className={` pt-5 -mt-2  absolute pointer-events-none h-0  group-hover:h-fit group-hover:w-fit text-right text-zinc-400 right-20 opacity-0 duration-500 ease-in transition-all group-hover:opacity-100`}>
											{link}
										</p>
									</Link>
								</div>
							</div>
						))}
					</div>
					<div className="flex items-center justify-center w-12 h-12 bg-purple-500 rounded-full">
						<p className="text-2xl text-white">A</p>
					</div>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
