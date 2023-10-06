// import { createServerComponentClient } from "@supabase/supabase-js"
import Navbar from "@/app/app_Components/nav"
import Footer from "../app_Components/footer/Footer"
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
