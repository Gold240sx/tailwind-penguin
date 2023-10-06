const Footer = () => {
	const year = new Date().getFullYear()
	return <div className="absolute w-full h-20 p-8 mb-0 text-center text-white bg-zinc-400 footer">{year} © Bike Shop</div>
}

export default Footer
