import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import CartEmpty from "./EmptyCart";
import Cart from "./Cart";
import { useSelector } from "react-redux";

const CartPage = () => {
  const [isCartEmpty, setIsCartEmpty] = useState(true);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    if (cart) {
      setIsCartEmpty(false)
    }

  }, [cart])

  // const handleCart = () => {
  //   setIsCartEmpty(false);
  // };

  return (
    <>
      <Header />
      <Title
        isBreadcrumbs={true}
        breadcrumbs="Cart"
        title="Your Cart"
        description="Buy everything in your cart now!"
      />
      {isCartEmpty ? <CartEmpty /> : <Cart cart={cart} />}
    </>
  );
};

export default CartPage;
