import React, { useState } from "react";
import { Link } from "react-router-dom";

import decorativeVase from "../../assets/img/decorative-vase.png";

import searchIcon from "../../assets/icons/search-icon.svg";
import favIcon from "../../assets/icons/heart-icon.svg";
import cartIcon from "../../assets/icons/cart-icon.svg";
import burgerMenu from "../../assets/icons/hamburger-menu.svg";

function Header() {
	const [toggleState, setToggleState] = useState(false);
	const handleToggle = () => setToggleState((toggleState) => !toggleState);
	let burgerActive = toggleState ? "flex" : null;

	return (
		<div className="header-wrapper navbar font-arimo flex flex-row justify-between px-8 lg:px-20">
			<div className="site-title">
				<p className="font-bold text-primary-black text-center text-[2.82rem]">RAZ</p>
			</div>
			<div className="nav-tabs flex flex-row items-center gap-x-4 lg:gap-x-8">
				<div className="active:border-b-2 active:border-b-primary-black hover:border-b-2 hover:border-b-primary-black ease-in-out duration-100">
					<Link to={"/"}>
						<p className="font-bold text-lg">HOME</p>
					</Link>
				</div>
				<div className="pages-tab group inline-block relative active:border-b-2 active:border-b-primary-black hover:border-b-2 hover:border-b-primary-black ease-in-out duration-100">
					<button className="text-primary-black font-bold text-lg py-2 px-4 inline-flex items-center">
						<span className="mr-1">PAGES</span>
						<svg
							className="fill-current h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
						</svg>
					</button>
					<ul className="group-hover:block absolute hidden text-[#919191] pt-1">
						<li>
							<Link>
								<p className="bg-primary-black hover:text-white active:text-white pt-8 py-2 px-6 pr-24 block whitespace-nowrap">
									About Us
								</p>
							</Link>
						</li>
						<li>
							<Link>
								<p className="bg-primary-black hover:text-white active:text-white py-2 px-6 pr-24 block whitespace-nowrap">
									Contact Us
								</p>
							</Link>
						</li>
						<li>
							<Link>
								<p className="bg-primary-black hover:text-white active:text-white py-2 px-6 pr-24 block whitespace-nowrap">
									Coming Soon
								</p>
							</Link>
						</li>
						<li>
							<Link>
								<p className="bg-primary-black hover:text-white active:text-white pb-8 py-2 px-6 pr-24 block whitespace-nowrap">
									FAQ page
								</p>
							</Link>
						</li>
					</ul>
				</div>
				<div className="shop-tab group inline-block relative active:border-b-2 active:border-b-primary-black hover:border-b-2 hover:border-b-primary-black ease-in-out duration-100">
					<button className="text-primary-black font-bold text-lg py-2 px-4 inline-flex items-center">
						<span className="mr-1">SHOP</span>
						<svg
							className="fill-current h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
						</svg>
					</button>
					<div className="text-[#919191] group-hover:block absolute hidden bg-primary-black mt-1 py-10 px-10 whitespace-nowrap right-[-280px]">
						<div className="flex flex-row gap-x-10">
							<ul className="flex flex-col gap-y-3 text-xs">
								<p className="mb-5 text-base text-white">Other Page</p>
								<li>
									<Link>
										<p className="hover:text-white active:text-white">Shopping Cart</p>
									</Link>
								</li>
								<li>
									<Link>
										<p className="hover:text-white active:text-white">Check Out</p>
									</Link>
								</li>
								<li>
									<Link>
										<p className="hover:text-white active:text-white">My Account</p>
									</Link>
								</li>
								<li>
									<Link>
										<p className="hover:text-white active:text-white">Other Tracking</p>
									</Link>
								</li>
							</ul>
							<div className="bg-white flex flex-row py-5 pr-44">
								<img className="h-[140px] w-[140px]" src={decorativeVase} alt="decorative vase" />
								<div className="pr-7 flex flex-col justify-center">
									<p className="text-primary-black">
										Decorative Ceramic
										<br />
										Accent Vases
									</p>
									<p className="text-accent-red text-4xl mb-4">Off 50%</p>
									<button className="bg-black text-white font-bold text-sm py-2 px-8">
										Shop Now
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="active:border-b-primary-black hover:border-b-2 hover:border-b-primary-black ease-in-out duration-100">
					<Link>
						<p className="font-bold text-lg">BLOG</p>
					</Link>
				</div>
			</div>
			<div className="nav-utils flex flex-row items-center gap-x-4 lg:gap-x-8">
				<div className="search-icon cursor-pointer">
					<img src={searchIcon} alt="search icon" />
				</div>
				<div className="fav-icon cursor-pointer">
					<img src={favIcon} alt="heart icon" />
				</div>
				<div className="cart-icon cursor-pointer">
					<img src={cartIcon} alt="cart icon" />
				</div>
				<div className="hamburger relative cursor-pointer">
					<img src={burgerMenu} alt="hamburger menu" onClick={handleToggle} />
					<div
						className={`absolute text-[#919191] bg-primary-black py-10 pl-6 pr-28 mt-2 right-2 ${
							burgerActive || "hidden"
						} flex-col gap-y-5`}
					>
						<p className="hover:text-white active:text-white">Profile</p>
						<p className="hover:text-white active:text-white">Chat</p>
						<p className="hover:text-white active:text-white">Notification</p>
						<p className="hover:text-white active:text-white">Logout</p>
						{/* Conditional Rendering */}
						{/* <p className="hover:text-white active:text-white">Login</p>
						<p className="hover:text-white active:text-white">Register</p>
						<p className="hover:text-white active:text-white">Chat</p>
						<p className="hover:text-white active:text-white">Notification</p> */}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
