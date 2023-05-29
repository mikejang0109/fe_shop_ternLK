import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { getProduct } from "../../utils/https/product";

import triangle from "../../assets/icons/triangle-icon.svg";
import filter from "../../assets/icons/filter-icon.jpg";

import Loader from "../../components/Loader";
import Title from "../../components/Title";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const CheckboxGroup = ({ selectedOption, onChange }) => {
	const handleCheckboxChange = (value) => {
		if (selectedOption === value) {
			onChange("");
		} else {
			onChange(value);
		}
	};

	return (
		<div className="flex flex-col justify-center items-start gap-5">
			{options.map((option) => (
				<label key={option.value} className="flex justify-start items-center gap-5">
					<input
						type="checkbox"
						name="remember"
						id={`remember-${option.value}`}
						value={option.value}
						checked={selectedOption === option.value}
						className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
						onChange={() => handleCheckboxChange(option.value)}
					/>
					<p className="text-sm">{option.label}</p>
				</label>
			))}
		</div>
	);
};

const options = [
	{ value: "2", label: "IKEA" },
	{ value: "3", label: "Ashley Furniture" },
	{ value: "4", label: "Herman Miller" },
	{ value: "5", label: "La-Z-Boy" },
	{ value: "6", label: "Crate & Barrel" },
];

const SizeCheckboxes = ({ selectedOption, onChange }) => {
	const handleCheckboxChange = (value) => {
		if (selectedOption === value) {
			onChange("");
		} else {
			onChange(value);
		}
	};

	return (
		<div className="flex justify-start items-center gap-3 flex-wrap">
			{sizeOptions.map((option, index) => (
				<label key={option.value} className="relative w-12 h-12 cursor-pointer">
					<input
						className="peer absolute opacity-0"
						type="checkbox"
						name="sizes"
						id={`option${index}`}
						value={option.value}
						onChange={() => handleCheckboxChange(option.value)}
						checked={selectedOption === option.value}
					/>
					<div className="peer-checked:bg-black peer-checked:text-white border w-12 h-12 border-tertiary-gray border-solid flex justify-center items-center">
						<p>{option.label}</p>
					</div>
				</label>
			))}
		</div>
	);
};

const sizeOptions = [
	{ value: 1, label: "S" },
	{ value: 2, label: "M" },
	{ value: 3, label: "L" },
	{ value: 4, label: "XL" },
	{ value: 5, label: "2XL" },
];

const Products = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const controller = useMemo(() => new AbortController(), []);

	const [showSort, setShowSort] = useState(false);
	const [filterModal, setFilterModal] = useState(false);
	const [productList, setProductList] = useState([]);
	const [categories, setCategories] = useState(null);
	const [minPrice] = useState(10000);
	const [maxPrice, setMaxPrice] = useState(null);
	const [brands, setBrands] = useState(null);
	const [colors, setColors] = useState(null);
	const [sizes, setSizes] = useState(null);
	const [errMsg, setErrMsg] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		getProduct(location.search, controller)
			.then((res) => {
				setProductList(res.data);
				setErrMsg(null);
				setIsLoading(false);
			})
			.catch((err) => {
				setErrMsg(err.response.data.msg);
				setIsLoading(false);
			});
	}, [controller, location]);

	const openSort = () => {
		showSort === false ? setShowSort(true) : setShowSort(false);
	};

	const openProductDetail = (id) => {
		navigate(`/product/${id}`);
	};

	const addSort = (sort) => {
		const searchParams = new URLSearchParams(location.search);
		searchParams.delete("sort"); // Remove any existing "sort" parameters
		searchParams.append("sort", sort); // Add the new "sort" parameter
		navigate(`?${searchParams.toString()}`);
		setShowSort(false);
	};

	const searchHandler = (keyword) => {
		const searchParams = new URLSearchParams(location.search);
		searchParams.delete("search");
		searchParams.append("search", keyword);
		navigate(`?${searchParams.toString()}`);
	};

	const addCategories = (id) => {
		const searchParams = new URLSearchParams(location.search);

		if (id === categories) {
			setCategories(null); // deselect the clicked category
			navigate(``);
		} else {
			setCategories(id); // select the clicked category
			searchParams.delete("category");
			searchParams.append("category", id);
			navigate(`?${searchParams.toString()}`);
		}
	};

	const addBrands = (value) => {
		const searchParams = new URLSearchParams(location.search);

		setBrands(value);
		searchParams.delete("brand");
		searchParams.append("brand", value);
		navigate(`?${searchParams.toString()}`);
	};

	const addSizes = (value) => {
		const searchParams = new URLSearchParams(location.search);

		setSizes(value);
		searchParams.delete("sizes");
		searchParams.append("sizes", value);
		navigate(`?${searchParams.toString()}`);
	};

	const setPrice = () => {
		const searchParams = new URLSearchParams(location.search);

		searchParams.delete("min_price");
		searchParams.append("min_price", minPrice);
		searchParams.delete("max_price");
		searchParams.append("max_price", maxPrice);
		navigate(`?${searchParams.toString()}`);
	};

	const colorFilter = (id) => {
		const newColors = colors === id ? "" : id;
		const searchParams = new URLSearchParams(location.search);

		setColors(newColors);
		searchParams.delete("colors");
		searchParams.append("colors", newColors);
		navigate(`?${searchParams.toString()}`);
	};

	document.title = "Products";

	return (
		<React.Fragment>
			<Header searchFunc={searchHandler} />
			<Title
				isBreadcrumbs={true}
				breadcrumbs="Shop"
				breadcrumbs2="Shop Right Sidebar"
				title="Let's Shopping"
				description="Find and buy the one you like"
			/>
			<main className="p-[5%] flex justify-center items-start relative">
				<section
					className={
						isLoading ?
						`fixed z-50 bg-white-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-20 inset-0 overflow-y-auto`
						: ""
					}
				>
					{isLoading && <Loader />}
				</section>

				{/* aside start */}
				<aside className="w-[25%] pr-5 hidden md:block">
					<section className="pb-14">
						<p className="font-bold pb-5 text-2xl">Categories</p>
						<div className="flex flex-col justify-center items-stretch gap-1">
							<div
								className="flex items-center justify-between cursor-pointer hover:bg-primary-black hover:text-white py-2"
								onClick={() => addCategories(1)}
							>
								<p className={`text-sm cursor-pointer ${categories === 1 && "font-bold"}`}>
									Accessories
								</p>
								<p className="text-sm"></p>
							</div>
							<div
								className="flex items-center justify-between cursor-pointer hover:bg-primary-black hover:text-white py-2"
								onClick={() => addCategories(2)}
							>
								<p className={`text-sm cursor-pointer ${categories === 2 && "font-bold"}`}>
									Brands
								</p>
								<p className="text-sm"></p>
							</div>
							<div
								className="flex items-center justify-between cursor-pointer hover:bg-primary-black hover:text-white py-2"
								onClick={() => addCategories(3)}
							>
								<p className={`text-sm cursor-pointer ${categories === 3 && "font-bold"}`}>
									Clothing
								</p>
								<p className="text-sm"></p>
							</div>
							<div
								className="flex items-center justify-between cursor-pointer hover:bg-primary-black hover:text-white py-2"
								onClick={() => addCategories(4)}
							>
								<p className={`text-sm cursor-pointer ${categories === 4 && "font-bold"}`}>
									Fashion
								</p>
								<p className="text-sm"></p>
							</div>
							<div
								className="flex items-center justify-between cursor-pointer hover:bg-primary-black hover:text-white py-2"
								onClick={() => addCategories(5)}
							>
								<p className={`text-sm cursor-pointer ${categories === 5 && "font-bold"}`}>
									Furniture
								</p>
								<p className="text-sm"></p>
							</div>
							<div
								className="flex items-center justify-between cursor-pointer hover:bg-primary-black hover:text-white py-2"
								onClick={() => addCategories(6)}
							>
								<p className={`text-sm cursor-pointer ${categories === 6 && "font-bold"}`}>Men</p>
								<p className="text-sm"></p>
							</div>
							<div
								className="flex items-center justify-between cursor-pointer hover:bg-primary-black hover:text-white py-2"
								onClick={() => addCategories(7)}
							>
								<p className={`text-sm cursor-pointer ${categories === 7 && "font-bold"}`}>Woman</p>
								<p className="text-sm"></p>
							</div>
							<div
								className="flex items-center justify-between cursor-pointer hover:bg-primary-black hover:text-white py-2"
								onClick={() => addCategories(8)}
							>
								<p className={`text-sm cursor-pointer ${categories === 8 && "font-bold"}`}>Shoes</p>
								<p className="text-sm"></p>
							</div>
							<div
								className="flex items-center justify-between cursor-pointer hover:bg-primary-black hover:text-white py-2"
								onClick={() => addCategories(9)}
							>
								<p className={`text-sm cursor-pointer ${categories === 9 && "font-bold"}`}>
									Wallet
								</p>
								<p className="text-sm"></p>
							</div>
						</div>
					</section>
					<section className="pb-14">
						<p className="font-bold pb-5 text-2xl">Price</p>
						<div className="flex flex-col justify-center items-start gap-3">
							<p className="text-sm">
								Price IDR 10.000 - IDR{" "}
								{maxPrice === null ? "10.001" : parseInt(maxPrice).toLocaleString("id-ID")}
							</p>
							<input
								type="range"
								min={10000}
								max={10000000}
								className="w-full "
								value={maxPrice}
								onChange={(e) => setMaxPrice(e.target.value)}
							/>
							<button
								type="button"
								className="btn bg-primary-black text-white hover:bg-white hover:text-primary-black"
								onClick={setPrice}
							>
								Filter
							</button>
						</div>
					</section>
					<section className="pb-14">
						<p className="font-bold pb-5 text-2xl">Brands</p>
						<CheckboxGroup options={options} selectedOption={brands} onChange={addBrands} />
					</section>
					<section className="pb-14">
						<p className="font-bold pb-5 text-2xl">Colors</p>
						<div className="flex justify-center items-center gap-4 flex-wrap">
							<button
								className={`h-4 w-4 rounded-full bg-[#008080] cursor-pointer ${
									colors === 1 && "scale-110"
								}`}
								type="button"
								onClick={() => colorFilter(1)}
							></button>
							<button
								className={`h-4 w-4 rounded-full bg-[#000080] cursor-pointer ${
									colors === 2 && "scale-110"
								}`}
								type="button"
								onClick={() => colorFilter(2)}
							></button>
							<button
								className={`h-4 w-4 rounded-full bg-[#ffffff] border border-solid border-black cursor-pointer ${
									colors === 3 && "scale-110"
								}`}
								type="button"
								onClick={() => colorFilter(3)}
							></button>
							<button
								className={`h-4 w-4 rounded-full bg-black border border-solid border-black cursor-pointer ${
									colors === 4 && "scale-110"
								}`}
								type="button"
								onClick={() => colorFilter(4)}
							></button>
							<button
								className={`h-4 w-4 rounded-full bg-[#000075] border border-solid border-black cursor-pointer ${
									colors === 5 && "scale-110"
								}`}
								type="button"
								onClick={() => colorFilter(5)}
							></button>
							<button
								className={`h-4 w-4 rounded-full bg-[#1a1718] border border-solid border-black cursor-pointer ${
									colors === 6 && "scale-110"
								}`}
								type="button"
								onClick={() => colorFilter(6)}
							></button>
						</div>
					</section>
					<section className="pb-14">
						<p className="font-bold pb-5 text-2xl">Sizes</p>
						<div className="flex justify-start items-center gap-3 flex-wrap">
							<SizeCheckboxes options={sizeOptions} selectedOption={sizes} onChange={addSizes} />
						</div>
					</section>
				</aside>
				{/* aside end */}

				<section className="w-full md:w-[75%] flex flex-col items-center relative min-h-screen">
					<nav className="flex justify-between items-center pb-3 w-full">
						<div className="flex justify-center items-center md:hidden gap-2">
							<button className="" onClick={() => setFilterModal(true)}>
								Filter
							</button>
							<img className="w-5 h-auto" src={filter} alt="filter" />
						</div>
						<p className="hidden md:block">
							Showing 1-{errMsg ? "1" : productList.meta?.totalPage} of{" "}
							{errMsg ? "0" : productList.meta?.totalData} Results
						</p>
						<div className="relative ">
							<label
								onClick={openSort}
								className="flex justify-center items-center gap-2 cursor-pointer"
							>
								<p>Sort By</p>
								<img
									src={triangle}
									alt="filter"
									className={`${showSort === true && "rotate-180"}`}
								/>
							</label>
							<div
								className={`absolute z-10 right-0 flex flex-col items-end justify-center gap-2 p-2 shadow bg-white rounded-box w-32 ${
									showSort === true ? "block" : "hidden"
								}`}
							>
								<p
									className="cursor-pointer hover:bg-zinc-50 w-full text-right"
									onClick={() => addSort("")}
								>
									Reset
								</p>
								<p
									className="cursor-pointer hover:bg-zinc-50 w-full text-right"
									onClick={() => addSort("newest")}
								>
									Newest
								</p>
								<p
									className="cursor-pointer hover:bg-zinc-50 w-full text-right"
									onClick={() => addSort("oldest")}
								>
									Oldest
								</p>
								<p
									className="cursor-pointer hover:bg-zinc-50 w-full text-right"
									onClick={() => addSort("cheap")}
								>
									Cheapest
								</p>
								<p
									className="cursor-pointer hover:bg-zinc-50 w-full text-right"
									onClick={() => addSort("expensive")}
								>
									Priciest
								</p>
								<p
									className="cursor-pointer hover:bg-zinc-50 w-full text-right"
									onClick={() => addSort("bestselling")}
								>
									Bestselling
								</p>
							</div>
						</div>
					</nav>
					<div
						className={`${
							errMsg !== null ? "block min-h-[1025px]" : "hidden"
						} font-bold text-lg pt-10`}
					>
						{errMsg}
					</div>
					<div
						className={`grid-cols-2 md:grid-cols-3 md:min-h-[1025px] w-full ${
							errMsg !== null ? "hidden" : "grid"
						}`}
					>
						{productList.data?.map((data) => {
							return (
								<div
									className="text-center w-[90%] h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] mx-auto mb-[15%] xl:mb-0 hover:scale-105 cursor-pointer"
									key={data.id}
									onClick={() => openProductDetail(data.id)}
								>
									<div className="w-full h-4/5  overflow-hidden relative bg-slate-50">
										<img
											src={data.image_urls[0]}
											alt="product"
											className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
										/>
									</div>
									<div className="p-[3%] h-1/5">
										<p className="text-xs md:text-base pb-1">{data.name}</p>
										<p className="font-bold text-sm md:text-lg">
											IDR {data.price.toLocaleString("id-ID")}
										</p>
									</div>
								</div>
							);
						})}
					</div>

					{/* pagination start */}
					<div className="btn-group pt-5 bottom-5">
						<button
							className={`${
								!productList.meta?.prev ? "invisible" : "visible"
							} btn bg-primary-black text-white hover:bg-white hover:text-primary-black active:bg-white active:text-primary-black`}
						>
							«
						</button>
						<button
							className={`btn bg-primary-black text-white hover:bg-white hover:text-primary-black active:bg-white active:text-primary-black`}
						>
							Page {productList.meta?.totalPage}
						</button>
						<button
							className={`${
								!productList.meta?.next ? "invisible" : "visible"
							} btn bg-primary-black text-white hover:bg-white hover:text-primary-black active:bg-white active:text-primary-black`}
						>
							»
						</button>
					</div>
					{/* pagination end */}
				</section>
			</main>

			{/* mobile search & filter start */}
			<section
				className={`fixed ${
					filterModal === true ? "block" : "hidden"
				} top-0 bottom-0 p-[5%] bg-white h-screen w-screen overflow-y-scroll md:hidden`}
			>
				<div className="flex justify-between items-center pb-4">
					<div className="flex justify-center items-center gap-2">
						<button className="font-bold" type="button" onClick={() => setFilterModal(false)}>
							&#10005;
						</button>
						<p className="font-semibold">Filter</p>
					</div>
					<button onClick={() => navigate(``)} className="font-semibold text-sm">reset</button>
				</div>
				<section>
					<div className="pb-4">
						<p className="font-semibold pb-2">Categories</p>
						<div className="flex justify-center items-center gap-3 flex-wrap">
							<label className="relative ">
								<input className="peer absolute opacity-0" type="checkbox" />
								<div onClick={() => addCategories(1)} className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center">
									<p>Accessories</p>
								</div>
							</label>
							<label className="relative ">
								<input className="peer absolute opacity-0" type="checkbox" />
								<div onClick={() => addCategories(2)} className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center">
									<p>Brands</p>
								</div>
							</label>
							<label className="relative ">
								<input className="peer absolute opacity-0" type="checkbox" />
								<div onClick={() => addCategories(3)} className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center">
									<p>Clothing</p>
								</div>
							</label>
							<label className="relative ">
								<input className="peer absolute opacity-0" type="checkbox" />
								<div onClick={() => addCategories(4)} className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center">
									<p>Fashion</p>
								</div>
							</label>
							<label className="relative ">
								<input className="peer absolute opacity-0" type="checkbox" />
								<div onClick={() => addCategories(5)} className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center">
									<p>Furniture</p>
								</div>
							</label>
							<label className="relative ">
								<input className="peer absolute opacity-0" type="checkbox" />
								<div onClick={() => addCategories(6)} className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center">
									<p>Men</p>
								</div>
							</label>
						</div>
					</div>
					<div className="pb-4">
						<p className="font-semibold pb-2">Price</p>
						<div className="flex justify-center items-center gap-5">
							<div className="flex justify-start items-center gap-1 border border-solid border-primary-gray py-1 px-2 flex-1">
								<p>Rp</p>
								<input type="number" placeholder="Lowest" className="w-full py-1 px-2" />
							</div>
							<div className="flex justify-start items-center gap-1 border border-solid border-primary-gray py-1 px-2 flex-1">
								<p>Rp</p>
								<input type="number" placeholder="Highest" className="w-full py-1 px-2" />
							</div>
						</div>
					</div>
					<div className="pb-4">
						<p className="font-semibold pb-2">Brands</p>
						<div className="flex justify-center items-center gap-3 flex-wrap">
							<label className="relative ">
								<input className="peer absolute opacity-0" type="checkbox" />
								<div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center">
									<p>IKEA</p>
								</div>
							</label>
							<label className="relative ">
								<input className="peer absolute opacity-0" type="checkbox" />
								<div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center">
									<p>Mr Royal</p>
								</div>
							</label>
							<label className="relative ">
								<input className="peer absolute opacity-0" type="checkbox" />
								<div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center">
									<p>Sweet House</p>
								</div>
							</label>
							<label className="relative ">
								<input className="peer absolute opacity-0" type="checkbox" />
								<div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center">
									<p>North Oxford</p>
								</div>
							</label>
							<label className="relative ">
								<input className="peer absolute opacity-0" type="checkbox" />
								<div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center">
									<p>Mr Poppins 1928</p>
								</div>
							</label>
						</div>
					</div>
					<div className="pb-4">
						<p className="font-semibold pb-2">Colors</p>
						<div className="flex justify-center items-center gap-4 flex-wrap">
							<div className="h-4 w-4 rounded-full bg-red-600"></div>
							<div className="h-4 w-4 rounded-full bg-orange-600"></div>
							<div className="h-4 w-4 rounded-full bg-yellow-600"></div>
							<div className="h-4 w-4 rounded-full bg-green-600"></div>
							<div className="h-4 w-4 rounded-full bg-blue-600"></div>
							<div className="h-4 w-4 rounded-full bg-violet-600"></div>
							<div className="h-4 w-4 rounded-full bg-pink-600"></div>
						</div>
					</div>
					<div className="pb-4">
						<p className="font-semibold pb-2">Sizes</p>
						<div className="flex justify-center items-center flex-wrap gap-4">
							<label className="relative ">
								<input className="peer absolute opacity-0" type="checkbox" />
								<div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center">
									<p>S</p>
								</div>
							</label>
							<label className="relative ">
								<input className="peer absolute opacity-0" type="checkbox" />
								<div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center">
									<p>M</p>
								</div>
							</label>
							<label className="relative ">
								<input className="peer absolute opacity-0" type="checkbox" />
								<div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center">
									<p>L</p>
								</div>
							</label>
							<label className="relative ">
								<input className="peer absolute opacity-0" type="checkbox" />
								<div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center">
									<p>XL</p>
								</div>
							</label>
							<label className="relative ">
								<input className="peer absolute opacity-0" type="checkbox" />
								<div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center">
									<p>Full Size</p>
								</div>
							</label>
						</div>
					</div>
					<button className="btn w-full bg-primary-black text-white hover:bg-white hover:text-primary-black active:bg-white active:text-primary-black">
						Filter
					</button>
				</section>
			</section>
			{/* mobile search & filter end */}

			<Footer />
		</React.Fragment>
	);
};

export default Products;
