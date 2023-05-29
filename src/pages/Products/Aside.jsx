import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

const Aside = () => {
	const [categories, setCategories] = useState(null);
	const [minPrice] = useState(10000);
	const [maxPrice, setMaxPrice] = useState(null);
	const [brands, setBrands] = useState(null);
	const [colors, setColors] = useState(null);
	const [sizes, setSizes] = useState(null);
	const navigate = useNavigate();

	const addCategories = (id) => {
		if (id === categories) {
			setCategories(null); // deselect the clicked category
			navigate(``);
		} else {
			setCategories(id); // select the clicked category
			navigate(`?category=${id}`);
		}
	};

	const addBrands = (value) => {
		setBrands(value);
		navigate(`?brand=${value}`);
	};

	const addSizes = (value) => {
		setSizes(value);
		navigate(`?sizes=${value}`);
	};

	const setPrice = () => {
		navigate(`?min_price=${minPrice}&max_price=${maxPrice}`);
	};

	const colorFilter = (id) => {
		const newColors = colors === id ? "" : id;
		navigate(`?colors=${newColors}`);
		setColors(newColors);
	};

	// const setQuery = () => {
	//     let query = '?';
	//     if(categories) {
	//         query += `category=${categories}&`
	//     }
	//     if(maxPrice) {
	//         query += `min_price=${minPrice}&max_price=${maxPrice}&`
	//     }
	//     if(brands) {
	//         query += `brand=${brands}&`
	//     }
	//     if(colors) {
	//         query += `colors=${colors}&`
	//     }
	//     if(sizes) {
	//         query += `sizes=${sizes}&`
	//     }
	//     query += `limit=9`;
	//     navigate(query)
	// }

	return (
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
						<p className={`text-sm cursor-pointer ${categories === 2 && "font-bold"}`}>Brands</p>
						<p className="text-sm"></p>
					</div>
					<div
						className="flex items-center justify-between cursor-pointer hover:bg-primary-black hover:text-white py-2"
						onClick={() => addCategories(3)}
					>
						<p className={`text-sm cursor-pointer ${categories === 3 && "font-bold"}`}>Clothing</p>
						<p className="text-sm"></p>
					</div>
					<div
						className="flex items-center justify-between cursor-pointer hover:bg-primary-black hover:text-white py-2"
						onClick={() => addCategories(4)}
					>
						<p className={`text-sm cursor-pointer ${categories === 4 && "font-bold"}`}>Fashion</p>
						<p className="text-sm"></p>
					</div>
					<div
						className="flex items-center justify-between cursor-pointer hover:bg-primary-black hover:text-white py-2"
						onClick={() => addCategories(5)}
					>
						<p className={`text-sm cursor-pointer ${categories === 5 && "font-bold"}`}>Furniture</p>
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
						<p className={`text-sm cursor-pointer ${categories === 9 && "font-bold"}`}>Wallet</p>
						<p className="text-sm"></p>
					</div>
				</div>
			</section>
			<section className="pb-14">
				<p className="font-bold pb-5 text-2xl">Price</p>
				<div className="flex flex-col justify-center items-start gap-3">
					<p className="text-sm">Price IDR 10.000 - IDR {maxPrice === null ? '10.001' : parseInt(maxPrice).toLocaleString('id-ID')}</p>
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
	);
};

export default Aside;
