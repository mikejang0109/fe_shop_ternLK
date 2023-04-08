import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

import { login } from "../../utils/https/auth";
import { authAction } from "../../redux/slices/auth";
import { save } from "../../utils/sessionStorage";

function Login() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [form, setForm] = React.useState({ email: "", password: "" });
	const [isRemember, setIsRemember] = React.useState(false);

	const [error, setError] = React.useState({ email: "", password: "" });

	const handleRedirect = () => navigate("/");

	const loginHandler = (e) => {
		e.preventDefault();
		toast.dismiss();

		const invalid = { email: "", password: "" };

		// eslint-disable-next-line no-useless-escape
		const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/gm;

		if (!form.email) {
			invalid.email = "Email is required";
		} else if (!emailRegex.test(form.email)) {
			invalid.email = "Invalid email";
		}

		if (!form.password) invalid.password = "Password is required";

		setError({ email: invalid.email, password: invalid.password });

		if (invalid.email === "" && invalid.password === "") {
			toast.promise(
				login(form.email, form.password).then((res) => {
					const token = res["data"]["data"]["token"];

					if (isRemember === false) {
						save("raz", token);
					} else {
						dispatch(authAction.save(token));
					}
				}),
				{
					loading: () => {
						e.target.disabled = true;
						return <>Please wait...</>;
					},
					success: () => {
						handleRedirect();
						return <>Welcome to RAZ Furniture Shop!</>;
					},
					error: () => {
						e.target.disabled = false;
						return <>Invalid email or password</>;
					},
				},
				{ success: { duration: Infinity }, error: { duration: Infinity } }
			);
		}
	};

	const onChangeForm = (e) => {
		setForm((form) => {
			return { ...form, [e.target.name]: e.target.value };
		});
	};

	const onChangeRemember = (e) => {
		setIsRemember(e.target.checked);
	};

	return (
		<section className="right-side flex flex-col items-center">
			<div className="form-wrapper flex flex-col gap-y-16">
				<p className="text-primary-black text-[2rem]">Login</p>
				<form className="flex flex-col gap-y-6">
					<div className="md:w-[560px]">
						<div className="relative w-full h-[4.375rem]">
							<input
								type="text"
								name="email"
								placeholder="User name or email address * "
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
					<button
						onClick={loginHandler}
						className="btn mt-10 normal-case rounded-none w-1/4 bg-primary-black text-white hover:text-primary-black"
					>
						Login
					</button>
				</form>
				<div className="bottom-form-wrapper flex flex-col md:flex-row gap-y-6 md:gap-x-6">
					<div className="checkbox-wrapper">
						<label className="inline-flex items-center">
							<input
								type="checkbox"
								name="remember"
								onChange={onChangeRemember}
								id="remember"
								className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
							/>
							<span className="ml-2">Remember me</span>
						</label>
					</div>
					<div className="forget-pwd">
						<Link>
							<p className="text-[#D25B5B]">Forget your password?</p>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Login;
