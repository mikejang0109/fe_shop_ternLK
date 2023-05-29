import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-hot-toast";

import { resetPassword, verifyResetPassword } from "../../utils/https/auth";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Footer from "../../components/Footer";

document.title = "Reset your old password";

const ResetPass = () => {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [isNotFound, setIsNotFound] = useState(false);

	useEffect(() => {
		setIsLoading(true);

		verifyResetPassword(searchParams.get("verify"))
			.then(() => setIsLoading(false))
			.catch((err) => {
				console.log(err);
				setIsNotFound(true);
				setIsLoading(false);
			});
	}, [searchParams]);

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
			e.target.disabled = true;

			toast.promise(resetPassword(searchParams.get("verify"), password), {
				loading: "Please wait...",
				success: () => {
					e.target.disabled = false;
					navigate("/auth");
					return <>Succesfully change password</>;
				},
				error: () => {
					e.target.disabled = false;
					return <>Something went wrong</>
				},
			});
		}
	};

	const Loader = () => {
		return (
			<div className="h-screen flex flex-col items-center justify-center">
				<svg
					className="w-40 h-40 animate-spin text-indigo-400"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M12 4.75V6.25"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
					<path
						d="M17.1266 6.87347L16.0659 7.93413"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
					<path
						d="M19.25 12L17.75 12"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
					<path
						d="M17.1266 17.1265L16.0659 16.0659"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
					<path
						d="M12 17.75V19.25"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
					<path
						d="M7.9342 16.0659L6.87354 17.1265"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
					<path
						d="M6.25 12L4.75 12"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
					<path
						d="M7.9342 7.93413L6.87354 6.87347"
						stroke="currentColor"
						strokeWidth="1.5"
						strokeLinecap="round"
						strokeLinejoin="round"
					></path>
				</svg>
			</div>
		);
	};

	const NotFound = () => {
		return (
			<div className="h-screen flex flex-col items-center justify-center">
				<p className="text-accent-red font-arimo font-bold text-6xl">The link has expired</p>
			</div>
		);
	};

	return (
		<>
			<Header />
			{isLoading === true ? (
				<Loader />
			) : isNotFound === true ? (
				<NotFound />
			) : (
				<>
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
									className="m-auto md:m-0 md:mt-5 bg-black hover:bg-white disabled:bg-primary-gray p-5 text-white hover:text-black disabled:text-tertiary-gray border border-solid border-primary-black text-base font-arimo font-bold text-center mt-[33px] w-80 md:w-[35%]"
								>
									Reset Password
								</button>
							</div>
						</section>
					</section>
				</>
			)}
			<Footer />
		</>
	);
};

export default ResetPass;
