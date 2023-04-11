import React, { Component } from "react";
import Cust from '../assets/profilecust/cust.png';
import Edit2 from '../assets/profilecust/edit-3.svg';
import Logout from '../assets/profilecust/log-out.svg';

class ProfileCust extends Component {
  render() {
    return (
      <>
        <section className="bg-[#F9F9F9] handphone:w-[100vw]">
          <div className="grid justify-items-center justify-center ">
            <p className="text-title font-normal pt-[30px] pb-[20px]
            handphone:max-tablet:text-mid handphone:max-tablet:pb-[10px]">Profile</p>
            <p className="pb-[60px]
            handphone:max-tablet:text-medium handphone:max-tablet:pb-[30px]">See your notifications for the latest updates</p>
          </div>
        </section>
        <section className="flex px-[10vw] py-[100px] gap-10
        handphone:max-tablet:pl-wFormProfile 
        handphone:max-tablet:pr-wFormProfile pt-[5vw] pb-[10vw] flex flex-start gap-3">
          <div className="w-max">
            <img src={Cust} alt="" className="w-ProfileImage handphone:max-tablet:w-50"/>
          </div>
          <div className="flex flex-wrap w-[150px] gap-2 items-center
          handphone:max-tablet:pt-[0px] gap-0 handphone:max-tablet:w-textimage">
            <p className="font-bold text-title pr-[0]
            handphone:max-tablet:font-titleWeight handphone:max-tablet:text-medium pr-[1vw]">Syifa</p>
            <img src={Edit2} alt="" className="w-image2
            handphone:max-tablet:w-image"/>
            <p className="items-start handphone:max-tablet:text-small">as Customer</p>
          </div>
        </section>
        <section className="grid mx-[150px] border-2 mb-[100px]
        handphone:max-tablet:mx-[5vw] handphone:max-tablet:mb-[2vh]">
          <div className="flex px-[50px] py-[50px] border-b-2
          handphone:max-tablet:px-wFormProfile handphone:max-tablet:py-hFormProfile">
            <form className="grow">
              <label>Gender</label>
              <br></br>
              <input type="text" placeholder="Female" className=""/>
            </form>
            <div className="grow-0 flex gap-2 font-bold">
              <button className="">EDIT</button>
              <img src={Edit2} alt="" className="w-[15px]"/>
            </div>
          </div>
          <div className="flex px-[50px] py-[50px] border-b-2
          handphone:max-tablet:px-wFormProfile handphone:max-tablet:py-hFormProfile">
          <form className="grow">
              <label>Your Email</label>
              <br></br>
              <input type="text" placeholder="syifa@gamil.com" className=""/>
            </form>
            <div className="grow-0 flex gap-2 font-bold">
              <button className="">EDIT</button>
              <img src={Edit2} alt="" className="w-[15px]"/>
            </div>
            </div>
          <div className="flex px-[50px] py-[50px]
          handphone:max-tablet:px-wFormProfile handphone:max-tablet:py-hFormProfile">
          <form className="grow">
              <label>Store Description</label>
              <br></br>
              <input type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit." className=""/>
            </form>
            <div className="grow-0 flex gap-2 font-bold">
              <button className="">EDIT</button>
              <img src={Edit2} alt="" className="w-[15px]"/>
            </div>
            </div>
        </section>
        <section className="px-[150px] pb-[100px] 
        handphone:max-tablet:flex handphone:max-tablet:justify-center">
          <button className="flex bg-[#D94141] px-[50px] py-[15px] rounded-md gap-2 text-white
        handphone:max-tablet:px-[10px] handphone:max-tablet:py-[5px]"><img src={Logout} alt="" className="
        handphone:max-tablet:w-image1.5"/> LOGOUT</button>
        </section>
      </>
    )
  }
}

export default ProfileCust;