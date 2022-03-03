/** @format */

import React from "react"
import { ButtonSecondary, ButtonTransparent } from "../inputs/customButton"
import Search from "../inputs/search"

const Nav: React.FC = () => {
	return (
		<div className="flex bg-white shadow items-center justify-between px-20 py-2">
			<div className="flex items-center w-1/3">
				<img
					alt="Logo"
					src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
					className="w-10 h-8 mr-8"
				/>
				<Search />
			</div>

			<div className="flex items-center space-x-4">
				<ButtonSecondary text="Log in" url="https://dev.to/enter" />
				<ButtonTransparent
					text="Create account"
					url="https://dev.to/enter?state=new-user"
				/>
			</div>
		</div>
	)
}

export default Nav
