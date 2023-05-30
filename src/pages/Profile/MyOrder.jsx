import { Fragment, useState, useEffect } from "react";
import axios from "axios";

import imgsample from "../../assets/img/bedroom.png"
import check from "../../assets/icons/check-circle-08.svg"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Nav from "./Nav";

const MyOrder = () => {
    const [data, setData] = useState()
    
    return (
        <Fragment>
            <Header />
            <main className="py-[5%] px-[8%] w-full">
                <Nav />
                <section className={` mt-10 md:mt-24`}>
                    <div className="grid grid-cols-7 py-3">
                        <p className="col-span-3 font-arimo font-normal text-xs sm:text-sm md:text-base">PRODUCTS</p>
                        <p className="font-arimo font-normal text-xs sm:text-sm md:text-base">PRICE</p>
                        <p className="font-arimo font-normal text-xs sm:text-sm md:text-base">QTY</p>
                        <p className="font-arimo font-normal text-xs sm:text-sm md:text-base">STATUS ORDER</p>
                        <p className="font-arimo font-normal text-xs sm:text-sm md:text-base text-right">TOTAL</p>
                    </div>
                    <div>
                        <div className="grid grid-cols-7 items-center my-12">
                            <img src={imgsample} alt='product' className="object-cover" />
                            <p className="col-span-2 pl-3 text-sm md:text-base">Fabric Mid Century Chair</p>
                            <p className="font-bold text-base md:text-lg flex items-center ">$10.50</p>
                            <p className="text-center sm:text-left">02</p>
                            <div className="flex justify-start items-center gap-1 sm:gap-3">
                                <img src={check} alt="check" />
                                <p className="text-sm sm:text-base">Sent</p>
                            </div>
                            <p className="text-right text-sm sm:text-base">$21.00</p>
                        </div>
                        <div className="grid grid-cols-7 items-center my-12">
                            <img src={imgsample} alt='product' className="object-cover" />
                            <p className="col-span-2 pl-3 text-sm md:text-base">Fabric Mid Century Chair</p>
                            <p className="font-bold text-base md:text-lg flex items-center ">$10.50</p>
                            <p className="text-center sm:text-left">02</p>
                            <div className="flex justify-start items-center gap-1 sm:gap-3">
                                <img src={check} alt="check" />
                                <p className="text-sm sm:text-base">Sent</p>
                            </div>
                            <p className="text-right text-sm sm:text-base">$21.00</p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </Fragment>
    )
}

export default MyOrder;