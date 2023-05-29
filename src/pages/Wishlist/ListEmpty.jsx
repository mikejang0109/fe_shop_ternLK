import React from "react";

function ListEmpty() {
  return (
    <section className="h-[278px] px-8 lg:px-20 m-auto my-16">
      <svg
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="m-auto w-16"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M17 1C14.9 1 13.1 2.1 12 3.7C10.9 2.1 9.1 1 7 1C3.7 1 1 3.7 1 7C1 13 12 22 12 22C12 22 23 13 23 7C23 3.7 20.3 1 17 1Z"
          stroke="#111111"
          stroke-width="2"
          stroke-linecap="square"
        />
      </svg>

      <h1 className="mt-4 md:mt-10 font-arimo text-primary-black text-3xl text-center">
        Your Wishlist is Empty
      </h1>
      <p className="mt-2 text-center font-arimo text-base leading-9">
        Don't let an empty wishlist hold you back - start adding items and
        making plans.
      </p>
    </section>
  );
}

export default ListEmpty;
