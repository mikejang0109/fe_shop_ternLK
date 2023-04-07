import React from "react";
import { Link } from "react-router-dom";

function Login() {
	return (
		<section className="right-side">
			<div className="form-wrapper flex flex-col gap-y-16">
				<p className="text-primary-black text-[2rem]">Login</p>
				<form className="flex flex-col gap-y-2">
					<div className="w-[560px]">
						<div className="relative w-full h-[4.375rem]">
							<input
								type="text"
								placeholder="User name or email address * "
								className="h-full w-full border border-[#CECECE] bg-transparent px-3 py-2.5 font-arimo text-base placeholder-[#4D4D4D] outline-0 transition-all focus:border-2 focus:border-sky-500 focus:outline-0"
							/>
						</div>
					</div>
					<div className="w-[560px]">
						<div className="relative w-full h-[4.375rem]">
							<input
								type="text"
								placeholder="Password * "
								className="h-full w-full border border-[#CECECE] bg-transparent px-3 py-2.5 font-arimo text-base placeholder-[#4D4D4D] outline-0 transition-all focus:border-2 focus:border-sky-500 focus:outline-0"
							/>
						</div>
					</div>
					<button className="btn mt-10 normal-case rounded-none w-1/4 bg-primary-black text-white hover:text-primary-black">
						Login
					</button>
				</form>
				<div className="bottom-form-wrapper flex flex-row gap-x-6">
					<div className="checkbox-wrapper">
						<label className="inline-flex items-center">
							<input
								type="checkbox"
								name="remember"
								id="remember"
								className="h-4 w-4 rounded-none cursor-pointer"
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
