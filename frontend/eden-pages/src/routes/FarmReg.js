import React from "react"
import Navibar from "../components/Navbar"
import Footer from "../components/Footer"
import FarmersRegistrationForm from "../components/Farmers_reg"

const FarmReg = () => {
	return (
		<div>
			<Navibar />
			<FarmersRegistrationForm />
			<Footer />
		</div>
	)
}

export default FarmReg
