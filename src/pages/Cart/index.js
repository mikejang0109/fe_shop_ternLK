import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import remove from "../../assets/icons/small-remove.svg";
import { useDispatch, useSelector } from "react-redux";
import { cartAction } from "../../redux/slices/cart";
import CartEmpty from "./EmptyCart";
import Header from "../../components/Header";
import Title from "../../components/Title";

const CartPage = (props) => {
  const [ship, setShipping] = useState(0);

  const [disable, setDisable] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const shoppingCart = cart?.shoppingCart;
  const disabled = disable === false;

  console.log(shoppingCart);
  
  const deleteALL = () => {
    dispatch(cartAction.resetCart());
  };
  const deleteCart = (index) => {
    dispatch(
      cartAction.deleteItem({
        id: shoppingCart[index].product_id,
        size: shoppingCart[index].size_id,
      })
    );
  };

  let subtotal = 0;
  shoppingCart.forEach((item) => {
    subtotal += item.price * item.qty;
  });
  const total = ship + subtotal;

  const handleQty = (info, index) => {
    if (info === "inc") {
      dispatch(
        cartAction.increment({
          id: shoppingCart[index].product_id,
          size: shoppingCart[index].size_id,
        })
      );
    } else {
      if (shoppingCart[index].qty === 1) {
        return; // Jika qty adalah 1, keluar dari fungsi handleQty
      }

      dispatch(
        cartAction.decrement({
          id: shoppingCart[index].product_id,
          size: shoppingCart[index].size_id,
        })
      );
    }
  };
  if (shoppingCart.length === 0) {
    return (
      <>
        <Header />
        <Title
          isBreadcrumbs={true}
          breadcrumbs="Cart"
          title="Your Cart"
          description="Buy everything in your cart now!"
        />
        <CartEmpty />
      </>
    );
  }
  return (
    <>
      <Header />
      <Title
        isBreadcrumbs={true}
        breadcrumbs="Cart"
        title="Your Cart"
        description="Buy everything in your cart now!"
      />
      <section className="flex justify-center flex-col xl:flex-row mb-[133px]">
        <section className="h-[433px] w-[770px] lg:m-auto xl:m-0 ">
          <div className="flex mt-[82px]">
            <p className="ml-12 text-[0.68rem] text-secondary-gray font-arimo">
              PRODUCTS
            </p>
            <p className="text-[0.68rem] text-secondary-gray font-arimo ml-[261px]">
              PRICE
            </p>
            <p className="text-[0.68rem] text-secondary-gray font-arimo ml-[115px]">
              QUANTITY
            </p>
            <p className="text-[0.68rem] text-secondary-gray font-arimo ml-[137px]">
              TOTAL
            </p>
          </div>
          {shoppingCart.map((data, i) => {
            return (
              <div className="flex items-center" key={i}>
                <img
                  className="mt-10"
                  src={remove}
                  alt="delete"
                  onClick={() => deleteCart(i)}
                />
                <img
                  className="ml-[31px] mt-[60px] w-[69px]"
                  src={data.image}
                  alt="product"
                />
                <p className="mt-[60px] w-[134px] ml-[61px] text-xs font-arimo text-primary-black">
                  {data.name}
                </p>
                <p className="mt-[60px] ml-[30px] font-arimo w-[130px]">
                  IDR {data.price.toLocaleString("id-ID")}
                </p>
                <button
                  onClick={() => handleQty("dec", i)}
                  className="mt-[60px] ml-10 font-arimo"
                >
                  -
                </button>
                <p className="mt-[60px] ml-7 font-arimo">{data.qty}</p>
                <button
                  onClick={() => handleQty("inc", i)}
                  className="mt-[60px] ml-7 font-arimo"
                >
                  +
                </button>
                <p className="mt-[60px] ml-28 font-arimo font-bold text-sm text-primary-black">
                  {Math.floor(data.price * data.qty).toLocaleString("id-ID")}
                </p>
              </div>
            );
          })}

          <hr className="border-b border-solid border-secondary-gray mt-[60px]" />
          <div className="flex mt-10">
            <div className="border-b border-solid border-secondary-gray">
              <input
                className=""
                type="text"
                placeholder="Enter your coupon code"
              />
              <button className="ml-20 font-bold text-sm font-arimo text-primary-black">
                Apply coupon
              </button>
            </div>
            <div>
              <button
                onClick={deleteALL}
                className="ml-[229px] font-arimo text-secondary-gray text-sm"
              >
                Clear Cart
              </button>
              <button className="ml-7 font-bold text-sm font-arimo text-primary-black">
                Update Cart
              </button>
            </div>
          </div>
        </section>
        <section className="bg-[#f9f9f9] w-[360px] m-auto mt-28 xl:m-0 h-[372px] xl:ml-[30px] xl:mt-20">
          <div>
            <p className="pt-[30px] font-bold text-sm text-primary-black font-arimo pl-[30px]">
              Cart Total
            </p>
            <div className="flex pt-11 ">
              <p className="font-bold text-sm text-primary-black font-arimo pl-[30px]">
                Subtotal
              </p>
              <p className="ml-[190px] font-bold text-sm text-primary-black font-arimo">
                {total.toLocaleString("id-ID")}
              </p>
            </div>
            <div className="flex mt-9">
              <p className="font-bold text-sm text-primary-black font-arimo pl-[30px]">
                Shipping
              </p>
              <div className="ml-32">
                <ul>
                  <li className="font-arimo text-secondary-gray text-xs font-normal">
                    <input
                      className="mr-6 mt-2 font-arimo text-secondary-gray text-xs font-normal"
                      type="radio"
                      name="shipping"
                      onChange={() => {
                        setShipping(10000);
                        setDisable(true);
                      }}
                    />
                    Flat rate: 10.000
                  </li>
                  <li className="font-arimo text-secondary-gray text-xs font-normal">
                    <input
                      className="mr-6 mt-2 font-arimo text-secondary-gray text-xs font-normal"
                      type="radio"
                      name="shipping"
                      onChange={() => {
                        setShipping(0);
                        setDisable(true);
                      }}
                    />
                    Free shipping
                  </li>
                  <li className="font-arimo text-secondary-gray text-xs font-normal">
                    <input
                      className="mr-6 mt-2 font-arimo text-secondary-gray text-xs font-normal"
                      type="radio"
                      name="shipping"
                      onChange={() => {
                        setShipping(0);
                        setDisable(true);
                      }}
                    />
                    Local pickup
                  </li>
                </ul>
              </div>
            </div>
            <hr className="border-b border-solid border-secondary-gray mt-9 mr-8 ml-7" />
            <div className="flex mt-4">
              <p className="font-bold text-sm text-primary-black font-arimo pl-[30px]">
                Total Price
              </p>
              <p className="ml-[170px] font-bold text-sm text-primary-black font-arimo">
                {total.toLocaleString("id-ID")}
              </p>
            </div>
          </div>
          <button
            disabled={disabled}
            onClick={() => navigate("/checkout")}
            className="mt-14 bg-primary-black text-white w-full p-5 font-arimo font-bold text-xs"
          >
            Procced To Check Out
          </button>
        </section>
      </section>
    </>
  );
};

export default CartPage;
