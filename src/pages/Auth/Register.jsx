import React from "react";
import { toast } from "react-hot-toast";

import { register } from "../../utils/https/auth";

function Register() {
	const [form, setForm] = React.useState({ email: "", password: "", role: null });

	const [error, setError] = React.useState({ email: "", password: "", role: "" });

	const onChangeForm = (e) => {
		setForm((form) => {
			return { ...form, [e.target.name]: e.target.value };
		});
	};

	const registerHandler = (e) => {
		e.preventDefault();
		toast.dismiss();

		const invalid = { email: "", password: "", role: "" };

		// eslint-disable-next-line no-useless-escape
		const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;

		if (!form.email) {
			invalid.email = "Email is required";
		} else if (!emailRegex.test(form.email)) {
			invalid.email = "Invalid email";
		}

		if (!form.password) {
			invalid.password = "Password is required";
		} else if (form.password.length < 8) {
			invalid.password = "Password must be at least 8 characters";
		}

		if (!form.role) invalid.role = "Choose one from checkbox";

		setError({ email: invalid.email, password: invalid.password, role: invalid.role });

		if (invalid.email === "" && invalid.password === "" && invalid.role === "") {
			toast.promise(
				register(form.email, form.password, form.role).then((res) => {
					console.log(res);
				}),
				{
					loading: () => {
						e.target.disabled = true;
						return <>Please wait...</>;
					},
					success: () => {
						return <>Succesfully registered</>;
					},
					error: (err) => {
						e.target.disabled = false;
						if (err.response["data"]["msg"] === "EMAIL_ALREADY_REGISTERED") {
							return <>Email has already registered</>;
						}
					},
				},
				{ success: { duration: Infinity }, error: { duration: Infinity } }
			);
		}
	};

	return (
		<section className="right-side flex flex-col items-center">
			<div className="form-wrapper flex flex-col gap-y-16">
				<p className="text-primary-black text-[2rem]">Create Account</p>
				<form className="flex flex-col gap-y-6">
					<div className="md:w-[560px]">
						<div className="relative w-full h-[4.375rem]">
							<input
								type="text"
								name="email"
								placeholder="Email address * "
								onChange={onChangeForm}
								className="h-full w-full border border-[#CECECE] bg-transparent px-3 py-2.5 font-arimo text-base placeholder-[#4D4D4D] outline-0 transition-all focus:border-2 focus:border-sky-500 focus:outline-0"
							/>
							{error.email !== "" ? (
								<div className="text-red-700 font-arimo">{error.email}</div>
							) : null}
						</div>
					</div>
					<div className="md:w-[560px]">
						<div className="relative w-full h-[4.375rem]">
							<input
								type="password"
								name="password"
								placeholder="Password * "
								onChange={onChangeForm}
								className="h-full w-full border border-[#CECECE] bg-transparent px-3 py-2.5 font-arimo text-base placeholder-[#4D4D4D] outline-0 transition-all focus:border-2 focus:border-sky-500 focus:outline-0"
							/>
							{error.password !== "" ? (
								<div className="text-red-700 font-arimo">{error.password}</div>
							) : null}
						</div>
					</div>
					<div className="checkbox-wrapper mt-10 flex flex-row gap-x-8">
						<label className="inline-flex items-center">
							<input
								type="radio"
								name="role"
								id="customer"
								value={1}
								onChange={onChangeForm}
								className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
							/>
							<span className="ml-2">I'm Customer</span>
						</label>
						<label className="inline-flex items-center">
							<input
								type="radio"
								name="role"
								id="seller"
								value={2}
								onChange={onChangeForm}
								className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
							/>
							<span className="ml-2">I'm Seller</span>
						</label>
					</div>
					{error.role !== "" ? <div className="text-red-700 font-arimo">{error.role}</div> : null}
					<button
						onClick={registerHandler}
						className="btn mt-10 normal-case rounded-none w-1/4 bg-primary-black text-white hover:text-primary-black"
					>
						Register
					</button>
				</form>
			</div>
		</section>
	);
}

export default Register;
