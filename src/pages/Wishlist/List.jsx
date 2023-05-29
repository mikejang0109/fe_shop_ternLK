import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { cartAction } from "../../redux/slices/cart";
import { deleteWishlist } from '../../utils/https/product'

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

  const delWishlist = (e, id) => {
    e.preventDefault();
    toast.dismiss();
    toast.promise(deleteWishlist(id, token).then(res => console.log(res.data.msg)).catch(err => console.log(err.response.data.msg)), {
      loading: () => {
        e.target.disabled = true;
        return <>Please wait...</>;
      },
      success: () => {
        return <>Delete success</>;
      },
      error: () => {
        e.target.disabled = false;
        return <>Delete failed</>;
      },
    },
      { success: { duration: Infinity }, error: { duration: Infinity } })
    setTimeout(() => {
      window.location.reload()
    }, 2000)
  }


  return (
    <section className="flex justify-center flex-col xl:flex-row min-h-screen">
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
              <div className="flex items-center my-7 flex-col sm:flex-row gap-y-7" key={data.id}>
                <div className="flex-[3_3_0%] flex-col sm:flex-row flex items-center gap-x-10" onClick={() => openProductDetail(data.product_id)}>
                  <img src={data.img_urls[0]} alt="" className="w-36" />
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
                      {data.stock > 0 ? 'In Stock' : 'Out Stock'}
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
                  <p className="text-sm text-center hover:underline" onClick={(e) => delWishlist(e, data.id)}>Remove</p>
                </div>
              </div>
            )
          })}

        </section>
      </section>
    </section>
  );
}

export default List;
