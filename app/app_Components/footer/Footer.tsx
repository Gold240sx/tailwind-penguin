const Footer = () => {
	const year = new Date().getFullYear()
	return <div className="w-screen absolute mb-0 h-20 p-8 text-center text-white bg-zinc-400 footer">{year} © Bike Shop</div>
}

export default Footer
