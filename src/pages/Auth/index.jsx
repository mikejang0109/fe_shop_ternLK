import React, { useState } from "react";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Login from "./Login";
import Register from "./Register";

function Auth() {
	const tabData = [{ label: "Login Account" }, { label: "Register Account" }];

	const [activeTabIndex, setActiveTabIndex] = useState(0);

	document.title = activeTabIndex === 0 ? "Login" : "Register";

	return (
		<div className="content-wrapper">
			<Header />
			<Title
				isBreadcrumbs={false}
				title="My Account"
				description="Register and log in with your account to be able to shop at will"
			/>
			<section className="main-wrapper py-24 ease-in-out duration-100">
				<main className="flex flex-col lg:flex-row justify-center gap-y-10 lg:gap-x-32 font-arimo">
					<section className="left-side flex flex-row lg:flex-col justify-center lg:justify-normal gap-x-10 md:gap-x-28 lg:gap-y-10 px-4 md:px-0">
						{tabData.map((tab, idx) => {
							return (
								<div key={idx} className="cursor-pointer flex flex-col gap-y-2">
									<p
										className={`md:text-[2rem] text-xl ${
											idx === activeTabIndex ? "text-primary-black" : "text-[#B4B4B4]"
										}`}
										onClick={() => setActiveTabIndex(idx)}
									>
										{tab.label}
									</p>
									{idx === activeTabIndex ? (
										<span className="border-b-2 border-b-[#C2C2C2] w-full md:w-1/2"></span>
									) : null}
								</div>
							);
						})}
					</section>
					{activeTabIndex === 0 ? <Login /> : <Register />}
				</main>
			</section>
		</div>
	);
}

export default Auth;
