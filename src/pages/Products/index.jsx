import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";

import triangle from "../../assets/icons/triangle-icon.svg"
import filter from "../../assets/icons/filter-icon.jpg"

import Aside from "./Aside";
import Title from "../../components/Title";
import Header from "../../components/Header";

const Products = () => {
    const [showSort, setShowSort] = useState(false);
    const [filterModal, setFilterModal] = useState(false);
    const [productList, setProductList] = useState([]);
    const [errMsg, setErrMsg] = useState(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const controller = new AbortController()
        const url = `${process.env.REACT_APP_SERVER_HOST}/products${location.search}`
        axios.get(url, {
            signal: controller.signal
        }).then(res => setProductList(res.data)).then(() => setErrMsg(null)).catch(err => setErrMsg(err.response.data.msg))
    }, [location])

    const openSort = () => {
        showSort === false ? setShowSort(true) : setShowSort(false)
    }

    const openProductDetail = (id) => {
        navigate(`/product/${id}`)
    }

    const addSort = (sort) => {
        
        navigate(`?${location.search}&sort=${sort}`)
        setShowSort(false)
    }

    return (
        <React.Fragment>
            <Header />
            <Title
                isBreadcrumbs={true}
                breadcrumbs="Shop"
                breadcrumbs2="Shop Right Sidebar"
                title="Let's Shopping"
                description="Find and buy the one you like" />
            <main className="p-[5%] flex justify-center items-start relative">
                <Aside />
                <section className="w-full md:w-[75%] flex flex-col items-center relative h-screen md:h-[1300px]">
                    <nav className="flex justify-between items-center pb-3 w-full">
                        <div className="flex justify-center items-center md:hidden gap-2">
                            <button className="" onClick={() => setFilterModal(true)}>Filter</button>
                            <img className="w-5 h-auto" src={filter} alt="filter" />
                        </div>
                        <p className="hidden md:block">Showing 1-{errMsg ? '1' : productList.meta?.totalPage} of { errMsg ? '0' : productList.meta?.totalData} Results</p>
                        <div className="relative ">
                            <label onClick={openSort} className="flex justify-center items-center gap-2 cursor-pointer">
                                <p>Sort By</p>
                                <img src={triangle} alt='filter' className={`${showSort === true && 'rotate-180'}`} />
                            </label>
                            <div className={`absolute z-10 right-0 flex flex-col items-end justify-center gap-2 p-2 shadow bg-white rounded-box w-32 ${showSort === true ? 'block' : 'hidden'}`}>
                                <p className="cursor-pointer hover:bg-zinc-50 w-full text-right" onClick={() => addSort('newest')}>Newest</p>
                                <p className="cursor-pointer hover:bg-zinc-50 w-full text-right" onClick={() => addSort('oldest')}>Oldest</p>
                                <p className="cursor-pointer hover:bg-zinc-50 w-full text-right" onClick={() => addSort('cheapest')}>Cheapest</p>
                                <p className="cursor-pointer hover:bg-zinc-50 w-full text-right" onClick={() => addSort('priciest')}>Priciest</p>
                                <p className="cursor-pointer hover:bg-zinc-50 w-full text-right" onClick={() => addSort('bestselling')}>Bestselling</p>
                            </div>
                        </div>
                    </nav>
                    <div className={`${errMsg !== null ? 'block' : 'hidden'} font-bold text-lg pt-10`}>{errMsg}</div>
                    <div className={`grid-cols-2 md:grid-cols-3 w-full ${errMsg !== null ? 'hidden' : 'grid'}`}>
                        {productList.data?.map((data) => {
                            return (
                                <div className="text-center w-[90%] h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] mx-auto mb-[15%] xl:mb-0 hover:scale-105 cursor-pointer" key={data.id} onClick={() => openProductDetail(data.id)}>
                                    <div className="w-full h-4/5  overflow-hidden relative bg-slate-50">
                                        <img src={data.image_urls[0]} alt="product" className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                                    </div>
                                    <div className="p-[3%] h-1/5">
                                        <p className="text-xs md:text-base pb-1">{data.name}</p>
                                        <p className="font-bold text-sm md:text-lg">IDR {data.price}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    <div className="btn-group pt-5 ">
                        <button className={`${productList.meta?.totalPage === 1 ? "invisible" : "visible"} btn bg-primary-black text-white hover:bg-white hover:text-primary-black active:bg-white active:text-primary-black`}>«</button>
                        <button className={`btn bg-primary-black text-white hover:bg-white hover:text-primary-black active:bg-white active:text-primary-black`}>Page {productList.meta?.totalPage}</button>
                        <button className={`${productList.meta?.totalPage === 1 ? "invisible" : "visible"} btn bg-primary-black text-white hover:bg-white hover:text-primary-black active:bg-white active:text-primary-black`}>»</button>
                    </div>
                </section>

            </main>
            <section className={`fixed ${filterModal === true ? "block" : "hidden"} top-0 bottom-0 p-[5%] bg-white h-screen w-screen overflow-y-scroll md:hidden`}>
                <div className="flex justify-between items-center pb-4">
                    <div className="flex justify-center items-center gap-2">
                        <button className="font-bold" type="button" onClick={() => setFilterModal(false)}>&#10005;</button>
                        <p className="font-semibold">Filter</p>
                    </div>
                    <button className="font-semibold text-sm">reset</button>
                </div>
                <section>
                    <div className="pb-4">
                        <p className="font-semibold pb-2">Categories</p>
                        <div className="flex justify-center items-center gap-3 flex-wrap">
                            <label className="relative ">
                                <input className="peer absolute opacity-0" type="checkbox" />
                                <div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center"><p>Accecories</p></div>
                            </label>
                            <label className="relative ">
                                <input className="peer absolute opacity-0" type="checkbox" />
                                <div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center"><p>Brands</p></div>
                            </label>
                            <label className="relative ">
                                <input className="peer absolute opacity-0" type="checkbox" />
                                <div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center"><p>Clothing</p></div>
                            </label>
                            <label className="relative ">
                                <input className="peer absolute opacity-0" type="checkbox" />
                                <div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center"><p>Fashion</p></div>
                            </label>
                            <label className="relative ">
                                <input className="peer absolute opacity-0" type="checkbox" />
                                <div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center"><p>Furniture</p></div>
                            </label>
                            <label className="relative ">
                                <input className="peer absolute opacity-0" type="checkbox" />
                                <div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center"><p>Men</p></div>
                            </label>
                        </div>
                    </div>
                    <div className="pb-4">
                        <p className="font-semibold pb-2">Price</p>
                        <div className="flex justify-center items-center gap-5">
                            <div className="flex justify-start items-center gap-1 border border-solid border-primary-gray py-1 px-2 flex-1">
                                <p>Rp</p>
                                <input type="number" placeholder="Lowest" className="w-full py-1 px-2" />
                            </div>
                            <div className="flex justify-start items-center gap-1 border border-solid border-primary-gray py-1 px-2 flex-1">
                                <p>Rp</p>
                                <input type="number" placeholder="Highest" className="w-full py-1 px-2" />
                            </div>
                        </div>
                    </div>
                    <div className="pb-4">
                        <p className="font-semibold pb-2">Brands</p>
                        <div className="flex justify-center items-center gap-3 flex-wrap">
                            <label className="relative ">
                                <input className="peer absolute opacity-0" type="checkbox" />
                                <div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center"><p>IKEA</p></div>
                            </label>
                            <label className="relative ">
                                <input className="peer absolute opacity-0" type="checkbox" />
                                <div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center"><p>Mr Royal</p></div>
                            </label>
                            <label className="relative ">
                                <input className="peer absolute opacity-0" type="checkbox" />
                                <div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center"><p>Sweet House</p></div>
                            </label>
                            <label className="relative ">
                                <input className="peer absolute opacity-0" type="checkbox" />
                                <div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center"><p>North Oxford</p></div>
                            </label>
                            <label className="relative ">
                                <input className="peer absolute opacity-0" type="checkbox" />
                                <div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center"><p>Mr Poppins 1928</p></div>
                            </label>
                        </div>
                    </div>
                    <div className="pb-4">
                        <p className="font-semibold pb-2">Colors</p>
                        <div className="flex justify-center items-center gap-4 flex-wrap">
                            <div className="h-4 w-4 rounded-full bg-red-600"></div>
                            <div className="h-4 w-4 rounded-full bg-orange-600"></div>
                            <div className="h-4 w-4 rounded-full bg-yellow-600"></div>
                            <div className="h-4 w-4 rounded-full bg-green-600"></div>
                            <div className="h-4 w-4 rounded-full bg-blue-600"></div>
                            <div className="h-4 w-4 rounded-full bg-violet-600"></div>
                            <div className="h-4 w-4 rounded-full bg-pink-600"></div>
                        </div>
                    </div>
                    <div className="pb-4">
                        <p className="font-semibold pb-2">Sizes</p>
                        <div className="flex justify-center items-center flex-wrap gap-4">
                            <label className="relative ">
                                <input className="peer absolute opacity-0" type="checkbox" />
                                <div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center"><p>S</p></div>
                            </label>
                            <label className="relative ">
                                <input className="peer absolute opacity-0" type="checkbox" />
                                <div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center"><p>M</p></div>
                            </label>
                            <label className="relative ">
                                <input className="peer absolute opacity-0" type="checkbox" />
                                <div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center"><p>L</p></div>
                            </label>
                            <label className="relative ">
                                <input className="peer absolute opacity-0" type="checkbox" />
                                <div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center"><p>XL</p></div>
                            </label>
                            <label className="relative ">
                                <input className="peer absolute opacity-0" type="checkbox" />
                                <div className="peer-checked:bg-black peer-checked:text-white py-2 px-3 border border-tertiary-gray border-solid flex justify-center items-center"><p>Full Size</p></div>
                            </label>
                        </div>
                    </div>
                    <button className="btn w-full bg-primary-black text-white hover:bg-white hover:text-primary-black active:bg-white active:text-primary-black">Filter</button>
                </section>

            </section>
        </React.Fragment >
    )
}

export default Products;