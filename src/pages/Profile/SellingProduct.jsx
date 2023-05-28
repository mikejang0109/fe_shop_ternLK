import { useState } from "react"
import axios from "axios"

import imgsample from "../../assets/img/brown-sofa.png"
import bgadd from "../../assets/images/bg.svg"
import Loader from "../../components/Loader"

const SellingProduct = ({ show, token }) => {
    const [name, setName] = useState()
    const [noName, setNoName] = useState(false)
    const [desc, setDesc] = useState()
    const [noDesc, setNoDesc] = useState(false)
    const [price, setPrice] = useState()
    const [noPrice, setNoPrice] = useState(false)
    const [stock, setStock] = useState()
    const [noStock, setNoStock] = useState(false)
    const [condition, setCondition] = useState()
    const [image, setImage] = useState({})
    const [imageKey, setImageKey] = useState(null)
    const imageList = Array.from(image)
    const [isLoading, setIsLoading] = useState(false)


    const addProduct = async () => {
        !name ? setNoName(true) : setNoName(false)
        !desc ? setNoDesc(true) : setNoDesc(false)
        !price ? setNoPrice(true) : setNoPrice(false)
        !stock ? setNoStock(true) : setNoStock(false)
        if (name && desc && price && stock) {
            try {
                setIsLoading(true)
                const formData = new FormData()
                if (image) {
                    // for (let i = 0; i <= image.length - 1; i++) {
                    //     formData.append(`images`, image[i], image[i].name)
                    // }
                    // imageList.forEach(img => {
                    //     formData.append("images", img)
                    // })
                    formData.append('images', image[0])
                }
                formData.append('name', name)
                formData.append('desc', desc)
                formData.append('stock', stock)
                formData.append('price', price)
                formData.append('condition', condition)
                console.log(formData);
                const url = `${process.env.REACT_APP_SERVER_HOST}/products`
                const result = await axios.post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    }
                })
                console.log(result)

            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false)
            }
        }
    }

    
    return (
        <section className="min-h-screen" >
{isLoading ? <Loader /> : 
            <section className={`${show === 3 ? 'flex' : 'hidden'} mt-8 sm:mt-10 md:mt-24 w-full mx-auto flex-col gap-10 md:gap-20`}>
                <section className="flex flex-col justify-center items-start gap-5 md:gap-10">
                    <p className="font-bold text-xl md:text-2xl font-arimo">Inventory</p>

                    <div className={`flex flex-col sm:flex-row justify-start items-start sm:items-center border border-solid ${noName ? 'border-red-600' : 'border-primary-gray'}  p-5 w-full relative`}>
                        <p className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">Name of goods *</p>
                        <input type="text" className="w-full outline-none" onChange={(e) => setName(e.target.value)} />
                        <p className={`font-normal font-arimo text-sm text-red-600 absolute -top-7 ${noName ? 'block' : 'invisible'}`}>Require</p>
                    </div>

                    <div className={` border border-solid ${noDesc ? 'border-red-600' : 'border-primary-gray'} p-5 w-full relative`}>
                        <p>Description Product *</p>
                        <textarea className="w-full resize-none outline-none" onChange={(e) => setDesc(e.target.value)}></textarea>
                        <p className={`font-normal font-arimo text-sm text-red-600 absolute -top-7 ${noDesc ? 'block' : 'invisible'}`}>Require</p>
                    </div>
                </section>
                <section className="flex flex-col justify-center items-start gap-5 md:gap-10">
                    <p className="font-bold text-2xl">Item Details</p>
                    <div className={`flex flex-col sm:flex-row justify-start items-start sm:items-center border border-solid ${noPrice ? 'border-red-600' : 'border-primary-gray'} p-5 w-full relative`}>
                        <p className="w-full sm:w-1/3 md:w-1/6">Unit price *</p>
                        <input type="number" className="w-full outline-none" onChange={(e) => setPrice(e.target.value)} />
                        <p className={`font-normal font-arimo text-sm text-red-600 absolute -top-7 ${noPrice ? 'block' : 'invisible'}`}>Require</p>
                    </div>
                    <div className={`flex flex-col sm:flex-row justify-start items-start sm:items-center border border-solid ${noStock ? 'border-red-600' : 'border-primary-gray'}  p-5 w-full relative`}>
                        <p className="w-full sm:w-1/3 md:w-1/6">Unit stock *</p>
                        <div className="flex justify-start w-full">
                            <input type="number" className="w-full outline-none" onChange={(e) => setStock(e.target.value)} />
                            <p className="w-1/5">/pcs</p>
                        </div>
                        <p className={`font-normal font-arimo text-sm text-red-600 absolute -top-7 ${noStock ? 'block' : 'invisible'}`}>Require</p>
                    </div>
                    <div>
                        <p>Stock Condition</p>
                        <div className="flex justify-start items-center gap-10 pt-5">
                            <label className="flex justify-start items-center gap-5">
                                <input
                                    type="radio"
                                    name="stock"
                                    className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                    onClick={() => setCondition(1)}
                                />
                                <p className="text-sm">New product</p>
                            </label>
                            <label className="flex justify-start items-center gap-5">
                                <input
                                    type="radio"
                                    name="stock"
                                    className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                    onClick={() => setCondition(2)}
                                />
                                <p className="text-sm">Second product</p>
                            </label>
                        </div>
                    </div>
                    <div>
                        <p>Color</p>
                        <div className="flex justify-start items-center gap-10 pt-5">
                            <label className="flex justify-start items-center gap-5">
                                <input
                                    type="radio"
                                    name="stock"
                                    className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                    onClick={() => setCondition(1)}
                                />
                                <p className="text-sm">New product</p>
                            </label>
                            <label className="flex justify-start items-center gap-5">
                                <input
                                    type="radio"
                                    name="stock"
                                    className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                    onClick={() => setCondition(2)}
                                />
                                <p className="text-sm">Second product</p>
                            </label>
                        </div>
                    </div>
                    <div>
                        <p>Brand</p>
                        <div className="flex justify-start items-center gap-10 pt-5">
                            <label className="flex justify-start items-center gap-5">
                                <input
                                    type="radio"
                                    name="stock"
                                    className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                    onClick={() => setCondition(1)}
                                />
                                <p className="text-sm">New product</p>
                            </label>
                            <label className="flex justify-start items-center gap-5">
                                <input
                                    type="radio"
                                    name="stock"
                                    className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                    onClick={() => setCondition(2)}
                                />
                                <p className="text-sm">Second product</p>
                            </label>
                        </div>
                    </div>
                </section>
                <section className="flex flex-col justify-center items-start gap-10">
                    <p className="font-bold text-2xl">Photo of Goods</p>
                    <div className="flex justify-start items-center gap-5 flex-wrap">
                        {imageList?.map((data, i) => {
                            return (
                                <div className="w-1/2 sm:w-[200px] h-[200px] flex justify-center items-center relative" key={i} onClick={() => setImageKey(i)}>
                                    <img src={URL.createObjectURL(data)} alt="products" className="object-cover" />
                                    {/* <div className={`${imageKey === i ? 'block' : 'hidden'} absolute w-full h-full bg-primary-black/50 flex justify-center items-center`} onClick={() => setImageKey(null)}>
                                    <button type="button" className="text-white font-arimo font-bold text-base hover:bg-primary-black px-3 py-1" onClick={() => deleteImage(i)}>Delete</button>
                                </div> */}
                                </div>
                            )
                        })}

                        <label className="w-1/2 sm:w-[200px] h-[200px] relative cursor-pointer flex justify-center items-center">
                            <img src={bgadd} alt="add image" />
                            <p className="text-7xl sm:text-9xl font-bold text-secondary-gray absolute top-14 sm:top-5 left-1/2 -translate-x-1/2">+</p>
                            <p className="absolute left-1/2 -translate-x-1/2 text-xs text-center top-2/3 sm:top-3/4">Add more image</p>
                            <input type="file" multiple onChange={(e) => setImage(e.target.files)} />
                        </label>
                    </div>
                </section>
                <button type="button" className="btn bg-primary-black rounded-none text-white hover:bg-white active:bg-white hover:text-primary-black active:text-primary-black w-2/5 xl:w-1/5" onClick={addProduct}>Sell Product</button>
            </section> }
        </section>
    )
}

export default SellingProduct