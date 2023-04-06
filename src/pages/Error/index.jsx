import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";

function Error() {
	document.title = "Error";

	return (
		<div className="content-wrapper">
			<Header />
			<div className="body-wrapper font-arimo py-40 grid grid-cols-1 grid-rows-1 items-center justify-center">
				<div className="flex flex-row justify-around px-0 items-center">
					<div className="left-side flex flex-col gap-y-10">
						<p className="font-bold text-[5.375rem] text-primary-black">404</p>
						<p className="font-bold text-5xl text-primary-black">Page cannot be found!</p>
						<p className="font-arimo text-primary-gray">
							Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam
							auctor <br /> commodo. Curabitur blandit ultrices exurabitur ut magna dignissim,
							dignissi
						</p>
						<div className="flex flex-row justify-start items-center">
							<p className="bar w-[25%] h-[2px] mr-4 bg-primary-black"></p>
							<Link to={"/"}>
								<p className="font-arimo font-bold text-primary-black">BACK TO HOMEPAGE</p>
							</Link>
						</div>
					</div>
					<div className="right-side lg:block hidden">
						<div className="bg-secondary-gray h-[365px] w-[365px] rounded-full"></div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Error;
