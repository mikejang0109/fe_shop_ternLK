import { useState, useEffect, Fragment } from "react"
import axios from 'axios'
import jwtDecode from "jwt-decode"
import { useSelector } from "react-redux"
import { useLocation } from "react-router-dom"

import { get } from "../../utils/sessionStorage";
import imgsample from "../../assets/img/bedroom.png"
import check from "../../assets/icons/check-circle-08.svg"
import Loader from "../../components/Loader"
import { toast } from "react-hot-toast"
import Footer from "../../components/Footer"
import Header from "../../components/Header"
import Title from "../../components/Title"
import Nav from "./Nav"

const MyProduct = () => {
    const [modalId, setModalId] = useState()
    const [product, setProduct] = useState()
    const [deleteLoading, setDeleteLoading] = useState()
    const [isLoading, setIsLoading] = useState(false)
    const localToken = useSelector((state) => state.auth.token);
    const sessionToken = get("raz");
    const token = sessionToken || localToken
    const { id } = jwtDecode(token)
    const location = useLocation()
    const search = location.search

    useEffect(() => {
        let getData = true
        if (getData) {
            setIsLoading(true)
            let url = `${process.env.REACT_APP_SERVER_HOST}/products?seller_id=${id}`
            if(search) {
                url += `&${search.substring(1)}`
            }
            console.log(url);
            axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            }).then(res => setProduct(res.data.data))
            .catch(err =>{
                toast.error(err.response.data.msg)
                setProduct()
            } )
            .finally(() => setIsLoading(false))
        }
        return () => { getData = false }
    }, [location])
    console.log(product);

    const deleteProduct = async (productsId) => {
        try {
            setDeleteLoading(true)
            const url = `${process.env.REACT_APP_SERVER_HOST}/products/${productsId}`
            const result = await axios.delete(url, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
            toast.success(result.data.msg)
            window.location.reload()
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.msg)
        } finally {
            setDeleteLoading(false)
        }
    }

    if (isLoading) return <Loader />

    return (
        <Fragment>
            <Header />
            <Title
                isBreadcrumbs={false}
                breadcrumbs=""
                breadcrumbs2=""
                title="Profile"
                description="See your notifications for the latest updates"
            />
            <main className="py-[5%] px-[8%] w-full">
                <Nav />
                <section className={` mt-10 md:mt-24`}>
                    <div className="w-full h-[1px] bg-secondary-gray"></div>
                    <section className="grid grid-cols-4 sm:grid-cols-5 py-3 md:py-6">
                        <p className=" text-base md:text-lg col-span-2">Product</p>
                        <p className="text-base md:text-lg ml-2">Stock Status</p>
                        <p className="text-base md:text-lg text-right sm:text-left">Price</p>
                    </section>
                    <div className="w-full h-[1px] bg-secondary-gray"></div>
                    {!product ? <div className="h-screen flex justify-center items-center">
                        <p className="font-arimo text-3xl font-bold">No Product Added</p>
                    </div> :
                        deleteLoading ? <Loader /> :
                            <div>
                                {product?.map((data) => {
                                    return (
                                        <section className="my-10 grid grid-cols-4 sm:grid-cols-5 relative" key={data.id}>
                                            <div className="col-span-2 flex justify-start items-center gap-5">
                                                <img src={data.image_urls[0]} alt="product" className="w-1/3 lg:w-1/2" />
                                                <p className="text-sm md:text-base">{data.name}</p>
                                            </div>
                                            <div className="flex justify-start items-center gap-3 ml-2">
                                                <img src={check} alt="check" />
                                                <p className="text-sm md:text-base">{data.stock} stock</p>
                                            </div>
                                            <p className="font-bold text-sm sm:text-base md:text-lg flex items-center justify-end sm:justify-start">Rp {Number(data.price).toLocaleString()}</p>
                                            <button type="button" className="btn h-14 lg:h-20 hidden sm:block my-auto font-bold hover:text-white hover:bg-[#D94141]/80 text-white bg-[#D94141]" onClick={(e) => deleteProduct(data.id)}>Delete</button>
                                            <div className="absolute w-full h-full block sm:hidden" onClick={() => setModalId(1)}></div>
                                            <div className={` ${modalId === 1 ? 'flex' : 'hidden'} sm:hidden bg-secondary-black/20 absolute w-full h-full justify-center items-center gap-5`}>
                                                <button type="button" className="h-full text-center bg-red-500 px-4 font-semibold text-white" onClick={() => setModalId(null)}>Cancel</button>
                                                <button type="button" className="h-full text-center bg-green-500 px-4 font-semibold text-white" onClick={(e) => deleteProduct(data.id)}>Delete</button>
                                            </div>
                                        </section>
                                    )
                                })}
                            </div>}
                </section>
            </main>
            <Footer />
        </Fragment>
    )
}

export default MyProduct