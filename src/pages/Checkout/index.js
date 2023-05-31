import React, { useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import { transactions as makeTransactions } from "../../utils/https/auth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { cartAction } from "../../redux/slices/cart";
import { get } from "../../utils/sessionStorage";
const Checkout = () => {
  const sessionToken = get("raz");
  const localToken = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const cart = useSelector((state) => state.cart);
  const dataShopping = cart.shoppingCart.map((item) => {
    const { image, name, price, ...newItem } = item;
    return {
      ...newItem,
    };
  });
  console.log(dataShopping);
  const disabled = name === "" || address === "" || phone === "";
  const performTransactions = () => {
    const dataShopping = cart.shoppingCart.map((item) => {
      const { image, name, price, ...newItem } = item;
      return {
        ...newItem,
      };
    });
    const body = {
      payment: 1,
      products: [
        {
          product_id: "fbf2c36e-4f43-43d5-b987-07d18dc86b99",
          size_id: "1",
          color_id: "1",
          qty: 2,
        },
      ],
    };
    console.log(body);

    if (sessionToken) {
      makeTransactions(sessionToken, body)
        .then((response) => {
          console.log(response);
          toast.success("Your Payment Is Success");
          navigate("/mycart");
          dispatch(cartAction.resetCart());
        })
        .catch((err) => {
          console.log(err);
          toast.error("Your Payment Is Failed,Try again");
        });
    } else if (localToken) {
      makeTransactions(localToken, body)
        .then((response) => {
          console.log(response);
          toast.success("Your Payment Is Success");
          navigate("/mycart");
          dispatch(cartAction.resetCart());
        })
        .catch((err) => {
          console.log(err);
          toast.error("Your Payment Is Failed,Try again");
        });
    }
  };

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
          onChange={setName}
          type="text"
          placeholder="Your Name *"
          className="p-6 border border-solid border-[#CECECE] w-full mt-[46px] font-arimo text-sm"
        />
        <input
          onChange={setAddress}
          type="text"
          placeholder="Address *"
          className="p-6 border border-solid border-[#CECECE] w-full mt-[10px] font-arimo text-sm"
        />
        <div className="flex mt-[10px]">
          <select
            name="countryCode"
            className="border border-solid border-[#CECECE] mt-2 w-[100px] p-6 text-primary-black font-bold text-lg font-arimo"
          >
            <option value="+62">+62</option>
            <option value="+1">+1</option>
            <option value="+81">+81</option>
          </select>
          <input
            onChange={setPhone}
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number *"
            className="font-arimo text-sm border border-solid border-[#CECECE] w-full mt-2 p-6"
          />
        </div>
        <select className="p-4 border border-solid border-[#CECECE] w-full mt-10 font-arimo font-bold text-lg">
          <option className="bg-visa" value="visa">
            Pay with Visa
          </option>
          <option className="bg-visa" value="paypal">
            Pay with Paypal
          </option>
        </select>
        <button
          disabled={disabled}
          onClick={performTransactions}
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
