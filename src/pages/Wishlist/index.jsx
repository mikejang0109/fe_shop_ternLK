import React, { useState } from "react";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Title from "../../components/Title";
import List from "./List";
import ListEmpty from "./ListEmpty";

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
      {isCartEmpty ? <ListEmpty /> : <List onCart={handleCart} />}
      <Footer />
    </>
  );
};

export default Wishlist;
