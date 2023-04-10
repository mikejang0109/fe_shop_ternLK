import React from "react";

import howToPut from "../../assets/img/how-to-put.webp";
import windowsRegistry from "../../assets/img/windows-registry.webp";
import messesMake from "../../assets/img/messes-make.webp";
import modernLight from "../../assets/img/modern-light.webp";

function Aside() {
	const categories = [
		{
			name: "Furniture",
			qty: 3,
		},
		{
			name: "Interior",
			qty: 4,
		},
		{
			name: "Real Estate",
			qty: 5,
		},
		{
			name: "Construction",
			qty: 8,
		},
		{
			name: "Business",
			qty: 2,
		},
		{
			name: "Industrial",
			qty: 6,
		},
		{
			name: "Furniture",
			qty: 7,
		},
	];

	const newsContents = [
		{
			img: howToPut,
			title: "How To Put Movies On iPhone",
		},
		{
			img: windowsRegistry,
			title: "Windows Registry Cleaner Checklists",
		},
		{
			img: messesMake,
			title: "Messes Make Memories",
		},
		{
			img: modernLight,
			title: "Modern Light House",
		},
	];

	return (
		<aside className="md:w-1/4 flex flex-col gap-y-10">
			<div className="search-bar">
				<div className="relative w-full">
					<input
						type="text"
						placeholder="Search..."
						className="placeholder:text-primary-black placeholder:text-[0.688rem] text-[0.688rem] border border-[#C8C8C8] hover:border-gray-400 focus:outline-none appearance-none bg-white rounded-none h-10 pl-5 pr-10 w-full"
					/>
					<svg
						width="23"
						height="23"
						viewBox="0 0 23 23"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						className="h-[12px] absolute top-[15px] right-[15px] cursor-pointer"
					>
						<path
							fillRule="evenodd"
							clipRule="evenodd"
							d="M17.0381 14.8314L23 20.7933L20.7933 23L14.8314 17.0381C10.8539 19.8682 5.37127 19.178 2.21936 15.4504C-0.932547 11.7227 -0.701937 6.20163 2.74985 2.74985C6.20163 -0.701937 11.7227 -0.932547 15.4504 2.21936C19.178 5.37127 19.8682 10.8539 17.0381 14.8314ZM9.41814 2.14062C5.3978 2.14062 2.13867 5.39975 2.13867 9.42009C2.14326 13.4385 5.3997 16.695 9.41814 16.6996C13.4385 16.6996 16.6976 13.4404 16.6976 9.42009C16.6976 5.39975 13.4385 2.14062 9.41814 2.14062Z"
							fill="#C8C8C8"
						/>
					</svg>
				</div>
			</div>
			<div className="md:flex hidden flex-col gap-y-5">
				<div className="tab-title">
					<p className="font-bold md:text-2xl text-xl">Categories</p>
				</div>
				<div className="tab-content">
					{categories.map((category, idx) => {
						return (
							<div key={idx} className="flex flex-row justify-between">
								<p>{category.name}</p>
								<p>{category.qty}</p>
							</div>
						);
					})}
				</div>
			</div>
			<div className="md:flex hidden flex-col gap-y-5">
				<div className="tab-title">
					<p className="font-bold md:text-2xl text-xl">Recent News</p>
				</div>
				<div className="tab-content">
					{newsContents.map((newsContent, idx) => {
						return (
							<div key={idx}>
								<div className="flex xl:flex-row flex-col gap-x-4 cursor-pointer">
									<div className="news-img h-[70px] w-[70px]">
										<img
											src={newsContent.img}
											alt="news illustration"
											className="object-fill w-full h-full"
										/>
									</div>
									<div className="news-title">
										<p className="font-bold text-sm">{newsContent.title}</p>
										<p className="text-[0.625rem] text-[#3E3E3E]">24 Apr 2019, 45 mins ago</p>
									</div>
								</div>
								{idx === 3 ? null : <div className="divider bg-secondary-gray h-[1px]"></div>}
							</div>
						);
					})}
				</div>
			</div>
			<div className="flex flex-col gap-y-5">
				<div className="tab-title">
					<p className="font-bold md:text-2xl text-xl">Archives</p>
				</div>
				<div>
					<div className="relative w-full">
						<svg
							className="w-2 h-2 absolute top-0 right-[5px] m-4 pointer-events-none"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 412 232"
						>
							<path
								d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
								fill="#648299"
								fillRule="nonzero"
							/>
						</svg>
						<select
							className="border border-[#C8C8C8] rounded-none text-[#212121] h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none w-full"
							name="archive"
							id="archive"
						>
							<option>Select Month</option>
							<option>January</option>
							<option>December</option>
						</select>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-y-5">
				<div className="tab-title">
					<p className="font-bold md:text-2xl text-xl">Tags</p>
				</div>
				<div className="tags flex flex-row flex-wrap gap-2">
					{["furniture", "style", "life style", "zuka", "online-store", "real estate"].map(
						(tag, idx) => {
							return (
								<div
									key={idx}
									className={`cursor-pointer border border-[#D3D3D3] rounded-sm py-2 px-6 ${
										idx === 1 ? "bg-primary-black text-white" : "bg-white text-primary-black"
									}`}
								>
									<p className="text-[0.688rem] text-center">{tag}</p>
								</div>
							);
						}
					)}
				</div>
			</div>
			<div className="md:block hidden">
				<div className="ad-img xl:w-[15rem] w-[10rem] xl:h-[15rem] h-[10rem] bg-cover bg-center bg-advert-bg cursor-pointer">
					<div className="bg-primary-black/70 h-full w-full flex flex-col justify-center items-center px-5 xl:px-0">
						<div>
							<p className="text-white font-bold xl:text-2xl text-lg">Ad Banner</p>
							<p className="text-white">info@la-studioweb.com</p>
						</div>
					</div>
				</div>
			</div>
		</aside>
	);
}

export default Aside;
