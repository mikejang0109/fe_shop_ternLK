import React, { useState, useEffect } from "react";
import axios from "axios";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Title from "../../components/Title";
import List from "./List";
import ListEmpty from "./ListEmpty";
import { get } from "../../utils/sessionStorage";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../../components/Loader";
import { toast } from "react-hot-toast";
import { cartAction } from "../../redux/slices/cart";

const Wishlist = () => {
  const [wishlistData,setWishlistData] = useState()

  const dispatch = useDispatch()
  const localToken = useSelector((state) => state.auth.token);
  const sessionToken = get("raz");
  const token = sessionToken || localToken

useEffect(() => {
  const url = `${process.env.REACT_APP_SERVER_HOST}/apiv1/userPanel/wishlist`
  axios.get(url, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  }).then(res => setWishlistData(res.data.data))
}, [])



console.log(wishlistData);
if(!wishlistData) return <Loader />

  return (
    <>
      <Header />
      <Title
        isBreadcrumbs={true}
        breadcrumbs="Wishlist"
        title="Wishlist"
        description="Pay and get your ordered items"
      />
      {!wishlistData ? <ListEmpty /> : <List wishlistData={wishlistData} token={token}/>}
      <Footer />
    </>
  );
};

export default Wishlist;
