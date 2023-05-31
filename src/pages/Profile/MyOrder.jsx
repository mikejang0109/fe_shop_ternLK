import { Fragment, useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import { get } from "../../utils/sessionStorage";
import imgsample from "../../assets/img/bedroom.png"
import check from "../../assets/icons/check-circle-08.svg"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Nav from "./Nav";
import { toast } from "react-hot-toast";
import Loader from "../../components/Loader";

const MyOrder = () => {
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const location = useLocation()

    const localToken = useSelector((state) => state.auth.token);
    const sessionToken = get("raz");
    const token = sessionToken || localToken

    useEffect(() => {
        let getData = true
        if (getData) {
            setIsLoading(true)
            let url = `${process.env.REACT_APP_SERVER_HOST}/apiv1/transactions/seller${location.search}`
            axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => {

                setData(res.data.data)
            }).catch(() => toast.error('Failed get data')).finally(() => setIsLoading(false))
        }
        return () => { getData = false }
    }, [location])

    if(isLoading) return <Loader />

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
                    {data.length === 0 ? <div className="h-screen flex justify-center ">
                        <p className="font-arimo text-3xl font-bold mt-28">No Order</p>
                    </div> : 
                    <div>
                        {data?.map((d) => {
                            console.log(d);
                            return (
                                <div className="grid grid-cols-7 items-center my-12">
                                    <img src={imgsample} alt='product' className="object-cover" />
                                    <p className="col-span-2 pl-3 text-sm md:text-base">{d.products[0].name}</p>
                                    <p className="font-bold text-base md:text-lg flex items-center ">IDR {Number(d.products[0].subtotal).toLocaleString()}</p>
                                    <p className="text-center sm:text-left">{d.products[0].quantity}</p>
                                    <div className="flex justify-start items-center gap-1 sm:gap-3">
                                        <img src={check} alt="check" />
                                        <p className="text-sm sm:text-base">{d.status}</p>
                                    </div>
                                    <p className="text-right text-sm sm:text-base">IDR {Number(d.grandtotal).toLocaleString()}</p>
                                </div>
                            )
                        })}
                    </div>}
                </section>
            </main>
            <Footer />
        </Fragment>
    )
}

export default MyOrder;