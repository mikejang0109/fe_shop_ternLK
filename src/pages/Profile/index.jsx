import React, { Component } from "react";
import Cust from '../../assets/profilecust/cust.png';
import Edit2 from '../../assets/profilecust/edit-3.svg';
import Logout from '../../assets/profilecust/log-out.svg';
import Title from "../../components/Title";
import Header from "../../components/Header";
import Footer from '../../components/Footer';

class ProfileCust extends Component {
  render() {
    return (
      <>
        <Header />
        <Title
          isBreadcrumbs={true}
          breadcrumbs=""
          breadcrumbs2=""
          title="Profile"
          description="See your notifications for the latest updates"
        />
        <section className="flex px-[19vw] py-[50px] gap-10
        handphone:max-tablet:pl-wFormProfile 
        handphone:max-tablet:pr-wFormProfile 
        handphone:max-tablet:pt-[5vw]
        handphone:max-tablet:pb-[10vw]  
        handphone:max-tablet:gap-3">
          <div className="w-max">
            <img src={Cust} alt="" className="w-ProfileImage handphone:max-tablet:w-50" />
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
        <section className="grid mx-[19vw] border-2 mb-[13vh] 
        handphone:max-tablet:mx-[5vw] 
        handphone:max-tablet:mb-[2vh]">
          <form className="flex flex-wrap">
            <div className="grid grid-cols-3 grid-flow-row-dense px-[50px] py-[50px] border-b-2 w-full
          handphone:max-tablet:px-wFormProfile handphone:max-tablet:py-hFormProfile">
              <div className="col-span-2">
                <label>Gender</label>
                <br></br>
                <input type="checkbox" name="checkboxes" id="checkboxes-0" value="1" className="mr-[10px]" disabled/>
                Pria
                <input type="checkbox" name="checkboxes" id="checkboxes-1" value="2" className="mx-[10px]" disabled/>
                Wanita
              </div>
              <div className="flex justify-end col-span-1 gap-2 font-bold">
                <button className="">EDIT</button>
                <img src={Edit2} alt="" className="w-[15px]" />
              </div>
            </div>
            <div className="grid grid-cols-3 grid-flow-row-dense px-[50px] py-[50px] border-b-2 w-full
          handphone:max-tablet:px-wFormProfile handphone:max-tablet:py-hFormProfile">
              <div className="col-span-2">
                <label>Your Email</label>
                <br></br>
                <input type="text" placeholder="syifa@gamil.com" className="p-[10px]" disabled/>
              </div>
              <div className="flex justify-end col-span-1 gap-2 font-bold">
                <button className="">EDIT</button>
                <img src={Edit2} alt="" className="w-[15px]" />
              </div>
            </div>
            <div className="grid grid-cols-3 grid-flow-row-dense px-[50px] py-[50px] w-full
          handphone:max-tablet:px-wFormProfile handphone:max-tablet:py-hFormProfile">
              <div className="col-span-2">
                <label>Store Description</label>
                <br></br>
                <input type="text" placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit." className="w-full p-[10px]" disabled/>
              </div>
              <div className="flex justify-end col-span-1 gap-2 font-bold">
                <button className="">EDIT</button>
                <img src={Edit2} alt="" className="w-[15px]" />
              </div>
            </div>
          </form>
        </section>
        <section className="px-[19vw] pb-[13vh] 
        handphone:max-tablet:flex handphone:max-tablet:justify-center">
          <button className="flex bg-[#D94141] px-[50px] py-[15px] rounded-md gap-2 text-white
        handphone:max-tablet:px-[10px] handphone:max-tablet:py-[5px]"><img src={Logout} alt="" className="
        handphone:max-tablet:w-image1.5"/> LOGOUT</button>
        </section>
        <Footer />
      </>
    )
  }
}

export default ProfileCust;