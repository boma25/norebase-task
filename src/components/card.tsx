/** @format */

import React from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { RiChat1Line } from "react-icons/ri"

interface postProps {
	className?: string
	isFirst?: boolean
}
const PostCard: React.FC<postProps> = ({ className, isFirst }) => {
	return (
		<div className={`${className} bg-secondaryBg rounded-lg drop-shadow mt-4`}>
			{isFirst && (
				<img
					alt=""
					className="rounded-t-lg"
					src="https://res.cloudinary.com/practicaldev/image/fetch/s--fZ6Vf55v--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2h6crhh836sfyu4dai13.png"
				/>
			)}
			<div className="py-3 px-5">
				<div className="text-sm text-primaryGray flex space-x-4">
					<img
						alt="profile"
						className="rounded-full w-8 h-8"
						src="https://res.cloudinary.com/practicaldev/image/fetch/s--1JlbmjJX--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/540306/ae8f12de-c8b6-47a5-a3cc-02030460ee04.jpeg"
					/>
					<div>
						<p>Madza</p>
						<p className="text-xs">Mar 1</p>
					</div>
				</div>
				<div className="pl-12">
					<a
						className="hover:text-primaryBlue"
						href="https://dev.to/narottam04/how-cryptocurrency-works-explained-visually-2j32"
					>
						<p className="text-2xl w-10/12 mt-2 font-bold">
							How Cryptocurrency Works Explained Visually
						</p>
					</a>
					<div className="text-xs flex space-x-4 mt-4">
						<p className="hover:bg-[#d6d6d7] px-2 py-1 rounded  cursor-pointer">
							#blockchain
						</p>
						<p className="hover:bg-[#d6d6d7] px-2 py-1 rounded  cursor-pointer">
							#web3{" "}
						</p>
						<p className="hover:bg-[#d6d6d7] px-2 py-1 rounded  cursor-pointer">
							#beginners
						</p>
					</div>

					<div className="mt-4 flex justify-between  items-center">
						<div className="flex space-x-4 text-primaryGray">
							<div className="flex space-x-2 items-center hover:bg-[#d6d6d7] px-2 py-1 rounded  cursor-pointer">
								<AiOutlineHeart /> <p className="text-xs">141 reactions</p>
							</div>
							<div className="flex space-x-2 items-center hover:bg-[#d6d6d7] px-2 py-1 rounded  cursor-pointer">
								<RiChat1Line /> <p className="text-xs">17 comments</p>
							</div>
						</div>
						<div className="flex space-x-4 items-center ">
							<p className="text-xs text-primaryGray">7 mins read</p>
							<p className="bg-[#d6d6d7]  hover:bg-[#bdbdbd] cursor-pointer text-xs rounded px-2  py-1 text-[#3d3d3d]">
								Save
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

interface infoProps {
	className?: string
}

const InfoCard: React.FC<infoProps> = ({ children, className }) => {
	return (
		<div
			className={`${className} bg-secondaryBg w-9/12 rounded-lg drop-shadow py-3 px-5`}
		>
			{children}
		</div>
	)
}

interface listProps {
	header: string
	isListing?: boolean
	list: any[]
	className?: string
	text: string
}

const ListCard: React.FC<listProps> = ({
	header,
	isListing,
	list,
	className,
	text,
}) => {
	return (
		<InfoCard className={`${className} w-full px-0`}>
			<div className=" flex justify-between items-center text-sm py-3 px-5 text-primaryGray cursor-pointer">
				<p className="font-bold text-xl">{header}</p>
				{isListing && (
					<a href="https://dev.to/listings" className="text-primaryBlue">
						See all
					</a>
				)}
			</div>
			{list.map((value, index) => (
				<div
					className="border-t border-gray-100 text-sm py-3 px-5 hover:text-primaryBlue hover:bg-white cursor-pointer"
					key={index}
				>
					<p className="">{text}</p>
					<p className="text-xs mt-[0.5px] hover:text-black">
						{isListing ? (
							"collabs"
						) : value < 2 ? (
							<p className="bg-yellowOne p-1 w-8 text-brownOne rounded">New</p>
						) : (
							`${value} comments`
						)}
					</p>
				</div>
			))}

			{isListing && (
				<a href="https://dev.to/listings/new">
					<p className="text-center text-sm border-t pt-2 cursor-pointer hover:text-primaryBlue">
						Create a Listing
					</p>
				</a>
			)}
		</InfoCard>
	)
}

export { PostCard, InfoCard, ListCard }
