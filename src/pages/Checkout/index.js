import React from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <>
      <Header />
      <Title
        isBreadcrumbs={true}
        breadcrumbs="Cart"
        breadcrumbs2="Checkout"
        title="Check Out"
        description="Pay and get your ordered items"
      />
      <section className="w-[560px] h-[506px] m-auto mt-20 mb-[120px]">
        <h2 className="font-arimo text-3xl text-primary-black">
          Self Information
        </h2>
        <input
          type="text"
          placeholder="Your Name *"
          className="p-6 border border-solid border-[#CECECE] w-full mt-[46px] font-arimo text-sm"
        ></input>
        <input
          type="text"
          placeholder="Address *"
          className="p-6 border border-solid border-[#CECECE] w-full mt-[10px] font-arimo text-sm"
        ></input>
        <div className="flex mt-[10px]">
          <select
            name="countryCode"
            className=" border border-solid border-[#CECECE] mt-2 w-[100px] p-6 text-primary-black font-bold text-lg font-arimo"
          >
            <option value="+62">+62</option>
            <option value="+1">+1</option>
            <option value="+81">+81</option>
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number *"
            className="font-arimo text-sm border border-solid border-[#CECECE] w-full mt-2 p-6"
          ></input>
        </div>
        <select className="p-4 pl-20 border border-solid border-[#CECECE] w-full mt-10 font-arimo font-bold text-lg">
          <option className="bg-visa" value="visa">
            Pay with Visa
          </option>
          <option className="bg-visa" value="paypal">
            Pay with Paypal
          </option>
        </select>
        <button
          onClick={() => navigate("/cart")}
          className="bg-primary-black text-white font-arimo font-bold text-sm text-center p-6 mt-8 w-full lg:w-auto"
        >
          Check Out
        </button>
      </section>
      <Footer />
    </>
  );
};

export default Checkout;
