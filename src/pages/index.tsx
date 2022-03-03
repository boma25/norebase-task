/** @format */

import React from "react"
import Layout from "../components/layout"
import LeftColumn from "../components/layout/leftColumn"
import RightColumn from "../components/layout/rightColumn"
import CenterColumn from "../components/layout/centerColumn"

const HomePage: React.FC = () => {
	return <Layout {...{ LeftColumn, RightColumn, CenterColumn }} />
}

export default HomePage
