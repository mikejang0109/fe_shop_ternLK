const Aside = () => {


    return (
        <aside className="w-[25%] pr-5 hidden md:block">
            <section className="pb-14">
                <p className="font-bold pb-5 text-2xl">Categories</p>
                <div className="flex flex-col justify-center items-stretch gap-3">
                    <div className="flex items-center justify-between ">
                        <p className="text-sm cursor-pointer">Accecories</p>
                        <p className="text-sm">5</p>
                    </div>
                    <div className="flex items-center justify-between ">
                        <p className="text-sm cursor-pointer">Brands</p>
                        <p className="text-sm">5</p>
                    </div>
                    <div className="flex items-center justify-between ">
                        <p className="text-sm cursor-pointer">Clothing</p>
                        <p className="text-sm">5</p>
                    </div>
                    <div className="flex items-center justify-between ">
                        <p className="text-sm cursor-pointer">Fashion</p>
                        <p className="text-sm">5</p>
                    </div>
                    <div className="flex items-center justify-between ">
                        <p className="text-sm cursor-pointer">Furniture</p>
                        <p className="text-sm">5</p>
                    </div>
                    <div className="flex items-center justify-between ">
                        <p className="text-sm cursor-pointer">Men</p>
                        <p className="text-sm">5</p>
                    </div>
                </div>
            </section>
            <section className="pb-14">
                <p className="font-bold pb-5 text-2xl">Price</p>
                <div className="flex flex-col justify-center items-start gap-3">
                    <p className="text-sm">Price $39 - $159</p>
                    <input type="range" min={0} max={100} className="w-full " />
                    <button type="button" className="btn bg-primary-black text-white hover:bg-white hover:text-primary-black" >Filter</button>
                </div>
            </section>
            <section className="pb-14">
                <p className="font-bold pb-5 text-2xl">Brands</p>
                <div className="flex flex-col justify-center items-start gap-5">
                    <label className="flex justify-start items-center gap-5">
                        <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                        />
                        <p className="text-sm">IKEA</p>
                    </label>
                    <label className="flex justify-start items-center gap-5">
                        <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                        />
                        <p className="text-sm">Mr Royal</p>
                    </label>
                    <label className="flex justify-start items-center gap-5">
                        <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                        />
                        <p className="text-sm">Sweet House</p>
                    </label>
                    <label className="flex justify-start items-center gap-5">
                        <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                        />
                        <p className="text-sm">North Oxford</p>
                    </label>
                    <label className="flex justify-start items-center gap-5">
                        <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                        />
                        <p className="text-sm">Mr. Poppins 1928</p>
                    </label>
                </div>
            </section>
            <section className="pb-14">
                <p className="font-bold pb-5 text-2xl">Colors</p>
                <div className="flex justify-center items-center gap-4 flex-wrap">
                            <div className="h-4 w-4 rounded-full bg-red-600 cursor-pointer"></div>
                            <div className="h-4 w-4 rounded-full bg-orange-600 cursor-pointer"></div>
                            <div className="h-4 w-4 rounded-full bg-yellow-600 cursor-pointer"></div>
                            <div className="h-4 w-4 rounded-full bg-green-600 cursor-pointer"></div>
                            <div className="h-4 w-4 rounded-full bg-blue-600 cursor-pointer"></div>
                            <div className="h-4 w-4 rounded-full bg-violet-600 cursor-pointer"></div>
                            <div className="h-4 w-4 rounded-full bg-pink-600 cursor-pointer"></div>
                        </div>
            </section>
            <section className="pb-14">
                <p className="font-bold pb-5 text-2xl">Sizes</p>
                <div className="flex justify-start items-center gap-3 flex-wrap">
                    <label className="relative w-12 h-12 cursor-pointer">
                        <input className="peer absolute opacity-0" type="checkbox"/>
                        <div className="peer-checked:bg-black peer-checked:text-white border w-12 h-12 border-tertiary-gray border-solid flex justify-center items-center"><p>S</p></div>
                    </label>
                    <label className="relative w-12 h-12 cursor-pointer">
                        <input className="peer absolute opacity-0" type="checkbox"/>
                        <div className="peer-checked:bg-black peer-checked:text-white w-12 h-12 border border-tertiary-gray border-solid flex justify-center items-center"><p>M</p></div>
                    </label>
                    <label className="relative w-12 h-12 cursor-pointer">
                        <input className="peer absolute opacity-0" type="checkbox"/>
                        <div className="peer-checked:bg-black peer-checked:text-white w-12 h-12 border border-tertiary-gray border-solid flex justify-center items-center"><p>L</p></div>
                    </label>
                    <label className="relative w-12 h-12 cursor-pointer">
                        <input className="peer absolute opacity-0" type="checkbox"/>
                        <div className="peer-checked:bg-black peer-checked:text-white w-12 h-12 border border-tertiary-gray border-solid flex justify-center items-center"><p>XL</p></div>
                    </label>
                    <label className="relative w-12 h-12 cursor-pointer">
                        <input className="peer absolute opacity-0" type="checkbox"/>
                        <div className="peer-checked:bg-black peer-checked:text-white w-12 h-12 border border-tertiary-gray border-solid flex justify-center items-center"><p>XXL</p></div>
                    </label>
                    <label className="relative w-24 h-12 cursor-pointer">
                        <input className="peer absolute opacity-0" type="checkbox"/>
                        <div className="peer-checked:bg-black peer-checked:text-white w-24 h-12 border border-tertiary-gray border-solid flex justify-center items-center"><p>Full size</p></div>
                    </label>
                </div>
            </section>

        </aside>
    )
}

export default Aside