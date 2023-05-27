import imgsample from "../../assets/img/brown-sofa.png"
import bgadd from "../../assets/images/bg.svg"

const SellingProduct = ({ show }) => {
    return (
        <section className={`${show === 3 ? 'flex' : 'hidden'} mt-8 sm:mt-10 md:mt-24 w-full mx-auto flex-col gap-10 md:gap-20`}>
            <section className="flex flex-col justify-center items-start gap-5 md:gap-10">
                <p className="font-bold text-xl md:text-2xl font-arimo">Inventory</p>
                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center border border-solid border-primary-gray p-5 w-full">
                    <p className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">Name of goods *</p>
                    <input type="text" className="w-full outline-none" />
                </div>
                <div className=" border border-solid border-primary-gray p-5 w-full">
                    <p>Description Product *</p>
                    <textarea className="w-full resize-none outline-none"></textarea>
                </div>
            </section>
            <section className="flex flex-col justify-center items-start gap-5 md:gap-10">
                <p className="font-bold text-2xl">Item Details</p>
                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center border border-solid border-primary-gray p-5 w-full">
                    <p className="w-full sm:w-1/3 md:w-1/6">Unit price *</p>
                    <input type="number" className="w-full outline-none" />
                </div>
                <div className="flex flex-col sm:flex-row justify-start items-start sm:items-center border border-solid border-primary-gray p-5 w-full">
                    <p className="w-full sm:w-1/3 md:w-1/6">Unit stock *</p>
                    <div className="flex justify-start w-full">
                        <input type="number" className="w-full outline-none" />
                        <p className="w-1/5">/pcs</p>
                    </div>
                </div>
                <div>
                    <p>Stock Condition</p>
                    <div className="flex justify-start items-center gap-10 pt-5">
                        <label className="flex justify-start items-center gap-5">
                            <input
                                type="radio"
                                name="stock"
                                className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                            />
                            <p className="text-sm">New product</p>
                        </label>
                        <label className="flex justify-start items-center gap-5">
                            <input
                                type="radio"
                                name="stock"
                                className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                            />
                            <p className="text-sm">Second product</p>
                        </label>
                    </div>
                </div>
            </section>
            <section className="flex flex-col justify-center items-start gap-10">
                <p className="font-bold text-2xl">Photo of Goods</p>
                <div className="flex justify-start items-center gap-5">
                    <div className="w-1/2 sm:w-[200px] h-[200px] flex justify-center items-center">
                        <img src={imgsample} alt="products" className="object-cover" />
                    </div>
                    <div className="w-1/2 sm:w-[200px] h-[200px] relative cursor-pointer flex justify-center items-center">
                        <img src={bgadd} alt="add image" />
                        <p className="text-7xl sm:text-9xl font-bold text-secondary-gray absolute top-14 sm:top-5 left-1/2 -translate-x-1/2">+</p>
                        <p className="absolute left-1/2 -translate-x-1/2 text-xs text-center top-2/3 sm:top-3/4">Add more image</p>
                    </div>
                </div>
            </section>
            <button type="button" className="btn bg-primary-black rounded-none text-white hover:bg-white active:bg-white hover:text-primary-black active:text-primary-black w-2/5 xl:w-1/5">Sell Product</button>
        </section>
    )
}

export default SellingProduct