import React, { useState, useEffect } from "react";
import { toast } from "react-hot-toast";

import { forgotPassword } from "../../utils/https/auth";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Footer from "../../components/Footer";

const ForgotPass = () => {
	const [email, setEmail] = useState("");
	const [error, setError] = useState("");

	useEffect(() => {
		document.title = "Forgot your password?";
	}, []);

	const onFormChange = (e) => {
		setEmail(e.target.value);
	};

	const forgotHandler = (e) => {
		e.preventDefault();

		let invalid = "";

		// eslint-disable-next-line no-useless-escape
		const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;

		if (!email) {
			invalid = "Email is required";
		} else if (!emailRegex.test(email)) {
			invalid = "Invalid email";
		}

		setError(invalid);

		if (invalid === "") {
			e.target.disabled = true;

			toast.promise(forgotPassword(email), {
				loading: "Please wait...",
				success: () => {
					e.target.disabled = false;
					return <>Check your email inbox</>
				},
				error: () => {
					e.target.disabled = false;
					<>Something went wrong</>
				},
			});
		}
	};

	return (
		<>
			<Header />
			<Title
				isBreadcrumbs={false}
				title="My Account"
				description="Register and log in with your account to be able to shop at will"
			/>
			<section>
				<section className="h-[468px] m-auto w-full  md:w-[560px] ">
					<h2 className="text-center md:text-left font-arimo font-normal text-[2rem] text-primary-black mt-20">
						Forgot your password?
					</h2>
					<p className="text-center md:text-left text-base font-arimo text-primary-black mt-5">
						Don't worry! Just fill in your email and we'll send you a link
					</p>
					<div className="flex flex-col mt-10">
						<input
							onChange={onFormChange}
							placeholder="Your email address *"
							type="email"
							className="m-auto w-80 md:w-full p-5 border border-solid border-[#CECECE]"
						></input>
						{error && <div className="text-red-700 font-arimo">{error}</div>}
						<button
							onClick={forgotHandler}
							className="m-auto md:m-0 md:mt-5 bg-black hover:bg-white disabled:bg-primary-gray p-5 text-white hover:text-black disabled:text-tertiary-gray border border-solid border-primary-black text-base font-arimo font-bold text-center mt-[33px] w-80 md:w-[35%]"
						>
							Reset Password
						</button>
					</div>
				</section>
			</section>
			<Footer />
		</>
	);
};

export default ForgotPass;
