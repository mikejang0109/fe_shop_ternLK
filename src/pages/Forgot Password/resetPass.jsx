import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

import { resetPassword } from "../../utils/https/auth";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Footer from "../../components/Footer";

const ResetPass = () => {
	const navigate = useNavigate();

	const [form, setForm] = useState({ otp: "", password: "" });

	const onChangeForm = (e) => {
		setForm((form) => {
			return { ...form, [e.target.name]: e.target.value };
		});
	};

	const resetHandler = (e) => {
		e.preventDefault();

		toast.promise(resetPassword(form.otp, form.password), {
			loading: "Please wait...",
			success: () => {
				navigate("/auth");
				return <>Succesfully change password</>;
			},
			error: "Something went wrong",
		});
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
							name="otp"
							placeholder="Your otp code *"
							type="text"
							onChange={onChangeForm}
							className="m-auto w-80 md:w-full p-5 border border-solid border-[#CECECE]"
						></input>
						<input
							name="password"
							placeholder="Your new password *"
							type="password"
							onChange={onChangeForm}
							className="m-auto w-80 md:w-full p-5 border border-solid border-[#CECECE]"
						></input>
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
