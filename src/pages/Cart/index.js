import React, { useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import CartEmpty from "./EmptyCart";
import Cart from "./Cart";
import Footer from "../../components/Footer";

const CartPage = () => {
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const handleCart = () => {
    setIsCartEmpty(false);
  };

  return (
    <>
      <Header />
      <Title
        isBreadcrumbs={true}
        breadcrumbs="Cart"
        title="Your Cart"
        description="Buy everything in your cart now!"
      />
      {isCartEmpty ? <CartEmpty /> : <Cart onCart={handleCart} />}
      <Footer />
    </>
  );
};

export default CartPage;
