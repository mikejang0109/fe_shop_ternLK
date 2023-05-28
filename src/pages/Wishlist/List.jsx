import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import axios from "axios";
import Loader from "../../components/Loader";
import { cartAction } from "../../redux/slices/cart";

function List({ wishlistData, token }) {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const addCart = (data) => {
    const cart = {
        product_id: data.product_id,
        size_id: null,
        color_id: null,
        qty: 1,
        image: data.img_url,
        name: data.name,
        price: data.price
    }
    dispatch(cartAction.submitCart(cart))
    toast.success('Add new cart')
  }

  const openProductDetail = (id) => {
    navigate(`/product/${id}`)
  }

  const deleteWishlist = async(id) => {
    try {
      setIsLoading(true)
      const url = `${process.env.REACT_APP_SERVER_HOST}/apiv1/userPanel/wishlist/${id}`
      const result = await axios.delete(url, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(result.data);
      window.location.reload()
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false)
    }
  }
  // if(isLoading) return <Loader />
  return (
    <section className="flex justify-center flex-col xl:flex-row min-h-screen">
      {isLoading ? <Loader /> : 
      <section className="w-full px-8 lg:px-20 lg:m-auto xl:m-0 py-20">
        <hr className="border-b border-solid border-secondary-gray" />
        <div className="flex my-7">
          <p className="flex-[3_3_0%] text-primary-black font-arimo">Product</p>
          <p className="flex-1 text-primary-black font-arimo hidden md:inline-block">
            Stock Status
          </p>
          <p className="flex-1 text-primary-black font-arimo  hidden md:inline-block">
            Price
          </p>
          <p className="flex-1"> </p>
        </div>

        <hr className="border-b border-solid border-secondary-gray" />

        <section className="flex flex-col gap-5">
          {wishlistData?.map((data) => {
            return (
              <div className="flex items-center my-7 flex-col sm:flex-row gap-y-7">
                <div className="flex-[3_3_0%] flex-col sm:flex-row flex items-center gap-x-10" onClick={() => openProductDetail(data.product_id)}>
                  <img src={data.img_url} alt="" className="w-36" />
                  <div className="flex-[2_2_0%] font-arimo text-center sm:text-left text-primary-black mx-2 flex flex-col">
                    <p className="font-bold md:font-normal text-lg md:text-base">
                      {data.name}
                    </p>
                    <p className="md:hidden font-arimo items-center gap-x-2 inline-flex justify-center sm:justify-start">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle
                          cx="8"
                          cy="8"
                          r="7.5"
                          stroke="#111111"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4.5 7.5L7 10L12 5"
                          stroke="#111111"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>{" "}
                      {data.stock > 0 ? 'In Stock' : 'OutStock'}
                    </p>
                    <p className="font-bold md:hidden">Price: Rp {Number(data.price).toLocaleString()}</p>
                  </div>
                </div>
                <p className="flex-1 font-arimo items-center gap-x-2 hidden md:inline-flex">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="8"
                      cy="8"
                      r="7.5"
                      stroke="#111111"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.5 7.5L7 10L12 5"
                      stroke="#111111"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  {data.stock > 0 ? 'In Stock' : 'OutStock'}
                </p>
                <p className="flex-1 font-arimo font-bold text-primary-black hidden md:inline-block">
                  Rp {Number(data.price).toLocaleString()}
                </p>
                <div className="flex-1 flex flex-col gap-y-2 justify-center">
                  <button className="btn bg-primary-black hover:bg-secondary-black text-white rounded-none px-8" onClick={() => addCart(data)}>
                    Add to Cart
                  </button>
                  <p className="text-sm text-center hover:underline" onClick={() => deleteWishlist(data.id)}>Remove</p>
                </div>
              </div>
            )
          })}

        </section>
      </section>}
    </section>
  );
}

export default List;
