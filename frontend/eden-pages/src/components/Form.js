import React, { useState } from "react"
import { FaSearchLocation, FaPhone, FaEnvelope } from "react-icons/fa"
import axios from "axios"
import "./cont.css"

const ContactForm = () => {
	const [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	})
	const [successMessage, setSuccessMessage] = useState("")
	const [errorMessage, setErrorMessage] = useState("")

	const handleChange = (e) => {
		const { name, value } = e.target
		setData({ ...data, [name]: value })
	}

	const handleSubmit = async (e) => {
		e.preventDefault()

		// Check if any required field is empty
		if (!data.name || !data.email || !data.phone || !data.message) {
			setErrorMessage("All fields are required.")
			setTimeout(() => {
				setErrorMessage("")
			}, 2000)
			return
		}

		// Validate phone number format
		const phoneRegex = /^\+?1?\d{9,15}$/
		if (!phoneRegex.test(data.phone)) {
			setErrorMessage(
				"Invalid phone number. Please enter the correct number of digits and format."
			)
			setTimeout(() => {
				setErrorMessage("")
			}, 2000)
			return
		}

		try {
			// Your API endpoint for handling form submission
			const response = await axios.post(
				"http://127.0.0.1:8000/contact_us/contact_us/",
				data
			)

			console.log(response.data)

			// Set success message and clear form fields
			setSuccessMessage(
				"Thank you for contacting Eden. We will get back to you shortly."
			)
			setData({ name: "", email: "", phone: "", message: "" })

			setTimeout(() => {
				setSuccessMessage("")
			}, 5000)
		} catch (error) {
			console.error("Error submitting contact form:", error)
			setErrorMessage("An error occurred. Please try again later.")
			setTimeout(() => {
				setErrorMessage("")
			}, 2000)
		}
	}

	return (
		<div className="form">
			<form className="sheet" method="post" onSubmit={handleSubmit}>
				<h1 className="conttit">GET IN TOUCH</h1>
				<h2>“Growing Together, Harvesting success”</h2>
				<div className="la">
					<div className="adress">
						<FaSearchLocation className="icon maplocation" beatFade />
						<h3>ADRESS</h3>
						<p>
							Collins Street West <br />
							Victoria8007 Australia
						</p>
					</div>
					<div className="adress">
						<FaPhone className="icon phone" />
						<h3>PHONE</h3>
						<p>
							+01 (0) 12 3456 7890
							<br />
							+01 (0) 12 3456 7891
						</p>
					</div>
					<div className="adress">
						<FaEnvelope className="icon envelope" />
						<h3>EMAIL</h3>
						<p>info@eden.rw</p>
					</div>
				</div>
				<div className="bien">
					<div className="inputs">
						<input
							className="cont-input"
							type="text"
							name="name"
							id=""
							onChange={handleChange}
							value={data.name}
							placeholder="Enter name"
						/>
						<input
							className="cont-input"
							type="email"
							name="email"
							id=""
							onChange={handleChange}
							value={data.email}
							placeholder="Enter your email"
						/>
						<input
							className="cont-input"
							type="tel"
							name="phone"
							id=""
							onChange={handleChange}
							value={data.phone}
							placeholder="Enter phone number"
						/>
					</div>
					<div className="cont-txt">
						<textarea
							name="message"
							id=""
							cols="30"
							rows="2"
							onChange={handleChange}
							value={data.message}
							placeholder="Type here"
						/>
					</div>
				</div>
				<button type="submit" className="btn">
					send
				</button>
			</form>
			{successMessage && (
				<div className="alert alert-success mt-3">{successMessage}</div>
			)}
			{errorMessage && (
				<div className="alert alert-danger mt-3">{errorMessage}</div>
			)}
		</div>
	)
}

export default ContactForm
