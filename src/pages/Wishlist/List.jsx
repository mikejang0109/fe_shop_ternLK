import React from "react";

import { useNavigate } from "react-router-dom";

import chair from "../../assets/img/chair.svg";

function List() {
  const navigate = useNavigate();

  return (
    <section className="flex justify-center flex-col xl:flex-row">
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
          <div className="flex items-center my-7 flex-col sm:flex-row gap-y-7">
            <div className="flex-[3_3_0%] flex-col sm:flex-row flex items-center gap-x-10">
              <img src={chair} alt="" className="w-36" />
              <div className="flex-[2_2_0%] font-arimo text-center sm:text-left text-primary-black mx-2 flex flex-col">
                <p className="font-bold md:font-normal text-lg md:text-base">
                  Fabric Mid Century Chair
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
                  In Stock
                </p>
                <p className="font-bold md:hidden">Price: Rp 50.000</p>
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
              In Stock
            </p>
            <p className="flex-1 font-arimo font-bold text-primary-black hidden md:inline-block">
              Rp 50.000
            </p>
            <div className="flex-1 flex flex-col gap-y-2 justify-center">
              <button className="btn bg-primary-black hover:bg-secondary-black text-white rounded-none px-8">
                Add to Cart
              </button>
              <p className="text-sm text-center hover:underline">Remove</p>
            </div>
          </div>
          <div className="flex items-center my-7 flex-col sm:flex-row gap-y-7">
            <div className="flex-[3_3_0%] flex-col sm:flex-row flex items-center gap-x-10">
              <img src={chair} alt="" className="w-36" />
              <div className="flex-[2_2_0%] font-arimo text-center sm:text-left text-primary-black mx-2 flex flex-col">
                <p className="font-bold md:font-normal text-lg md:text-base">
                  Fabric Mid Century Chair
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
                  In Stock
                </p>
                <p className="font-bold md:hidden">Price: Rp 50.000</p>
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
                  d="M5 5L11 11"
                  stroke="#111111"
                  stroke-width="1"
                  stroke-linecap="round"
                />
                <path
                  d="M11 5L5 11"
                  stroke="#111111"
                  stroke-width="1"
                  stroke-linecap="round"
                />
              </svg>
              Out of stock
            </p>
            <p className="flex-1 font-arimo font-bold text-primary-black hidden md:inline-block">
              Rp 50.000
            </p>
            <div className="flex-1 flex flex-col gap-y-2 justify-center">
              <button className="btn bg-primary-black hover:bg-secondary-black text-white rounded-none px-8">
                Add to Cart
              </button>
              <p className="text-sm text-center hover:underline">Remove</p>
            </div>
          </div>
        </section>
      </section>
    </section>
  );
}

export default List;
