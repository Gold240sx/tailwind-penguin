// import { createServerComponentClient } from "@supabase/supabase-js"
import Navbar from "@/app/app_Components/nav"
import Footer from "../app_Components/footer/Footer"
import { cookies } from "next/headers"
import { cache } from "react"

export default async function HomeLayout({ children }: { children: any }) {
	// const supabase = createServerComponentClient({ cookies })
	// const { data }: { data: { session: null | { user: any } } } = await supabase.auth.getSession()

	return (
		<div className="py-14">
			{/* <Navbar user={data?.session?.user} /> */}
			<Navbar />
			<div className="min-h-screen p-10">{children}</div>
			<Footer />
		</div>
	)
}

// export const createServerClient = cache(() => {
// 	const cookieStore = cookies()
// 	return createServerComponentClient({
// 		cookies: () => cookieStore,
// 	})
// })
