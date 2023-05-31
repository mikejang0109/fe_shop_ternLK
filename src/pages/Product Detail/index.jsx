import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header";
import DisplayPict from "./DisplayPict";
import MobileCarousel from "./MobileCarousel";

import heartIcon from "../../assets/icons/white-heart.svg";
import delivery from "../../assets/icons/delivery-fast.svg";
import pinCheck from "../../assets/icons/pin-check.svg";
import measurement from "../../assets/icons/measurement.svg";
import fb from "../../assets/icons/facebook-f.svg";
import twitter from "../../assets/icons/twitter.svg";
import youtube from "../../assets/icons/youtube.svg";
import Details from "./Details";
import RelatedProducts from "./RelatedProducts";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../redux/slices/cart";
import Footer from "../../components/Footer";
import Loader from "../../components/Loader";
import { wishlist } from "../../utils/https/product";
import { toast } from "react-hot-toast";

const ProductDetail = () => {
  const [count, setCount] = useState(1);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const id = location.pathname.split("/").reverse()[0];
  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const controller = new AbortController();
    const url = `${process.env.REACT_APP_SERVER_HOST}/products/${id}`;
    axios
      .get(url, {
        signal: controller.signal,
      })
      .then((res) =>
        res.data.rows.forEach((d) => {
          const productData = {
            productId: d.id,
            name: d.name,
            description: d.description,
            stock: d.stock,
            price: d.price,
            categoryName: d.category_name,
            brandName: d.brand_name,
            conditionName: d.condition_name,
            colors: d.colors,
            sizes: d.sizes,
            images: d.image_urls,
            storeName: d.store_name,
            storeDesc: d.store_desc,
          };
          setData(productData);
        })
      )
      .catch((err) => console.log(err.message));

    return () => {
      controller.abort();
    };
  }, [id]);

  const addCount = () => {
    setCount((prev) => prev + 1);
  };

  const subCount = () => {
    if (count === 1) {
      return;
    }
    setCount((prev) => prev - 1);
  };

  const addWishlist = (e) => {
    e.preventDefault();
    toast.dismiss();
    toast.promise(
      wishlist(id, token).then((res) => console.log(res.data.msg)),
      {
        loading: () => {
          e.target.disabled = true;
          return <>Please wait...</>;
        },
        success: () => {
          return <>Success add new wishlist</>;
        },
        error: () => {
          e.target.disabled = false;
          return <>Failed add new wishlist</>;
        },
      },
      { success: { duration: Infinity }, error: { duration: Infinity } }
    );
  };

  const addCart = () => {
    const cart = {
      product_id: id,
      size_id: data.sizes[0].id ,
      color_id: data.colors[0].id,
      qty: count,
      image: data.images[0],
      name: data.name,
      price: data.price,
    };
    dispatch(cartAction.addtoCart(cart));
    toast.success("Add new cart");
  };

  console.log(!data);
  if (!data) return <Loader />;

  return (
    <React.Fragment>
      <Header />
      <main className="px-[5%] pb-[5%]">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>Shop</li>
            <li>Shop Right Sidebar</li>
            <li>Product</li>
          </ul>
        </div>
        <DisplayPict data={data.images} />
        <MobileCarousel data={data.images} />
        <h1 className="text-lg md:text-xl lg:text-3xl xl:text-4xl md:pt-4 lg:pt-6 xl:pt-8 ">
          {data.name}
        </h1>
        <div className="flex justify-start items-center gap-3 md:pt-2 lg:pt-3 xl:pt-4">
          <div className="rating">
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star bg-primary-black w-4"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star bg-primary-black w-4"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star bg-primary-black w-4"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star bg-primary-black w-4"
            />
            <input
              type="radio"
              name="rating-1"
              className="mask mask-star bg-primary-black w-4"
            />
          </div>
          <p className="text-xs">2 (reviews)</p>
        </div>
        <p className="font-bold text-xl md:text-2xl lg:text-3xl md:pt-2 lg:pt-3 xl:pt-4">
          IDR {Number(data.price).toLocaleString()}
        </p>
        <p className="text-justify py-4 md:py-6 lg:py-8 xl:py-10">
          {data.description}
        </p>
        <div className="flex justify-start items-center gap-4 flex-wrap">
          <div className="flex justify-between items-center border border-solid border-primary-black py-2 px-4 w-28">
            <button
              type="button"
              onClick={subCount}
              className="text-xl font-bold"
            >
              -
            </button>
            <p className="text-lg font-semibold">{count}</p>
            <button
              type="button"
              onClick={addCount}
              className="text-xl font-bold"
            >
              +
            </button>
          </div>
          <button
            type="button"
            className="btn bg-primary-black text-white hover:bg-white hover:text-primary-black active:bg-white active:text-primary-black rounded-none"
            onClick={addCart}
          >
            Add to cart
          </button>
          <button
            type="button"
            className="flex justify-center items-center btn bg-primary-black text-white hover:bg-primary-black active:bg-primary-black rounded-none"
          >
            <img src={heartIcon} alt="like" className="w-5 h-auto " />
          </button>
          <button
            type="button"
            className="btn bg-primary-black text-white hover:bg-white hover:text-primary-black active:bg-white active:text-primary-black rounded-none"
            onClick={addWishlist}
          >
            Add to wishlist
          </button>
        </div>
        <div className="py-4 md:py-6 lg:py-8 xl:py-10 text-sm">
          <p className="md:py-1">SKU: N/A</p>
          <p className="md:py-1">Categories: Furniture, Interior, Chair</p>
          <p className="md:py-1">Tag: Furniture, Chair, Scandinavian, Modern</p>
          <p className="md:py-1">Product ID: {data.productId}</p>
        </div>
        <div className="flex justify-start items-center gap-1 flex-wrap max-w-lg">
          <div className="flex justify-start items-center gap-3 pr-4">
            <img src={delivery} alt="delivery" className="w-5 h-auto" />
            <p className="text-sm">Delivery and return</p>
          </div>
          <div className="flex justify-start items-center gap-3 pr-4">
            <img src={measurement} alt="delivery" className="w-5 h-auto" />
            <p className="text-sm">Size guide</p>
          </div>
          <div className="flex justify-start items-center gap-3 pr-4">
            <img src={pinCheck} alt="delivery" className="w-5 h-auto" />
            <p className="text-sm">Store availability</p>
          </div>
        </div>
        <div className="pt-5 md:pt-7 lg:pt-9 xl:pt-11 flex justify-start items-center gap-4">
          <div className="w-8 h-8 rounded-full border border-solid border-primary-gray flex justify-center items-center cursor-pointer">
            <img src={fb} alt="facebook" />
          </div>
          <div className="w-8 h-8 rounded-full border border-solid border-primary-gray flex justify-center items-center cursor-pointer">
            <img src={twitter} alt="twitter" />
          </div>
          <div className="w-8 h-8 rounded-full border border-solid border-primary-gray flex justify-center items-center cursor-pointer">
            <img src={youtube} alt="youtube" />
          </div>
        </div>
        <Details data={data.images} />
        <RelatedProducts />
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default ProductDetail;
