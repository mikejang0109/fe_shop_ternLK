import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { Dialog } from "@headlessui/react";

import { authAction } from "../../redux/slices/auth";
import { get, remove } from "../../utils/sessionStorage";
import { logout } from "../../utils/https/auth";

import decorativeVase from "../../assets/img/decorative-vase.png";

import searchIcon from "../../assets/icons/search-icon.svg";
import favIcon from "../../assets/icons/heart-icon.svg";
import cartIcon from "../../assets/icons/cart-icon.svg";
import burgerMenu from "../../assets/icons/hamburger-menu.svg";

function Header() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [toggleState, setToggleState] = useState(false);
	const [isSearch, setIsSearch] = useState(false);
	const [isDialogOpen, setIsDialogOpen] = useState(false);

	const handleToggle = () => setToggleState((toggleState) => !toggleState);

	let burgerActive = toggleState ? "lg:flex" : null;
	let burgerMobileActive = toggleState ? "flex" : null;

	const localToken = useSelector((state) => state.auth.token);
	const sessionToken = get("raz");

	const authNavigate = () => {
		navigate("/auth");
	};

	const handleCloseDialog = () => {
		setIsDialogOpen(false);
	};

	const handleLogout = (e) => {
		e.preventDefault();

		const token = localToken || sessionToken;

		toast.promise(
			logout(token).then((res) => {
				console.log(res["data"]);
				if (localToken) {
					dispatch(authAction.delete(token));
				} else {
					remove("raz");
				}
			}),
			{
				loading: "Please wait...",
				success: () => {
					navigate("/");
					setIsDialogOpen(false);
					return <>Succesfully logged out</>;
				},
				error: () => {
					setIsDialogOpen(false);
					return <>Something went wrong</>
				},
			},
			{ success: { duration: Infinity } }
		);
	};

	return (
		<div className="header-wrapper relative navbar font-arimo lg:flex lg:flex-row lg:justify-between grid grid-cols-2 px-8 lg:px-20">
			<div className="site-title">
				<Link to={"/"}>
					<p className="font-bold text-primary-black text-center text-[2.82rem]">RAZ</p>
				</Link>
			</div>
			<div className="nav-tabs hidden lg:flex flex-row items-center gap-x-4 lg:gap-x-8">
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
							<Link to={"/aboutus"}>
								<p className="bg-primary-black hover:text-white active:text-white pt-8 py-2 px-6 pr-24 block whitespace-nowrap">
									About Us
								</p>
							</Link>
						</li>
						<li>
							<Link to={"/contact"}>
								<p className="bg-primary-black hover:text-white active:text-white py-2 px-6 pr-24 block whitespace-nowrap">
									Contact Us
								</p>
							</Link>
						</li>
						<li>
							<Link to={"/soon"}>
								<p className="bg-primary-black hover:text-white active:text-white py-2 px-6 pr-24 block whitespace-nowrap">
									Coming Soon
								</p>
							</Link>
						</li>
						<li>
							<Link to={"/faq"}>
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
									<Link to={"/products"}>
										<p className="hover:text-white active:text-white">Products</p>
									</Link>
								</li>
								<li>
									<Link to={"/mycart"}>
										<p className="hover:text-white active:text-white">Shopping Cart</p>
									</Link>
								</li>
								<li>
									<Link to={"/checkout"}>
										<p className="hover:text-white active:text-white">Check Out</p>
									</Link>
								</li>
								<li>
									<Link>
										<p className="hover:text-white active:text-white">My Account</p>
									</Link>
								</li>
								<li>
									<Link to={"/tracking"}>
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
					<Link to={"/blog"}>
						<p className="font-bold text-lg">BLOG</p>
					</Link>
				</div>
			</div>
			<div className="nav-utils flex flex-row items-center gap-x-4 lg:gap-x-8 justify-self-end">
				<div className="search-icon hidden lg:block cursor-pointer">
					<img src={searchIcon} alt="search icon" onClick={() => setIsSearch(!isSearch)} />
					<div className={`nav-search ${isSearch ? "top-24" : "top-[-7rem]"}`}>
						<button className="btn bg-primary-black">
							<i className="bi bi-search text-white"></i>
						</button>
						<input
							type="text"
							name="search"
							placeholder="Search..."
							className="input input-bordered input-secondary w-full bg-white rounded-none"
						/>
					</div>
				</div>
				<div className="fav-icon hidden lg:block cursor-pointer" onClick={() => navigate('/wishlist')}>
					<img src={favIcon} alt="heart icon" />
				</div>
				<div className="cart-icon hidden lg:block cursor-pointer">
					<Link to={"/mycart"}>
						<img src={cartIcon} alt="cart icon" />
					</Link>
				</div>
				<div className="hamburger relative cursor-pointer">
					<img src={burgerMenu} alt="hamburger menu" onClick={handleToggle} />
					{localToken || sessionToken ? (
						<div
							className={`absolute text-[#919191] bg-primary-black py-10 pl-6 pr-28 mt-2 right-2 md:hidden ${
								burgerActive || "hidden"
							} flex-col gap-y-5`}
						>
							<p onClick={() => navigate("/profile")} className="hover:text-white active:text-white">Profile</p>
							<p className="hover:text-white active:text-white">Chat</p>
							<p className="hover:text-white active:text-white">Notification</p>
							<p className="hover:text-white active:text-white" onClick={() => setIsDialogOpen(true)}>
								Logout
							</p>
						</div>
					) : (
						<div
							className={`absolute text-[#919191] bg-primary-black py-10 pl-6 pr-28 mt-2 right-2 md:hidden ${
								burgerActive || "hidden"
							} flex-col gap-y-5`}
						>
							<p onClick={authNavigate} className="hover:text-white active:text-white">
								Login
							</p>
							<p onClick={authNavigate} className="hover:text-white active:text-white">
								Register
							</p>
						</div>
					)}
				</div>
			</div>
			<div className="lg:hidden">
				<div
					className={`mobile-menu z-50 absolute top-[65px] right-[0px] w-screen h-screen ease-in-out duration-300 ${
						burgerMobileActive || "hidden"
					} flex-col justify-between py-8 items-center gap-y-10 bg-white rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-60 border-b border-b-slate-400`}
				>
					<div className="nav-utils flex md:flex-row justify-between items-center gap-x-16 md:gap-x-40 px-16 md:px-12">
						<div className="search-icon cursor-pointer">
							<img src={searchIcon} alt="search icon" onClick={() => setIsSearch(!isSearch)} />
							<div className={`nav-search ${isSearch ? "-top-14 md:-top-12" : "top-[-7rem]"}`}>
								<button className="btn bg-primary-black">
									<i className="bi bi-search text-white"></i>
								</button>
								<input
									type="text"
									name="search"
									placeholder="Search..."
									className="input input-bordered input-secondary w-full bg-white rounded-none"
								/>
							</div>
						</div>
						<div className="fav-icon cursor-pointer">
							<img src={favIcon} alt="heart icon" />
						</div>
						<div className="cart-icon cursor-pointer">
							<Link to={"/mycart"}>
								<img src={cartIcon} alt="cart icon" />
							</Link>
						</div>
					</div>
					<div className="flex flex-row justify-center gap-x-16 md:gap-x-60">
						<div className="nav-tabs flex flex-col gap-y-4 md:gap-x-16">
							<div className="active:border-b-2 active:border-b-primary-black hover:border-b-2 hover:border-b-primary-black ease-in-out duration-100">
								<Link to={"/"}>
									<p className="font-bold text-lg">HOME</p>
								</Link>
							</div>
							<div className="pages-tab group inline-block relative active:border-b-2 active:border-b-primary-black hover:border-b-2 hover:border-b-primary-black ease-in-out duration-100">
								<button className="text-primary-black font-bold text-lg py-2 inline-flex items-center">
									<span className="mr-1">PAGES</span>
									<svg
										className="fill-current h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
									</svg>
								</button>
								<ul className="group-hover:block absolute right-[-100px] md:-right-16 hidden text-[#919191] pt-1">
									<li>
										<Link>
											<p className="bg-primary-black hover:text-white active:text-white pt-8 py-2 px-6 pr-24 block whitespace-nowrap">
												About Us
											</p>
										</Link>
									</li>
									<li>
										<Link to={"/contact"}>
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
										<Link to={"/faq"}>
											<p className="bg-primary-black hover:text-white active:text-white pb-8 py-2 px-6 pr-24 block whitespace-nowrap">
												FAQ page
											</p>
										</Link>
									</li>
								</ul>
							</div>
							<div className="shop-tab group inline-block relative active:border-b-2 active:border-b-primary-black hover:border-b-2 hover:border-b-primary-black ease-in-out duration-100">
								<button className="text-primary-black font-bold text-lg py-2 px-0 inline-flex items-center">
									<span className="mr-1">SHOP</span>
									<svg
										className="fill-current h-4 w-4"
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 20 20"
									>
										<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
									</svg>
								</button>
								<div className="text-[#919191] group-hover:block absolute hidden bg-primary-black mt-1 py-10 md:px-10 whitespace-nowrap right-[-170px] md:-right-72">
									<div className="flex md:flex-row flex-col gap-y-4 md:gap-x-10">
										<ul className="flex flex-col md:text-left text-center gap-y-3 text-xs">
											<p className="mb-5 text-base text-white">Other Page</p>
											<li>
												<Link to={"/products"}>
													<p className="hover:text-white active:text-white">Products</p>
												</Link>
											</li>
											<li>
												<Link to={"/mycart"}>
													<p className="hover:text-white active:text-white">Shopping Cart</p>
												</Link>
											</li>
											<li>
												<Link to={"/checkout"}>
													<p className="hover:text-white active:text-white">Check Out</p>
												</Link>
											</li>
											<li>
												<Link>
													<p className="hover:text-white active:text-white">My Account</p>
												</Link>
											</li>
											<li>
												<Link to={"/tracking"}>
													<p className="hover:text-white active:text-white">Other Tracking</p>
												</Link>
											</li>
										</ul>
										<div className="bg-white flex flex-row py-5 pr-32 md:pr-44">
											<img
												className="h-[140px] w-[140px]"
												src={decorativeVase}
												alt="decorative vase"
											/>
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
								<Link to={"/blog"}>
									<p className="font-bold text-lg">BLOG</p>
								</Link>
							</div>
						</div>
						{localToken || sessionToken ? (
							<div className="text-primary-gray flex flex-col gap-x-6 gap-y-6 md:gap-y-6 px-0 ">
								<p onClick={() => navigate("/profile")} className="hover:text-primary-black hover:font-bold active:text-primary-black active:font-bold mx-auto md:mx-0">
									Profile
								</p>
								<p className="hover:text-primary-black hover:font-bold active:text-primary-black active:font-bold mx-auto md:mx-0">
									Chat
								</p>
								<p className="hover:text-primary-black hover:font-bold active:text-primary-black active:font-bold mx-auto md:mx-0">
									Notification
								</p>
								<p
									className="hover:text-primary-black hover:font-bold active:text-primary-black active:font-bold mx-auto md:mx-0"
									onClick={() => setIsDialogOpen(true)}
								>
									Logout
								</p>
							</div>
						) : (
							<div className="text-primary-gray flex flex-col gap-x-6 gap-y-6 md:gap-y-6 px-0 ">
								<p
									onClick={authNavigate}
									className="hover:text-primary-black hover:font-bold active:text-primary-black active:font-bold mx-auto md:mx-0"
								>
									Login
								</p>
								<p
									onClick={authNavigate}
									className="hover:text-primary-black hover:font-bold active:text-primary-black active:font-bold mx-auto md:mx-0"
								>
									Register
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
			<Dialog
				open={isDialogOpen}
				onClose={handleCloseDialog}
				className="fixed z-50 bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 inset-0 overflow-y-auto font-arimo"
			>
				<div className="flex items-center justify-center min-h-screen">
					<div className="bg-white w-1/2 lg:p-16 p-6 rounded-lg shadow-lg text-center z-20">
						<p className="text-2xl font-bold mb-2">Are you sure?</p>
						<div className="logout-button pt-10">
							<button
								onClick={handleLogout}
								className="btn normal-case w-full border-transparent text-white bg-primary-black hover:text-primary-black hover:bg-white disabled:bg-[#DADADA] disabled:text-[#88888F]"
							>
								Yes
							</button>
						</div>
						<div className="cancel-button pt-10">
							<button
								onClick={handleCloseDialog}
								className="btn normal-case w-full border-transparent text-white bg-accent-red hover:text-accent-red hover:bg-white"
							>
								No
							</button>
						</div>
					</div>
				</div>
			</Dialog>
		</div>
	);
}

export default Header;
