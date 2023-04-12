import imgsample from "../../assets/img/bedroom.png"
import check from "../../assets/icons/check-circle-08.svg"

const MyOrder = () => {
    return (
        <section >
            <div className="grid grid-cols-7 py-3">
                <p className="col-span-3 ">PRODUCTS</p>
                <p className="">PRICE</p>
                <p className="">QUANTITY</p>
                <p className="">STATUS ORDER</p>
                <p className="">TOTAL</p>
            </div>
            <div>
                <div className="grid grid-cols-7 items-center my-12">
                    <img src={imgsample} alt='product' className="object-cover" />
                    <p className="col-span-2 pl-3">Fabric Mid Century Chair</p>
                    <p className="font-bold text-lg ">$10.50</p>
                    <p>02</p>
                    <div className="flex justify-start items-center gap-3">
                        <img src={check} alt="check" />
                        <p>Sent</p>
                    </div>
                    <p>$21.00</p>
                </div>
                <div className="grid grid-cols-7 items-center my-12">
                    <img src={imgsample} alt='product' className="object-cover" />
                    <p className="col-span-2 pl-3">Fabric Mid Century Chair</p>
                    <p className="font-bold text-lg">$10.50</p>
                    <p>02</p>
                    <div className="flex justify-start items-center gap-3">
                        <img src={check} alt="check" />
                        <p>Sent</p>
                    </div>
                    <p>$21.00</p>
                </div>
            </div>

        </section>
    )
}

export default MyOrder;