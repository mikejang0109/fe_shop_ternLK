import React, { useState } from "react";

// import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Title from "../../components/Title";
import List from "./List";

const Wishlist = () => {
  const [isCartEmpty, setIsCartEmpty] = useState(true);

  const handleCart = () => {
    setIsCartEmpty(false);
  };

  return (
    <>
      <Header />
      <Title
        isBreadcrumbs={true}
        breadcrumbs="Wishlist"
        title="Wishlist"
        description="Pay and get your ordered items"
      />
      <List />
      {/* {isCartEmpty ? <CartEmpty /> : <Cart onCart={handleCart} />} */}
      {/* <Footer /> */}
    </>
  );
};

export default Wishlist;
