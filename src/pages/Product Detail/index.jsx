import React, { useState } from "react";

import Header from "../../components/Header";
import DisplayPict from "./DisplayPict";
import MobileCarousel from "./MobileCarousel";

import heartIcon from "../../assets/icons/white-heart.svg";
import delivery from "../../assets/icons/delivery-fast.svg";
import pinCheck from "../../assets/icons/pin-check.svg";
import measurement from "../../assets/icons/measurement.svg";
import fb from "../../assets/icons/facebook-f.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import Details from "./Details";

const ProductDetail = () => {
    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(prev => prev + 1)
    }

    const subCount = () => {
        if(count === 0) {
            return
        }
        setCount(prev => prev - 1)
    }

    return (
        <React.Fragment>
            <Header />
            <main className="px-[5%] ">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>Shop</li>
                        <li>Shop Right Sidebar</li>
                        <li>Product</li>
                    </ul>
                </div>
                <DisplayPict />
                <MobileCarousel />
                <h1 className="text-lg md:text-xl lg:text-3xl xl:text-4xl md:pt-4 lg:pt-6 xl:pt-8 ">Coaster Home Furnishings Sofa in Oatmeal</h1>
                <div className="flex justify-start items-center gap-3 md:pt-2 lg:pt-3 xl:pt-4">
                    <div className="rating">
                        <input type="radio" name="rating-1" className="mask mask-star bg-primary-black w-4" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-primary-black w-4" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-primary-black w-4" />
                        <input type="radio" name="rating-1" className="mask mask-star bg-primary-black w-4" checked />
                        <input type="radio" name="rating-1" className="mask mask-star bg-primary-black w-4" />
                    </div>
                    <p className="text-xs">2 (reviews)</p>
                </div>
                <p className="font-bold text-xl md:text-2xl lg:text-3xl md:pt-2 lg:pt-3 xl:pt-4">$765.99</p>
                <p className="text-justify py-4 md:py-6 lg:py-8 xl:py-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem similique inventore aut unde atque repudiandae numquam eaque, voluptate esse distinctio, quam ea. Ducimus molestias iusto officia dolores nulla debitis non nesciunt eligendi? Explicabo ea, quam esse quaerat enim optio iusto assumenda cumque alias pariatur placeat, animi veniam! Dolor consequuntur temporibus cum dolore et optio natus repudiandae! Voluptates non quos impedit, itaque quasi numquam assumenda placeat dolor perferendis mollitia at sapiente iste! Mollitia neque iure sit dignissimos ea, magni similique fugit voluptas illo, commodi quisquam soluta possimus sunt enim quidem incidunt pariatur cupiditate reprehenderit debitis optio ad odit dolore in! Veritatis.</p>
                <div className="flex justify-start items-center gap-4 flex-wrap">
                    <div className="flex justify-between items-center border border-solid border-primary-black py-2 px-4 w-28">
                        <button type="button" onClick={subCount} className="text-xl font-bold">-</button>
                        <p className="text-lg font-semibold">{count}</p>
                        <button type="button" onClick={addCount} className="text-xl font-bold">+</button>
                    </div>
                    <button type="button" className="btn bg-primary-black text-white hover:bg-white hover:text-primary-black active:bg-white active:text-primary-black rounded-none">Add to cart</button>
                    <button type="button" className="flex justify-center items-center btn bg-primary-black text-white hover:bg-primary-black active:bg-primary-black rounded-none"><img src={heartIcon} alt="like" className="w-5 h-auto "/></button>
                    <button type="button" className="btn rounded-none">Add to wishlish</button>
                </div>
                <div className="py-4 md:py-6 lg:py-8 xl:py-10 text-sm">
                    <p className="md:py-1">SKU: N/A</p>
                    <p className="md:py-1">Categories: Furniture, Interior, Chair</p>
                    <p className="md:py-1">Tag: Furniture, Chair, Scandinavian, Modern</p>
                    <p className="md:py-1">Product ID: 274</p>
                </div>
                <div className="flex justify-start items-center gap-1 flex-wrap max-w-lg">
                    <div className="flex justify-start items-center gap-3 pr-4">
                        <img src={delivery} alt="delivery" className="w-5 h-auto"/>
                        <p className="text-sm">Delivery and return</p>
                    </div>
                    <div className="flex justify-start items-center gap-3 pr-4">
                        <img src={measurement} alt="delivery" className="w-5 h-auto"/>
                        <p className="text-sm">Size guide</p>
                    </div>
                    <div className="flex justify-start items-center gap-3 pr-4">
                        <img src={pinCheck} alt="delivery" className="w-5 h-auto"/>
                        <p className="text-sm">Store availability</p>
                    </div>
                </div>
                <div className="pt-5 md:pt-7 lg:pt-9 xl:pt-11 flex justify-start items-center gap-4">
                    <div className="w-8 h-8 rounded-full border border-solid border-primary-gray flex justify-center items-center">
                        <img src={fb} alt="facebook" />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-solid border-primary-gray flex justify-center items-center">
                        <img src={twitter} alt="twitter" />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-solid border-primary-gray flex justify-center items-center">
                        <img src={youtube} alt="youtube" />
                    </div>
                </div>
                <Details />

            </main>
        </React.Fragment>
    )
}

export default ProductDetail;