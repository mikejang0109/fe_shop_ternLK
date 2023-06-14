import { Fragment, useState } from "react"
import axios from "axios"
import jwtDecode from "jwt-decode"
import { get } from "../../utils/sessionStorage";
import { useSelector } from "react-redux";

import bgadd from "../../assets/images/bg.svg"
import Loader from "../../components/Loader"
import Header from "../../components/Header"
import Title from "../../components/Title"
import Footer from "../../components/Footer"
import Nav from "./Nav";
import { toast } from "react-hot-toast";

const SellingProduct = () => {
    const [name, setName] = useState()
    const [noName, setNoName] = useState(false)
    const [desc, setDesc] = useState()
    const [noDesc, setNoDesc] = useState(false)
    const [price, setPrice] = useState()
    const [noPrice, setNoPrice] = useState(false)
    const [stock, setStock] = useState()
    const [noStock, setNoStock] = useState(false)
    const [condition, setCondition] = useState()
    const [color, setColor] = useState(null)
    const [brand, setBrand] = useState(null)
    const [brandName, setBrandName] = useState('null')
    const [size, setSize] = useState(null)
    const [category, setCategory] = useState(null)
    const [categoryName, setCategoryName] = useState('null')
    const [image, setImage] = useState({})
    const imageList = Array.from(image)
    const [isLoading, setIsLoading] = useState(false)
    const [showBrand, setShowBrand] = useState(false)
    const [showCategory, setShowCategory] = useState(false)

    const localToken = useSelector((state) => state.auth.token);
    const sessionToken = get("raz");
    const token = sessionToken || localToken
    const { id } = jwtDecode(token)

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
                    for (let i = 0; i <= image.length - 1; i++) {
                        formData.append(`images`, image[i], image[i].name)
                    }
                }
                formData.append('name', name)
                formData.append('desc', desc)
                formData.append('stock', stock)
                formData.append('price', price)
                formData.append('condition', condition)
                formData.append('size', size)
                formData.append('color', color)
                formData.append('category', category)
                formData.append('brand', brand)

                const url = `${process.env.REACT_APP_SERVER_HOST}/products`
                const result = await axios.post(url, formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        'Authorization': `Bearer ${token}`,
                    }
                })
                console.log(result)
                toast.success('Success add new product')
                setImage({})
            } catch (error) {
                console.log(error);
                toast.error(error.esponse.data.msg)
            } finally {
                setIsLoading(false)
            }
        }
    }
    const selectCategory = (id) => {
        setCategory(id)
        setShowCategory(false)
        switch (id) {
            case 1: setCategoryName('Accecories')
                break;
            case 2: setCategoryName('Brands')
                break;
            case 3: setCategoryName('Clothing')
                break;
            case 4: setCategoryName('Fashion')
                break;
            case 5: setCategoryName('Furnitures')
                break;
            case 6: setCategoryName('Men')
                break;
            case 7: setCategoryName('Woman')
                break;
            case 8: setCategoryName('Shoes')
                break;
            case 9: setCategoryName('Wallets')
                break;
        }
    }

    const selectBrand = (id) => {
        setBrand(id)
        setShowBrand(false)
        switch (id) {
            case 1: setBrandName('Others')
                break;
            case 2: setBrandName('IKEA')
                break;
            case 3: setBrandName('Ashley Furniture')
                break;
            case 4: setBrandName('Herman Miller')
                break;
            case 5: setBrandName('La-Z-Boy')
                break;
            case 6: setBrandName('Crate & Barrel')
                break;
            case 7: setBrandName('Restoration Hardware')
                break;
            case 8: setBrandName('Pottery Barn')
                break;
            case 9: setBrandName('Bassett Furniture')
                break;
            case 10: setBrandName('Ethan Allen')
                break;
            case 11: setBrandName('West Elm')
                break;
            case 12: setBrandName('Muji')
                break;
            case 13: setBrandName('Room & Board')
                break;
            case 14: setBrandName('CB2')
                break;
            case 15: setBrandName('Hay Furniture')
                break;
            case 16: setBrandName('DWR (Design Within Reach)')
                break;
        }

    }


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
                <section className="" >
                    {isLoading ? <Loader /> :
                        <section className={`flex mt-8 sm:mt-10 md:mt-24 w-full mx-auto flex-col gap-10 md:gap-20`}>
                            <section className="flex flex-col justify-center items-start gap-5 md:gap-10">
                                <p className="font-bold text-lg sm:text-xl md:text-2xl font-arimo">Inventory</p>

                                <div className={`flex flex-col sm:flex-row justify-start items-start sm:items-center border border-solid ${noName ? 'border-red-600' : 'border-primary-gray'}  p-5 w-full relative`}>
                                    <p className="w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 text-sm md:text-base">Name of goods *</p>
                                    <input type="text" className="w-full outline-none" onChange={(e) => setName(e.target.value)} />
                                    <p className={`font-normal font-arimo text-sm text-red-600 absolute -top-7 ${noName ? 'block' : 'invisible'}`}>Require</p>
                                </div>

                                <div className={` border border-solid ${noDesc ? 'border-red-600' : 'border-primary-gray'} p-5 w-full relative`}>
                                    <p className="w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 text-sm md:text-base">Description Product *</p>
                                    <textarea className="w-full resize-none outline-none" onChange={(e) => setDesc(e.target.value)}></textarea>
                                    <p className={`font-normal font-arimo text-sm text-red-600 absolute -top-7 ${noDesc ? 'block' : 'invisible'}`}>Require</p>
                                </div>
                            </section>
                            <section className="flex flex-col justify-center items-start gap-5 md:gap-10">
                                <p className="font-bold text-lg sm:text-xl md:text-2xl font-arimo">Item Details</p>
                                <div className={`flex flex-col sm:flex-row justify-start items-start sm:items-center border border-solid ${noPrice ? 'border-red-600' : 'border-primary-gray'} p-5 w-full relative`}>
                                    <p className="w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 text-sm md:text-base">Unit price *</p>
                                    <input type="number" className="w-full outline-none" onChange={(e) => setPrice(e.target.value)} />
                                    <p className={`font-normal font-arimo text-sm text-red-600 absolute -top-7 ${noPrice ? 'block' : 'invisible'}`}>Require</p>
                                </div>
                                <div className={`flex flex-col sm:flex-row justify-start items-start sm:items-center border border-solid ${noStock ? 'border-red-600' : 'border-primary-gray'}  p-5 w-full relative`}>
                                    <p className="w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6 text-sm md:text-base">Unit stock *</p>
                                    <div className="flex justify-start w-full">
                                        <input type="number" className="w-full outline-none" onChange={(e) => setStock(e.target.value)} />
                                        <p className="w-1/5 text-sm md:text-base">/pcs</p>
                                    </div>
                                    <p className={`font-normal font-arimo text-sm text-red-600 absolute -top-7 ${noStock ? 'block' : 'invisible'}`}>Require</p>
                                </div>
                                <div>
                                    <p className="font-bold text-lg sm:text-xl md:text-2xl font-arimo">Stock Condition</p>
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
                                    <p>Size</p>
                                    <div className="flex flex-wrap justify-start items-center gap-5 md:gap-10 pt-5">
                                        <label className="flex justify-start items-center gap-5">
                                            <input
                                                type="radio"
                                                name="stock"
                                                className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                                onClick={() => setSize(1)}
                                            />
                                            <p className="text-sm">S</p>
                                        </label>
                                        <label className="flex justify-start items-center gap-5">
                                            <input
                                                type="radio"
                                                name="stock"
                                                className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                                onClick={() => setSize(2)}
                                            />
                                            <p className="text-sm">M</p>
                                        </label>
                                        <label className="flex justify-start items-center gap-5">
                                            <input
                                                type="radio"
                                                name="stock"
                                                className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                                onClick={() => setSize(3)}
                                            />
                                            <p className="text-sm">L</p>
                                        </label>
                                        <label className="flex justify-start items-center gap-5">
                                            <input
                                                type="radio"
                                                name="stock"
                                                className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                                onClick={() => setSize(4)}
                                            />
                                            <p className="text-sm">XL</p>
                                        </label>
                                        <label className="flex justify-start items-center gap-5">
                                            <input
                                                type="radio"
                                                name="stock"
                                                className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                                onClick={() => setSize(5)}
                                            />
                                            <p className="text-sm">2XL</p>
                                        </label>
                                    </div>
                                </div>
                                <div>
                                    <p>Color</p>
                                    <div className="flex justify-start flex-wrap items-center gap-5 md:gap-10 pt-5">
                                        <label className="flex justify-start items-center gap-5">
                                            <input
                                                type="radio"
                                                name="stock"
                                                className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                                onClick={() => setColor(1)}
                                            />
                                            <p className="text-sm text-[#008080]">Teal</p>
                                        </label>
                                        <label className="flex justify-start items-center gap-5">
                                            <input
                                                type="radio"
                                                name="stock"
                                                className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                                onClick={() => setColor(2)}
                                            />
                                            <p className="text-sm text-[#000080]">Navy</p>
                                        </label>
                                        <label className="flex justify-start items-center gap-5">
                                            <input
                                                type="radio"
                                                name="stock"
                                                className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                                onClick={() => setColor(3)}
                                            />
                                            <p className="text-sm">White</p>
                                        </label>
                                        <label className="flex justify-start items-center gap-5">
                                            <input
                                                type="radio"
                                                name="stock"
                                                className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                                onClick={() => setColor(4)}
                                            />
                                            <p className="text-sm">Black</p>
                                        </label>
                                        <label className="flex justify-start items-center gap-5">
                                            <input
                                                type="radio"
                                                name="stock"
                                                className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                                onClick={() => setColor(5)}
                                            />
                                            <p className="text-sm text-[#000075]">Dark Blue</p>
                                        </label>
                                        <label className="flex justify-start items-center gap-5">
                                            <input
                                                type="radio"
                                                name="stock"
                                                className="box-border cursor-pointer appearance-none bg-transparent outline-2 outline-[#333] border border-[#979797] h-4 w-4 checked:bg-primary-black checked:border-2"
                                                onClick={() => setColor(6)}
                                            />
                                            <p className="text-sm text-[#1A1718]">Black Brown</p>
                                        </label>
                                    </div>
                                </div>
                                <div className="relative">
                                    <button className="w-full border-black border-solid border rounded-md py-2 px-3 mb-1" type="button" onClick={() => showBrand ? setShowBrand(false) : setShowBrand(true)}>
                                        Brand : {brandName}
                                    </button>
                                    <div className={`${showBrand ? 'block' : 'hidden'} w-max z-50 bg-white border-black border-solid border rounded-md py-2 absolute`}>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectBrand(1)}>Others</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectBrand(2)}>IKEA</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectBrand(3)}>Ashley Furniture</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectBrand(4)}>Herman Miller</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectBrand(5)}>La-Z-Boy</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectBrand(6)}>Crate & Barrel</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectBrand(7)}>Restoration Hardware</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectBrand(8)}>Pottery Barn</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectBrand(9)}>Bassett Furniture</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectBrand(10)}>Ethan Allen</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectBrand(11)}>West Elm</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectBrand(12)}>Muji</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectBrand(13)}>Room & Board</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectBrand(14)}>CB2</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectBrand(15)}>Hay Furniture</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectBrand(16)}>DWR (Design Within Reach)</p>
                                    </div>
                                </div>
                                <div className="relative">
                                    <button className="w-full border-black border-solid border rounded-md py-2 px-3 mb-1" type="button" onClick={() => showCategory ? setShowCategory(false) : setShowCategory(true)}>
                                        Category : {categoryName}
                                    </button>
                                    <div className={`${showCategory ? 'block' : 'hidden'} w-max z-50 bg-white border-black border-solid border rounded-md py-2 absolute`}>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectCategory(1)}>Accecories</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectCategory(2)}>Brands</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectCategory(3)}>Clothing</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectCategory(4)}>Fashion</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectCategory(5)}>Furnitures</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectCategory(6)}>Men</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectCategory(7)}>Woman</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectCategory(8)}>Shoes</p>
                                        <p className="hover:bg-secondary-gray px-3 cursor-pointer" onClick={() => selectCategory(9)}>Wallets</p>
                                        
                                    </div>
                                </div>

                            </section>
                            <section className="flex flex-col justify-center items-start md:gap-5">
                                <p className="font-bold text-lg sm:text-xl md:text-2xl font-arimo">Photo of Goods</p>
                                <div className="flex justify-start items-center gap-5 flex-wrap">
                                    {imageList?.map((data, i) => {
                                        return (
                                            <div className="w-[45%] sm:w-[200px] h-[200px] flex justify-center items-center relative" key={i}>
                                                <img src={URL.createObjectURL(data)} alt="products" className="object-cover" />
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
                        </section>}
                </section>
            </main>
            <Footer />
        </Fragment>
    )
}

export default SellingProduct