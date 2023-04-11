import React, { Component } from "react";
import Cust from '../assets/profilecust/cust.png';
import Edit2 from '../assets/profilecust/edit-3.svg';
import Logout from '../assets/profilecust/log-out.svg';
import PathDown from '../assets/profileseller/small-down.svg';

class ProfileCust extends Component {
    render() {
        return (
            <>
                <section className="bg-[#F9F9F9] w-[100vw]">
                    <div className="grid justify-items-center justify-center">
                        <p className="text-title font-normal pt-[30px] pb-[20px]
                        handphone:max-tablet:pb-[10px] handphone:max-tablet:pt-[15px]">Profile</p>
                        <p className="pb-[60px] 
                        handphone:max-tablet:pb-[30px]">See your notifications for the latest updates</p>
                    </div>
                </section>
                <section className="px-[150px] pt-[50px] text-2xl 
                handphone:max-tablet:px-[30px] handphone:max-tablet:pt-[25px]">
                    <ul className="flex gap-20 
                    handphone:max-tablet:gap-5 handphone:max-tablet:text-base handphone:max-tablet:text-center
                    handphone:max-tablet:items-center">
                        <li className="flex cursor-pointer hover:text-black active:underline underline-offset-8">Profile</li>
                        <li className="flex cursor-pointer hover:text-black active:underline underline-offset-8 gap-2 items-center text-slate-400">My Product <img src={PathDown} alt="" className="w-[15px] hover:color-black" /> </li>
                        <li className="flex cursor-pointer hover:text-black active:underline underline-offset-8 gap-2 items-center text-slate-400">Selling Product <img src={PathDown} alt="" className="w-[15px] hover:color-black" /> </li>
                        <li className="flex cursor-pointer hover:text-black active:underline underline-offset-8 gap-2 items-center text-slate-400">My Order <img src={PathDown} alt="" className="w-[15px] fill-black hover:fill-black" /> </li>
                    </ul>
                </section>
                <section className="flex px-[150px] py-[100px] gap-10
                handphone:max-tablet:px-wFormProfile handphone:max-tablet:py-[50px] handphone:max-tablet:gap-2">
                    <div className="w-max">
                        <img src={Cust} alt="" className="handphone:max-tablet:w-50"/>
                    </div>
                    <div className="flex flex-wrap w-[100px] h-[50px] gap-2 items-center pt-[15px]
                    handphone:max-tablet:h-[0] handphone:max-tablet:pt-[0] handphone:max-tablet:gap-1">
                        <p className="font-bold text-2xl
                        handphone:max-tablet:font-titleWeight handphone:max-tablet:text-medium">Syifa</p>
                        <img src={Edit2} alt="" className="w-[25px]
                        handphone:max-tablet:w-image" />
                        <p className="items-start 
                        handphone:max-tablet:text-small">as Customer</p>
                    </div>
                </section>
                <section className="grid mx-[150px] border-2 mb-[100px]
                handphone:max-tablet:mx-[5vw] handphone:max-tablet:mb-[2vh]">
                    <div className="flex px-[50px] py-[50px] border-b-2
                    handphone:max-tablet:px-wFormProfile handphone:max-tablet:py-hFormProfile">
                        <form className="grow">
                            <label>Gender</label>
                            <br></br>
                            <input type="text" placeholder="Female" className="" />
                        </form>
                        <div className="grow-0 flex gap-2 font-bold">
                            <button className="">EDIT</button>
                            <img src={Edit2} alt="" className="w-[15px]" />
                        </div>
                    </div>
                    <div className="flex px-[50px] py-[50px] border-b-2
                    handphone:max-tablet:px-wFormProfile handphone:max-tablet:py-hFormProfile">
                        <form className="grow">
                            <label>Your Email</label>
                            <br></br>
                            <input type="text" placeholder="syifa@gamil.com" className="" />
                        </form>
                        <div className="grow-0 flex gap-2 font-bold">
                            <button className="">EDIT</button>
                            <img src={Edit2} alt="" className="w-[15px]" />
                        </div>
                    </div>
                    <div className="flex px-[50px] py-[50px] border-b-2 
                    handphone:max-tablet:px-wFormProfile handphone:max-tablet:py-hFormProfile">
                        <form className="grow">
                            <label>Store Name</label>
                            <br></br>
                            <input type="text" placeholder="Apple Store" className="" />
                        </form>
                        <div className="grow-0 flex gap-2 font-bold">
                            <button className="">EDIT</button>
                            <img src={Edit2} alt="" className="w-[15px]" />
                        </div>
                    </div>
                    <div className="flex px-[50px] py-[50px] 
                    handphone:max-tablet:px-wFormProfile handphone:max-tablet:py-hFormProfile">
                        <form className="grow">
                            <label>Store Description</label>
                            <br></br>
                            <input type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit." className="" />
                        </form>
                        <div className="grow-0 flex gap-2 font-bold">
                            <button className="">EDIT</button>
                            <img src={Edit2} alt="" className="w-[15px]" />
                        </div>
                    </div>
                </section>
                <section className="px-[150px] pb-[100px]">
                    <button className="flex bg-[#D94141] px-[50px] py-[15px] rounded-md gap-2 text-white
                    handphone:max-tablet:items-center handphone:max-tablet:px-[10px]
                    handphone:max-tablet:py-[5px]"><img src={Logout} alt="" className="
                    handphone:max-tablet:w-image1.5"/> LOGOUT</button>
                </section>
            </>
        )
    }
}

export default ProfileCust;