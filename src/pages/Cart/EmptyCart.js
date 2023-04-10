import React from "react";
import shoppingcart from "../../assets/icons/shopping-cart.svg";

const CartEmpty = () => {
  return (
    <>
      <section className="w-[570px] h-[278px] m-auto mb-[120px]">
        <img className="mt-20 m-auto" src={shoppingcart} />
        <h1 className="mt-10 font-arimo text-primary-black text-3xl text-center">
          Your Cart is Empty
        </h1>
        <p className="mt-2 text-center font-arimo text-base leading-9">
          Cart is empty, please select a product first Cart is empty, please
          select a product first Cart is empty, please select a product first
        </p>
      </section>
    </>
  );
};

export default CartEmpty;
