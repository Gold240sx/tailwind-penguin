// import { createServerComponentClient } from "@supabase/supabase-js"
import Navbar from '../app_components/nav'
import Footer from '../app_components/footer/Footer'
import { useState } from "react"
import { cookies } from "next/headers"
import { cache } from "react"

export default async function HomeLayout({ children }: { children: any }) {
	return (
		<div className="">
			{/* <Navbar user={data?.session?.user} /> */}
			<Navbar />
			<div className="min-h-screen px-10 pb-10">{children}</div>
			<Footer />
		</div>
	)
}
