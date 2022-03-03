/** @format */

import React from "react"
import { InfoCard } from "../card"
import { ButtonTransparent, ButtonSecondary } from "../inputs/customButton"
import {
	leftNavigation,
	leftNavigationOthers,
	socials,
	tags,
} from "../../utils/data"
import { LinkLists } from "../links"

const LeftColumn: React.FC = () => {
	return (
		<div>
			<InfoCard className="w-full">
				<p className="font-bold text-2xl w-11/12">
					<span className="text-primaryBlue">DEV Community</span> is a Community
					of 790,232 amazing developers
				</p>
				<p className="my-4 text-gray-500">
					We're a place where coders share, stay up-to-date and grow their
					careers.
				</p>
				<ButtonTransparent
					text="Create account"
					url="https://dev.to/enter?state=new-user"
				/>
				<ButtonSecondary text="Log in" url="https://dev.to/enter" />
			</InfoCard>

			<LinkLists list={leftNavigation} />

			<p className="font-bold mt-4">Other</p>
			<LinkLists list={leftNavigationOthers} />

			<div className="mt-4 flex space-x-1">
				{socials.map(({ Icon, href }, index) => (
					<a
						href={href}
						target="_blank"
						rel="noreferrer"
						className="hover:bg-primaryBg hover:text-primaryBlue  rounded-lg p-2"
						key={`social-${index}`}
					>
						<Icon />
					</a>
				))}
			</div>

			<p className="font-bold my-4 ml-1">popular Tags</p>
			<div className="h-[300px] overflow-y-auto ml-1 mb-4">
				{tags.map(({ name, href }) => (
					<div
						className="flex hover:text-primaryBlue hover:underline cursor-pointer text-sm text-primaryGray space-x-2 items-center mt-2 hover:bg-primaryBg w-8/12 px-3 rounded py-1"
						key={name}
					>
						<a className=" " href={href}>
							#{name}
						</a>
					</div>
				))}
			</div>

			<InfoCard className="w-full">
				<img
					alt="shop dev"
					src="https://res.cloudinary.com/practicaldev/image/fetch/s--xUUu9M3Z--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://thepracticaldev.s3.amazonaws.com/i/3yp9rurw75us7sz2vsag.jpg"
					className="mb-4"
				/>
				<a
					href="https://shop.dev.to/collections/2018-new-merch"
					className="text-center font-bold text-primaryBlue text-2xl"
				>
					Shop DEV Basics
				</a>
			</InfoCard>

			<InfoCard className="my-6 w-full">
				<p className="text-sm w-[96%]">
					DEV runs on 100% open source code known as{" "}
					<span className="text-primaryBlue">
						<a href="https://github.com/forem/forem">Forem.</a>
					</span>{" "}
					Contribute to the codebase or host your own!{" "}
				</p>
				<p className="font-bold">Check these out! 👇</p>
				<ul className="list-disc text-sm ml-8 mt-2">
					<li>
						<a
							href="https://github.com/forem/forem"
							className="
							text-primaryBlue"
						>
							Main Forem Repo
						</a>
					</li>
					<li>
						<a
							href="https://github.com/forem/selfhost"
							className="
							text-primaryBlue"
						>
							Self-Host Instructions
						</a>
					</li>
				</ul>
			</InfoCard>
		</div>
	)
}

export default LeftColumn
