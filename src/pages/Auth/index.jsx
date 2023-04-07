import React, { useState } from "react";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Login from "./Login";
import Register from "./Register";

function Auth() {
	const tabData = [{ label: "Login Account" }, { label: "Register Account" }];

	const [activeTabIndex, setActiveTabIndex] = useState(0);
	console.log(activeTabIndex);

	return (
		<div className="content-wrapper">
			<Header />
			<Title
				isBreadcrumbs={false}
				title="My Account"
				description="Register and log in with your account to be able to shop at will"
			/>
			<section className="main-wrapper py-24">
				<main className="flex flex-row justify-center gap-x-32 font-arimo">
					<section className="left-side flex flex-col gap-y-10">
						{tabData.map((tab, idx) => {
							return (
								<div className="cursor-pointer flex flex-col gap-y-2">
									<p
										className={`text-[2rem] ${
											idx === activeTabIndex ? "text-primary-black" : "text-[#B4B4B4]"
										}`}
										onClick={() => setActiveTabIndex(idx)}
									>
										{tab.label}
									</p>
									{idx === activeTabIndex ? (
										<span className="border-b-2 border-b-[#C2C2C2] w-1/2"></span>
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
