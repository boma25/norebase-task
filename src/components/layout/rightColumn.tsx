/** @format */

import React from "react"
import { ListCard } from "../card"
import {
	listings,
	recentlyQueried,
	rightCardLists,
	trendingGuides,
} from "../../utils/data"

const RightColum: React.FC = () => {
	return (
		<div>
			<ListCard
				isListing
				list={listings}
				header="Listings"
				text="The funniest JavaScript newsletter on the internet"
			/>

			{rightCardLists.map((value, index) => (
				<ListCard {...value} key={`rightlistcark-${index}`} className="mt-8" />
			))}

			<p className="my-8 font-bold text-sm ml-4">trending guides/resources</p>

			{trendingGuides.map((value, index) => (
				<a
					href="https://dev.to/deepu105/concurrency-in-modern-programming-languages-rust-vs-go-vs-java-vs-nodejs-vs-deno-36gg"
					key={`trending-key-${index}`}
				>
					<div className="hover:text-primaryBlue hover:bg-white cursor-pointer px-2 py-4 mb-4">
						<p>{value}</p>
					</div>
				</a>
			))}
			<div className="my-4 h-[0.5px] w-full bg-primaryGray" />

			<p className="my-8 font-bold text-sm ml-4">recently queried</p>

			{recentlyQueried.map((value, index) => (
				<a
					href="https://dev.to/deepu105/concurrency-in-modern-programming-languages-rust-vs-go-vs-java-vs-nodejs-vs-deno-36gg"
					key={`recent-key-${index}`}
				>
					<div className="hover:text-primaryBlue hover:bg-white cursor-pointer px-2 py-4 mb-4">
						<p>{value}</p>
					</div>
				</a>
			))}

			<div className="my-4 h-[0.5px] w-full bg-primaryGray" />
		</div>
	)
}

export default RightColum
