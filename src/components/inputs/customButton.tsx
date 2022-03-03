/** @format */

import React from "react"

interface button {
	text: string
	className?: string
	url?: string
	onClick?: any
}

const ButtonTransparent: React.FC<button> = ({
	className,
	text,
	url,
	onClick,
}) => {
	const _handleClick = () => {
		if (url) {
			return window.open(url, "_self")
		}
		return onClick && onClick()
	}
	return (
		<div
			onClick={_handleClick}
			className={`${className} px-2 py-1 text-sm cursor-pointer border-secondaryBlue font-semibold text-secondaryBlue hover:bg-secondaryBlue hover:border-transparent hover:text-white hover:underline border-[1px] rounded text-center`}
		>
			{text}
		</div>
	)
}

const ButtonPrimary: React.FC<button> = ({ text, className, url, onClick }) => {
	const _handleClick = () => {
		if (url) {
			return window.open(url, "_self")
		}
		return onClick && onClick()
	}
	return (
		<div
			onClick={_handleClick}
			className={`${className} px-2 py-2 cursor-pointer text-sm hover:bg-primaryBlue bg-secondaryBlue font-semibold text-white rounded text-center`}
		>
			{text}
		</div>
	)
}

const ButtonSecondary: React.FC<button> = ({
	text,
	className,
	url,
	onClick,
}) => {
	const _handleClick = () => {
		if (url) {
			return window.open(url, "_self")
		}
		return onClick && onClick()
	}
	return (
		<div
			onClick={_handleClick}
			className={`${className} px-2 py-1 cursor-pointer text-sm hover:bg-primaryBg bg-transparent hover:text-secondaryBlue hover:underline text-primaryGray rounded text-center`}
		>
			{text}
		</div>
	)
}

export { ButtonTransparent, ButtonPrimary, ButtonSecondary }
