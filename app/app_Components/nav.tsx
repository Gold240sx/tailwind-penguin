import Link from "next/link"
const nav = ["classes", "components", "forms"]
import Image from "next/image"
import SiteLogo from "../assets/Logo/PenguinTail.png"

const Navbar = () => {
	return (
		<nav className="flex flex-row justify-between w-full px-16 text-2xl py-4">
			<Link href="/">
				<div className="flex flex-row justify-between  text-2xl py-4 w-fit">
					<Image src={SiteLogo} alt="PenguinTail Logo" className="h-14" width={60} height={50} />
					<p className="text-black ml-2 text-2xl line-clamp-2">
						<span className="font-bold text-teal-600">Tailwind </span>
						<span className="text-zinc-400">Penguin</span>
					</p>
				</div>
			</Link>
			{nav.map((link) => (
				<Link
					href={`/${link === "home" ? "/" : link}`}
					className="border rounded border-1 border-zinc-200 px-3 py-0.5 hover:bg-zinc-800">
					<button className="text-lime-500 hover:text-lime-400">{link}</button>
				</Link>
			))}
		</nav>
	)
}

export default Navbar
