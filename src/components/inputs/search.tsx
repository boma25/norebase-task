/** @format */

import React from "react"
import { BiSearch } from "react-icons/bi"

const Search: React.FC = () => {
	return (
		<div className="flex border-[1px] border-gray-300 rounded h-9 items-center px-1  text-black w-8/12 ">
			<input className="focus:outline-none w-11/12" placeholder="search..." />
			<BiSearch className="text-xl" />
		</div>
	)
}

export default Search
