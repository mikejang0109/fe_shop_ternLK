import React from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";
import Footer from "../../components/Footer";

const ForgotPass = () => {
  return (
    <>
      <Header />
      <Title
        isBreadcrumbs={false}
        title="My Account"
        description="Register and log in with your account to be able to shop at will"
      />
      <section>
        <section className="h-[468px] m-auto w-full  md:w-[560px] ">
          <h2 className="text-center md:text-left font-arimo font-normal text-[2rem] text-primary-black mt-20">
            Forgot your password?
          </h2>
          <p className="text-center md:text-left text-base font-arimo text-primary-black mt-5">
            Don't worry! Just fill in your email and we'll send you a link
          </p>
          <div className="flex flex-col mt-10">
            <input
              placeholder="Your email address *"
              type="email"
              className="m-auto w-80 md:w-full p-5 border border-solid border-[#CECECE]"
            ></input>
            <button className="m-auto md:m-0 md:mt-5 bg-black hover:bg-white p-5 text-white hover:text-black border border-solid border-primary-black text-base font-arimo font-bold text-center mt-[33px] w-80 md:w-[35%]">
              Reset Password
            </button>
          </div>
        </section>
      </section>
      <Footer />
    </>
  );
};

export default ForgotPass;
