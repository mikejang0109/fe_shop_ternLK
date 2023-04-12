import imgsample from "../../assets/img/bedroom.png"
import check from "../../assets/icons/check-circle-08.svg"

const MyProduct = () => {
    return (
        <>
        <div className="w-full h-[1px] bg-secondary-gray"></div>
        <section className="grid grid-cols-5">
            <p className="text-lg">Product</p>
            <p className="text-lg">Stock Status</p>
            <p className="text-lg">Price</p>
            <p></p>
        </section>
        <div className="w-full h-[1px] bg-secondary-gray"></div>
        <section className="my-10">
            <img src={imgsample} alt="product" className="w-[170px]"/>
            <p>Dining Side Chair in Beige</p>
            <div className="flex justify-center items-center">
                <img src={check} alt="check" />
                <p>10 stock</p>
            </div>
            <p className="font-bold text-lg">$765</p>
            <button type="button" className="py-5 px-[75px] text-white bg-[#D94141]">Delete</button>
        </section>

        </>
    )
}

export default MyProduct