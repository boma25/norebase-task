/** @format */

import React from "react"
import { BsFillHouseDoorFill } from "react-icons/bs"

interface props {
	list: Array<{ name: string; href: string }>
}
const LinkLists: React.FC<props> = ({ list }) => {
	return (
		<div className="mt-4">
			{list.map(({ name, href }) => (
				<div
					className="flex hover:text-primaryBlue hover:underline cursor-pointer text-sm text-primaryGray space-x-2 items-center mt-2 hover:bg-primaryBg w-11/12 px-3 rounded py-1"
					key={name}
				>
					<BsFillHouseDoorFill className="hover:text-black text-black" />
					<a className=" " href={href}>
						{name}
					</a>
				</div>
			))}
		</div>
	)
}

export { LinkLists }
