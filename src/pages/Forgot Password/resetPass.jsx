import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";

import { resetPassword } from "../../utils/https/auth";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Footer from "../../components/Footer";

const ResetPass = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const searchParams = new URLSearchParams(location.search);

	const verifyCode = searchParams.get("verify");

	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const onChangeForm = (e) => {
		setPassword(e.target.value);
	};

	const resetHandler = (e) => {
		e.preventDefault();

		let invalid = "";

		if (password.length < 8) {
			invalid = "Password must be at least 8 characters";
		}

		setError(invalid);

		if (invalid === "") {
			toast.promise(resetPassword(verifyCode, password), {
				loading: "Please wait...",
				success: () => {
					navigate("/auth");
					return <>Succesfully change password</>;
				},
				error: "Something went wrong",
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
						Reset your old password
					</h2>
					<p className="text-center md:text-left text-base font-arimo text-primary-black mt-5">
						Fill the input field with your new password
					</p>
					<div className="flex flex-col mt-10 gap-y-3">
						<input
							name="password"
							placeholder="Your new password *"
							type="password"
							onChange={onChangeForm}
							className="m-auto w-80 md:w-full p-5 border border-solid border-[#CECECE]"
						></input>
						{error && <div className="text-red-700 font-arimo">{error}</div>}
						<button
							onClick={resetHandler}
							className="m-auto md:m-0 md:mt-5 bg-black hover:bg-white p-5 text-white hover:text-black border border-solid border-primary-black text-base font-arimo font-bold text-center mt-[33px] w-80 md:w-[35%]"
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

export default ResetPass;
