/** @format */

import React from "react"
import Nav from "./nav"

interface props {
	LeftColumn: React.FC
	CenterColumn: React.FC
	RightColumn: React.FC
}
const Layout: React.FC<props> = ({ LeftColumn, CenterColumn, RightColumn }) => {
	return (
		<div>
			<Nav />

			<div className="grid grid-cols-4 gap-4 px-20 pt-8">
				<LeftColumn />

				<div className="col-span-2">
					<CenterColumn />
				</div>
				<RightColumn />
			</div>
		</div>
	)
}

export default Layout
