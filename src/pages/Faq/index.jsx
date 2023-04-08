import React from "react";
import Title from "../../components/Title";
import Header from "../../components/Header";

import cartIcon from "../../assets/icons/cart-icon.svg";
import walletIcon from "../../assets/icons/wallet-icon.svg";
import miscellaneousIcon from "../../assets/icons/miscellaneous-icon.svg"

const Faq = () => {
    return (
        <React.Fragment>
            <Header />
            <Title isBreadcrumbs={true} breadcrumbs="FAQ" title="FAQ" description="Frequently Asked Questions" />
            <main className="p-[5%]">
                <section className="pb-8 md:pb-12 lg:pb-20 xl:pb-24">
                    <div className="flex justify-center items-center rounded-full border-solid border border-tertiary-gray w-[72px] h-[72px] mx-auto mb-5">
                        <img className="w-6 h-auto" src={cartIcon} alt="icon" />
                    </div>
                    <div className="flex justify-between md:justify-center md:gap-16 items-center pb-5 md:pb-11 lg:pb-16 xl:pb-[78px]">
                        <div className="h-[2px] w-14 md:w-[73px] bg-secondary-gray"></div>
                        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">Shopping Questions</h2>
                        <div className="h-[2px] w-14 md:w-[73px] bg-secondary-gray"></div>
                    </div>
                    <div className="flex flex-col md:flex-row flex-wrap md:justify-between gap-5">
                        <div className="md:w-[300px] lg:w-[400px] xl:w-[500px] pb-6 md:pb-12 lg:pb-20 xl:pb-24">
                            <h3 className="text-lg md:text-xl lg:text-2xl pb-3">Do you ship worldwide?</h3>
                            <p className="text-base">This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                        <div className="md:w-[300px] lg:w-[400px] xl:w-[500px]">
                            <h3 className="text-lg md:text-xl lg:text-2xl pb-3">How can I use a coupon code??</h3>
                            <p className="text-base">This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                        <div className="md:w-[300px] lg:w-[400px] xl:w-[500px]">
                            <h3 className="text-lg md:text-xl lg:text-2xl pb-3">Do you offer gift-vouchers?</h3>
                            <p className="text-base">This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                        <div className="md:w-[300px] lg:w-[400px] xl:w-[500px]">
                            <h3 className="text-lg md:text-xl lg:text-2xl pb-3">How can I request a refund?</h3>
                            <p className="text-base">This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                    </div>
                </section>
                <section className="pb-8 md:pb-12 lg:pb-20 xl:pb-24">
                    <div className="flex justify-center items-center rounded-full border-solid border border-tertiary-gray w-[72px] h-[72px] mx-auto mb-5">
                        <img className="w-6 h-auto" src={walletIcon} alt="icon" />
                    </div>
                    <div className="flex justify-between md:justify-center md:gap-16 items-center pb-5 md:pb-11 lg:pb-16 xl:pb-[78px]">
                        <div className="h-[2px] w-14 md:w-[73px] bg-secondary-gray"></div>
                        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">Payment Questions</h2>
                        <div className="h-[2px] w-14 md:w-[73px] bg-secondary-gray"></div>
                    </div>
                    <div className="flex flex-col md:flex-row flex-wrap md:justify-between gap-5">
                        <div className="md:w-[300px] lg:w-[400px] xl:w-[500px] pb-6 md:pb-12 lg:pb-20 xl:pb-24">
                            <h3 className="text-lg md:text-xl lg:text-2xl pb-3">Do you ship worldwide?</h3>
                            <p className="text-base">This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                        <div className="md:w-[300px] lg:w-[400px] xl:w-[500px]">
                            <h3 className="text-lg md:text-xl lg:text-2xl pb-3">How can I use a coupon code??</h3>
                            <p className="text-base">This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                        <div className="md:w-[300px] lg:w-[400px] xl:w-[500px]">
                            <h3 className="text-lg md:text-xl lg:text-2xl pb-3">Do you offer gift-vouchers?</h3>
                            <p className="text-base">This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                        <div className="md:w-[300px] lg:w-[400px] xl:w-[500px]">
                            <h3 className="text-lg md:text-xl lg:text-2xl pb-3">How can I request a refund?</h3>
                            <p className="text-base">This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                    </div>
                </section >
                <section className="pb-8 md:pb-12 lg:pb-20 xl:pb-24">
                    <div className="flex justify-center items-center rounded-full border-solid border border-tertiary-gray w-[72px] h-[72px] mx-auto mb-5">
                        <img className="w-6 h-auto" src={miscellaneousIcon} alt="icon" />
                    </div>
                    <div className="flex justify-between md:justify-center md:gap-16 items-center pb-5 md:pb-11 lg:pb-16 xl:pb-[78px]">
                        <div className="h-[2px] w-14 md:w-[73px] bg-secondary-gray"></div>
                        <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-center">Miscellaneous Questions</h2>
                        <div className="h-[2px] w-14 md:w-[73px] bg-secondary-gray"></div>
                    </div>
                    <div className="flex flex-col md:flex-row flex-wrap md:justify-between gap-5">
                        <div className="md:w-[300px] lg:w-[400px] xl:w-[500px] pb-6 md:pb-12 lg:pb-20 xl:pb-24">
                            <h3 className="text-lg md:text-xl lg:text-2xl pb-3">Do you ship worldwide?</h3>
                            <p className="text-base">This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                        <div className="md:w-[300px] lg:w-[400px] xl:w-[500px]">
                            <h3 className="text-lg md:text-xl lg:text-2xl pb-3">How can I use a coupon code??</h3>
                            <p className="text-base">This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                        <div className="md:w-[300px] lg:w-[400px] xl:w-[500px]">
                            <h3 className="text-lg md:text-xl lg:text-2xl pb-3">Do you offer gift-vouchers?</h3>
                            <p className="text-base">This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                        <div className="md:w-[300px] lg:w-[400px] xl:w-[500px]">
                            <h3 className="text-lg md:text-xl lg:text-2xl pb-3">How can I request a refund?</h3>
                            <p className="text-base">This is the third article of a three-part series. I’m illustrating the marketing challenges of PrescottWeddings.com, a small business. If you don’t remember anything else about marketing, remember this: Frequency is king.</p>
                        </div>
                    </div>
                </section>
                <section className="flex justify-center items-center flex-col">
                    <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl pb-5 md:pb-6 lg:pb-7 xl:pb-8">You Still Need Help?</h3>
                    <button className="btn bg-secondary-black text-white hover:bg-white hover:text-secondary-black active:bg-white active:text-secondary-black" type="button">Contact Us</button>
                </section>
            </main>
        </React.Fragment>
    )
}

export default Faq;