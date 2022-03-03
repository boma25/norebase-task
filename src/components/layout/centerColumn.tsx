/** @format */

import React from "react"
import { genArray } from "../../utils/helper"
import { PostCard } from "../card"
import { ButtonPrimary, ButtonSecondary } from "../inputs/customButton"

const CenterColumn: React.FC = () => {
	const posts = genArray(25)
	return (
		<div>
			<div>
				<ul className="flex space-x-4 text-primaryGray">
					<li className="font-bold text-black ">Relevant</li>
					<li>Latest</li>
					<li>Top</li>
				</ul>
			</div>
			{posts.slice(0, 5).map((value) => (
				<PostCard isFirst={value === 0} />
			))}
			<div className="mt-8">
				<div className="flex space-x-6 justify-center items-center mb-6">
					<img
						alt=""
						src="https://res.cloudinary.com/practicaldev/image/fetch/s--pcSkTMZL--/c_limit,f_auto,fl_progressive,q_80,w_190/https://practicaldev-herokuapp-com.freetls.fastly.net/assets/devlogo-pwa-512.png"
						className="w-10 h-10 rounded -rotate-12"
					/>
					<div className="w-9/12">
						<p className="font-bold text-3xl">
							<span className="text-primaryBlue">DEV Community</span> is a
							community of 826,098 amazing developers
						</p>
						<p className=" text-primaryGray">
							We're a place where coders share, stay up-to-date and grow their
							careers.
						</p>
					</div>
				</div>

				<div className="flex flex-col justify-center items-center ">
					<ButtonPrimary
						text="Create account"
						url="https://dev.to/enter?state=new-user"
					/>
					<ButtonSecondary
						text="Log in"
						url="https://dev.to/enter"
						className="text-secondaryBlue hover:bg-grayOne px-10"
					/>
				</div>
			</div>
			{posts.slice(5).map((value) => (
				<PostCard isFirst={value === 0} />
			))}
		</div>
	)
}

export default CenterColumn
