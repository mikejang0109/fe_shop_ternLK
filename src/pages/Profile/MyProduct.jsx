import imgsample from "../../assets/img/bedroom.png"
import check from "../../assets/icons/check-circle-08.svg"

const MyProduct = () => {
    return (
        <>
            <div className="w-full h-[1px] bg-secondary-gray"></div>
            <section className="grid grid-cols-5 py-6">
                <p className="text-lg col-span-2">Product</p>
                <p className="text-lg">Stock Status</p>
                <p className="text-lg">Price</p>
            </section>
            <div className="w-full h-[1px] bg-secondary-gray"></div>
            <div>
                <section className="my-10 grid grid-cols-5">
                    <div className="col-span-2 flex justify-start items-center gap-5">
                        <img src={imgsample} alt="product" className="w-[170px]" />
                        <p>Dining Side Chair in Beige</p>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                        <img src={check} alt="check" />
                        <p>10 stock</p>
                    </div>
                    <p className="font-bold text-lg flex items-center">$765</p>
                    <button type="button" className="h-20 my-auto font-bold text-white bg-[#D94141]">Delete</button>
                </section>
                <section className="my-10 grid grid-cols-5">
                    <div className="col-span-2 flex justify-start items-center gap-5">
                        <img src={imgsample} alt="product" className="w-[170px]" />
                        <p>Dining Side Chair in Beige</p>
                    </div>
                    <div className="flex justify-start items-center gap-3">
                        <img src={check} alt="check" />
                        <p>10 stock</p>
                    </div>
                    <p className="font-bold text-lg flex items-center">$765</p>
                    <button type="button" className="h-20 my-auto font-bold text-white bg-[#D94141]">Delete</button>
                </section>
            </div>

        </>
    )
}

export default MyProduct