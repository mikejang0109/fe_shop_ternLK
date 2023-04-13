import imgsample from "../../assets/img/brown-sofa.png"
import bgadd from "../../assets/images/bg.svg"

const SellingProduct = () => {
    return (
        <section className="w-1/2 mx-auto flex flex-col gap-20">
            <section className="flex flex-col justify-center items-start gap-10">
                <p className="font-bold text-2xl">Inventory</p>
                <div className="flex justify-start items-center border border-solid border-primary-gray p-5 w-full">
                    <p className="w-1/4">Name of goods *</p>
                    <input type="text" className="w-full outline-none" />
                </div>
                <div className=" border border-solid border-primary-gray p-5 w-full">
                    <p>Description Product *</p>
                    <textarea className="w-full resize-none outline-none"></textarea>
                </div>
            </section>
            <section className="flex flex-col justify-center items-start gap-10">
                <p className="font-bold text-2xl">Item Details</p>
                <div className="flex justify-start items-center border border-solid border-primary-gray p-5 w-full">
                    <p className="w-1/4">Unit price *</p>
                    <input type="number" className="w-full outline-none" />
                </div>
                <div className="flex justify-start items-center border border-solid border-primary-gray p-5 w-full">
                    <p className="w-1/4">Unit stock *</p>
                    <input type="number" className="w-full outline-none" />
                    <p className="w-1/5">/pcs</p>
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
                    <div className="w-[200px] h-[200px] flex justify-center items-center">
                        <img src={imgsample} alt="products" className="object-cover"/>
                    </div>
                    <div className="w-[200px] h-[200px] relative cursor-pointer">
                        <img src={bgadd} alt="add image"/>
                        <p className="text-9xl font-bold text-secondary-gray absolute top-5 left-1/2 -translate-x-1/2">+</p>
                        <p className="absolute left-1/2 -translate-x-1/2 text-xs top-3/4">Add more image</p>
                    </div>
                </div>
            </section>
            <button type="button" className="btn bg-primary-black rounded-none text-white hover:bg-white active:bg-white hover:text-primary-black active:text-primary-black w-1/5">Sell Product</button>
        </section>
    )
}

export default SellingProduct