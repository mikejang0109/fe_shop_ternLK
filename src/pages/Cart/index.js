import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import CartEmpty from "./EmptyCart";
import Cart from "./Cart";
<<<<<<< HEAD
import { useSelector } from "react-redux";
=======
import Footer from "../../components/Footer";
>>>>>>> eba1858b4c07e215335f54ea56f10697b284f759

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
<<<<<<< HEAD
      {isCartEmpty ? <CartEmpty /> : <Cart cart={cart} />}
=======
      {isCartEmpty ? <CartEmpty /> : <Cart onCart={handleCart} />}
      <Footer />
>>>>>>> eba1858b4c07e215335f54ea56f10697b284f759
    </>
  );
};

export default CartPage;
