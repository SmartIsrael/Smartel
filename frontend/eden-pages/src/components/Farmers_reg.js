import React, { useState } from "react"
import axios from "axios"
import "./Farmers_reg.css"
import { Link } from "react-router-dom"

const FarmersRegistrationForm = () => {
	// State variables to hold form data and success message
	const [name, setName] = useState("")
	const [phoneNumber, setPhoneNumber] = useState("")
	const [location, setLocation] = useState("")
	const [product, setProduct] = useState("")
	const [successMessage, setSuccessMessage] = useState("")
	const [errorMessage, setErrorMessage] = useState("")

	const FarmersRegistrationInfo = async () => {
		try {
			// Check if required fields are filled
			if (!name || !phoneNumber || !location || !product) {
				setErrorMessage("All fields are required.")
				setTimeout(() => {
					setErrorMessage("")
				}, 2000)
				return
			}

			// Validate phone number format
			const phoneRegex = /^\+?1?\d{9,15}$/
			if (!phoneRegex.test(phoneNumber)) {
				setErrorMessage(
					"Invalid phone number. Please enter the correct number of digits and format."
				)
				setTimeout(() => {
					setErrorMessage("")
				}, 2000)
				return
			}

			// Additional validation for char fields (e.g., limiting the length)
			const maxNameLength = 100
			if (name.length > maxNameLength) {
				setErrorMessage(`Name should not exceed ${maxNameLength} characters.`)
				setTimeout(() => {
					setErrorMessage("")
				}, 2000)
				return
			}

			const maxLocationLength = 100
			if (location.length > maxLocationLength) {
				setErrorMessage(
					`Location should not exceed ${maxLocationLength} characters.`
				)
				setTimeout(() => {
					setErrorMessage("")
				}, 2000)
				return
			}

			const maxProductLength = 100
			if (product.length > maxProductLength) {
				setErrorMessage(
					`Product should not exceed ${maxProductLength} characters.`
				)
				setTimeout(() => {
					setErrorMessage("")
				}, 2000)
				return
			}

			let formfield = new FormData()
			formfield.append("name", name)
			formfield.append("phoneNumber", phoneNumber)
			formfield.append("location", location)
			formfield.append("product", product)

			const response = await axios.post(
				"http://127.0.0.1:8000/farmers/farmers/",
				formfield
			)

			console.log(response.data)

			// Set success message and clear form fields
			setSuccessMessage(
				"Your registration has been received. Eden team will get back to you shortly."
			)
			setName("")
			setPhoneNumber("")
			setLocation("")
			setProduct("")

			setTimeout(() => {
				setSuccessMessage("")
			}, 5000)
		} catch (error) {
			console.error("Error registering farmer:", error)
		}
	}

	return (
		<div className="bob3">
			<h1 className="bob">
				<span>Register</span> as a Farmer Today
			</h1>
			<div className="container">
				<div className="form-group">
					<input
						type="text"
						className="form-control form-control-lg"
						placeholder="Enter your name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						className="form-control form-control-lg"
						placeholder="Enter your phone number"
						name="phoneNumber"
						value={phoneNumber}
						onChange={(e) => setPhoneNumber(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						className="form-control form-control-lg"
						placeholder="Where is your farm located"
						name="location"
						value={location}
						onChange={(e) => setLocation(e.target.value)}
						required
					/>
				</div>
				<div className="form-group">
					<input
						type="text"
						className="form-control form-control-lg"
						placeholder="What farm produce are you selling"
						name="product"
						value={product}
						onChange={(e) => setProduct(e.target.value)}
						required
					/>
				</div>

				<button className="btn btn-success" onClick={FarmersRegistrationInfo}>
					Register
				</button>

				{successMessage && (
					<div className="alert alert-success mt-3">{successMessage}</div>
				)}

				{errorMessage && (
					<div className="alert alert-danger mt-3">{errorMessage}</div>
				)}
			</div>
			<div className="Register">
				<p>You already have an account ?</p>
				{/* Use the Link component for internal links */}
				<Link to="/LoginPage" className="options">
					Log in
				</Link>
			</div>
			<div className="Log2">
				<p>You are a regular user ?</p>
				<Link to="/RegPage" className="farmerl">
					Register an account
				</Link>
			</div>
		</div>
	)
}

export default FarmersRegistrationForm
