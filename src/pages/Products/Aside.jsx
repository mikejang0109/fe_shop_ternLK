import { useState } from "react"
import { useLocation, useNavigate } from "react-router-dom";

const Aside = () => {
    const [categories, setCategories] = useState(null);
    const [minPrice, setMinPrice] = useState(10000);
    const [maxPrice, setMaxPrice] = useState(null);
    const [brands, setBrands] = useState(null);
    const [colors, setColors] = useState(null);
    const [sizes, setSizes] = useState(null)
    const navigate = useNavigate();
    const location = useLocation();

    const addCategories = (id) => {
        setCategories(id)
        navigate(`?category=${id}`)
    }

    const addBrands = (e) => {
        setBrands(e.target.value)
        navigate((`?brand=${e.target.value}`))
    }

    const addSizes = (e) => {
        setSizes(e.target.value)
        navigate((`?sizes=${e.target.value}`))
    }

    const setPrice = () => {
        navigate(`?min_price=${minPrice}&max_price=${maxPrice}`)
    }

    const colorFilter = (id) => {
        navigate(`?colors=${id}`)
        setColors(id)
    }


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
                <div className="flex flex-col justify-center items-stretch gap-3">
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => addCategories(1)}>
                        <p className={`text-sm cursor-pointer ${categories === 1 && 'font-bold'}`}>Accecories</p>
                        <p className="text-sm"></p>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => addCategories(2)}>
                        <p className={`text-sm cursor-pointer ${categories === 2 && 'font-bold'}`}>Brands</p>
                        <p className="text-sm"></p>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => addCategories(3)}>
                        <p className={`text-sm cursor-pointer ${categories === 3 && 'font-bold'}`}>Clothing</p>
                        <p className="text-sm"></p>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => addCategories(4)}>
                        <p className={`text-sm cursor-pointer ${categories === 4 && 'font-bold'}`}>Fashion</p>
                        <p className="text-sm"></p>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => addCategories(5)}>
                        <p className={`text-sm cursor-pointer ${categories === 5 && 'font-bold'}`}>Furniture</p>
                        <p className="text-sm"></p>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => addCategories(6)}>
                        <p className={`text-sm cursor-pointer ${categories === 6 && 'font-bold'}`}>Men</p>
                        <p className="text-sm"></p>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => addCategories(7)}>
                        <p className={`text-sm cursor-pointer ${categories === 7 && 'font-bold'}`}>Woman</p>
                        <p className="text-sm"></p>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => addCategories(8)}>
                        <p className={`text-sm cursor-pointer ${categories === 8 && 'font-bold'}`}>Shoes</p>
                        <p className="text-sm"></p>
                    </div>
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => addCategories(9)}>
                        <p className={`text-sm cursor-pointer ${categories === 9 && 'font-bold'}`}>Wallet</p>
                        <p className="text-sm"></p>
                    </div>
                </div>
            </section>
            <section className="pb-14">
                <p className="font-bold pb-5 text-2xl">Price</p>
                <div className="flex flex-col justify-center items-start gap-3">
                    <p className="text-sm">Price IDR 10.000 - IDR {maxPrice}</p>
                    <input type="range" min={10000} max={10000000} className="w-full " value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                    <button type="button" className="btn bg-primary-black text-white hover:bg-white hover:text-primary-black" onClick={setPrice} >Filter</button>
                </div>
            </section>
            <section className="pb-14">
                <p className="font-bold pb-5 text-2xl">Brands</p>
                <div className="flex flex-col justify-center items-start gap-5">
                    <label className="flex justify-start items-center gap-5">
                        <input
                            type="radio"
                            name="remember"
                            id="remember"
                            value={2}
                            className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                            onChange={(e) => addBrands(e)}
                        />
                        <p className="text-sm">IKEA</p>
                    </label>
                    <label className="flex justify-start items-center gap-5">
                        <input
                            type="radio"
                            name="remember"
                            id="remember"
                            className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                            value={3}
                            onChange={(e) => addBrands(e)}
                        />
                        <p className="text-sm">Ashley Furniture</p>
                    </label>
                    <label className="flex justify-start items-center gap-5">
                        <input
                            type="radio"
                            name="remember"
                            id="remember"
                            className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                            value={4}
                            onChange={(e) => addBrands(e)}
                        />
                        <p className="text-sm">Herman Miller</p>
                    </label>
                    <label className="flex justify-start items-center gap-5">
                        <input
                            type="radio"
                            name="remember"
                            id="remember"
                            className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                            value={5}
                            onChange={(e) => addBrands(e)}
                        />
                        <p className="text-sm">La-Z-Boy</p>
                    </label>
                    <label className="flex justify-start items-center gap-5">
                        <input
                            type="radio"
                            name="remember"
                            id="remember"
                            className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                            value={6}
                            onChange={(e) => addBrands(e)}
                        />
                        <p className="text-sm">Crate & Barrel</p>
                    </label>
                </div>
            </section>
            <section className="pb-14">
                <p className="font-bold pb-5 text-2xl">Colors</p>
                <div className="flex justify-center items-center gap-4 flex-wrap">
                    <button className={`h-4 w-4 rounded-full bg-[#008080] cursor-pointer ${colors === 1 && "scale-110"}`} type="button" onClick={() => colorFilter(1)}></button>
                    <button className={`h-4 w-4 rounded-full bg-[#000080] cursor-pointer ${colors === 2 && "scale-110"}`} type="button" onClick={() => colorFilter(2)}></button>
                    <button className={`h-4 w-4 rounded-full bg-[#ffffff] border border-solid border-black cursor-pointer ${colors === 3 && "scale-110"}`} type="button" onClick={() => colorFilter(3)}></button>
                    <button className={`h-4 w-4 rounded-full bg-black border border-solid border-black cursor-pointer ${colors === 4 && "scale-110"}`} type="button" onClick={() => colorFilter(4)}></button>
                    <button className={`h-4 w-4 rounded-full bg-[#000075] border border-solid border-black cursor-pointer ${colors === 5 && "scale-110"}`} type="button" onClick={() => colorFilter(5)}></button>
                    <button className={`h-4 w-4 rounded-full bg-[#1a1718] border border-solid border-black cursor-pointer ${colors === 6 && "scale-110"}`} type="button" onClick={() => colorFilter(6)}></button>
                </div>
            </section>
            <section className="pb-14">
                <p className="font-bold pb-5 text-2xl">Sizes</p>
                <div className="flex justify-start items-center gap-3 flex-wrap">
                    <label className="relative w-12 h-12 cursor-pointer">
                        <input className="peer absolute opacity-0" type="radio" name="sizes" value={1} onChange={(e) => addSizes(e)}/>
                        <div className="peer-checked:bg-black peer-checked:text-white border w-12 h-12 border-tertiary-gray border-solid flex justify-center items-center"><p>S</p></div>
                    </label>
                    <label className="relative w-12 h-12 cursor-pointer">
                        <input className="peer absolute opacity-0" type="radio" name="sizes" value={2} onChange={(e) => addSizes(e)}/>
                        <div className="peer-checked:bg-black peer-checked:text-white w-12 h-12 border border-tertiary-gray border-solid flex justify-center items-center"><p>M</p></div>
                    </label>
                    <label className="relative w-12 h-12 cursor-pointer">
                        <input className="peer absolute opacity-0" type="radio" name="sizes" value={3} onChange={(e) => addSizes(e)}/>
                        <div className="peer-checked:bg-black peer-checked:text-white w-12 h-12 border border-tertiary-gray border-solid flex justify-center items-center"><p>L</p></div>
                    </label>
                    <label className="relative w-12 h-12 cursor-pointer">
                        <input className="peer absolute opacity-0" type="radio" name="sizes" value={4} onChange={(e) => addSizes(e)}/>
                        <div className="peer-checked:bg-black peer-checked:text-white w-12 h-12 border border-tertiary-gray border-solid flex justify-center items-center"><p>XL</p></div>
                    </label>
                    <label className="relative w-12 h-12 cursor-pointer">
                        <input className="peer absolute opacity-0" type="radio" name="sizes" value={5} onChange={(e) => addSizes(e)}/>
                        <div className="peer-checked:bg-black peer-checked:text-white w-12 h-12 border border-tertiary-gray border-solid flex justify-center items-center"><p>2XL</p></div>
                    </label>
                </div>
            </section>
        </aside>
    )
}

export default Aside