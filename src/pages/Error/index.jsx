import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";

function Error() {
	document.title = "Page not found";

	return (
		<div className="content-wrapper">
			<Header />
			<div className="body-wrapper font-arimo py-20 lg:py-40 px-6 md:px-0 lg:px-[10%] xl:px-0 grid grid-cols-1 grid-rows-1 items-center justify-center">
				<div className="flex flex-row justify-around px-0 items-center">
					<div className="left-side flex flex-col gap-y-10">
						<p className="font-bold text-[5.375rem] text-primary-black">404</p>
						<p className="font-bold text-5xl text-primary-black">Page cannot be found!</p>
						<p className="font-arimo text-primary-gray">
							Oops! We couldn't find the page you were looking for. Please check the URL <br /> or try searching for something else. If you think this is an error, please contact <br /> us and we'll do our best to help you out.
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
