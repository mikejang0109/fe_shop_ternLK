import { useLocation, useNavigate } from "react-router-dom"
import { useState } from "react";

import PathDown from '../../assets/profileseller/small-down.svg';
const Nav = () => {
    const [myOrderModal, setMyOrderModal] = useState()
    const [myProductModal, setMyProductModal] = useState()
    const [navValue, setNavValue] = useState(1)
    const location = useLocation()
    const navigate = useNavigate()

    return (
        <section className="overflow-visible">
            <nav className="flex justify-start gap-5 sm:gap-10 md:gap-16 lg:gap-20 w-max ">
                <div className={`flex pb-4 cursor-pointer  hover:text-primary-black hover:border-b-2 hover:border-b-primary-black text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ${location.pathname === '/profile' ? 'text-primary-black border-b-2 border-b-primary-black' : 'text-[#b4b4b4]'}`} onClick={() => {
                    navigate('/profile')
                    setMyOrderModal(false)
                    setMyProductModal(false)
                }}>
                    <p>Profile</p>
                </div>
                <div className={`flex pb-4 cursor-pointer items-center gap-1 sm:gap-2 hover:text-primary-black hover:border-b-2 hover:border-b-primary-black text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ${location.pathname === '/myproduct' ? 'text-primary-black border-b-2 border-b-primary-black' : 'text-[#b4b4b4]'} relative`} onClick={() => {
                    setNavValue(2)
                    setMyOrderModal(false)
                    myProductModal ? setMyProductModal(false) : setMyProductModal(true)
                }}>
                    <p className={`hover:text-primary-black text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ${location.pathname === '/myproduct' ? 'text-primary-black ' : 'text-[#b4b4b4]'}`}>My Product</p>
                    <img src={PathDown} alt="path" className="w-4 h-2" />
                    <div className={`${myProductModal ? 'flex' : 'hidden'} w-[150px] lg:w-[300px] p-5 md:p-10 bg-primary-black flex-col gap-5 absolute top-16 z-50`}>
                        <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" onClick={() => { navigate('/myproduct') }}>All</p>
                        <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" onClick={() => { navigate('/myproduct?stock=available') }}>Available</p>
                        <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" onClick={() => { navigate('/myproduct?stock=unavailable') }}>Sold</p>
                    </div>
                </div>
                <div className={`flex pb-4 cursor-pointer items-center gap-1 sm:gap-2 hover:text-primary-black hover:border-b-2 hover:border-b-primary-black text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ${location.pathname === '/sellproduct' ? 'text-primary-black border-b-2 border-b-primary-black' : 'text-[#b4b4b4]'} relative`} onClick={() => {
                    navigate('/sellproduct')
                    setMyOrderModal(false)
                    setMyProductModal(false)
                }}>
                    <p>Selling Product</p>
                </div>
                <div className={`flex pb-4 cursor-pointer items-center gap-1 sm:gap-2 hover:text-primary-black hover:border-b-2 hover:border-b-primary-black text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl ${location.pathname === '/myorder' ? 'text-primary-black border-b-2 border-b-primary-black' : 'text-[#b4b4b4]'} relative`} onClick={() => {
                    setMyProductModal(false)
                    myOrderModal ? setMyOrderModal(false) : setMyOrderModal(true)
                }}>
                    <p>My Order</p>
                    <img src={PathDown} alt="path" className="w-4 h-2" />
                    <div className={`${myOrderModal ? 'flex' : 'hidden'} w-[200px] lg:w-[300px] p-5 md:p-10 bg-primary-black flex-col gap-5 absolute top-16 right-0 z-40`}>
                        <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" onClick={() => navigate('/myorder')}>All</p>
                        <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" >Get Paid</p>
                        <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" >Processed</p>
                        <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" >Sent</p>
                        <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" >Completed</p>
                        <p className="text-[#b4b4b4] text-sm sm:text-base md:text-lg hover:text-white cursor-pointer" >Order Cancel</p>
                    </div>
                </div>
            </nav>
        </section>
    )
}

export default Nav