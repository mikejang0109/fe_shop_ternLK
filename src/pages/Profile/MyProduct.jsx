import { useState, useEffect } from "react"
import axios from 'axios'
import jwtDecode from "jwt-decode"
import { useNavigate } from "react-router-dom"


import imgsample from "../../assets/img/bedroom.png"
import check from "../../assets/icons/check-circle-08.svg"
import Loader from "../../components/Loader"
import { toast } from "react-hot-toast"

const MyProduct = ({ show, token }) => {
    const [modalId, setModalId] = useState()
    const [product, setProduct] = useState()
    const [deleteLoading, setDeleteLoading] = useState()
    const { id } = jwtDecode(token)

    useEffect(() => {
        let stock
        let url = `${process.env.REACT_APP_SERVER_HOST}/products?seller_id=${id}`
        if (show === 21) {
            url += `&stock=all`
        }
        if (show === 22) {
            url += `&stock=available`
        }
        if (show === 23) {
            url += `&stock=unavailable`
        }
        axios.get(url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        }).then(res => setProduct(res.data.data)).catch(err => console.log(err))
    }, [show])

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
            toast.error(error.response.data.msg)
        } finally {
            setDeleteLoading(false)
        }
    }

    return (
        <section className={`${show === 21 || show === 22 || show === 23 ? 'block' : 'hidden'} mt-10 md:mt-24`}>

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
                 deleteLoading? <Loader /> :
            <div>
                {product?.map((data) => {
                    return (
                        <section className="my-10 grid grid-cols-4 sm:grid-cols-5 relative" key={data.id}>
                            <div className="col-span-2 flex justify-start items-center gap-5">
                                <img src={imgsample} alt="product" className="w-1/3 lg:w-1/2" />
                                <p className="text-sm md:text-base">{data.name}</p>
                            </div>
                            <div className="flex justify-start items-center gap-3 ml-2">
                                <img src={check} alt="check" />
                                <p className="text-sm md:text-base">{data.stock} stock</p>
                            </div>
                            <p className="font-bold text-base md:text-lg flex items-center justify-end sm:justify-start">IDR {Number(data.price).toLocaleString()}</p>
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
    )
}

export default MyProduct