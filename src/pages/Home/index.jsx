import React from "react";
import { Link } from "react-router-dom";

import Header from "../../components/Header";

import logo1 from "../../assets/img/review-logo-1.webp";
import logo2 from "../../assets/img/review-logo-2.webp";
import logo3 from "../../assets/img/review-logo-3.webp";
import logo4 from "../../assets/img/review-logo-4.webp";

import product1 from "../../assets/img/product-1.png";
import product2 from "../../assets/img/product-2.png";
import product3 from "../../assets/img/product-3.png";
import product4 from "../../assets/img/product-4.png";
import product5 from "../../assets/img/product-5.png";
import product6 from "../../assets/img/product-6.png";

function Home() {
	const products = [
		{
			name: "Mid-Century 1929 Sofa with Pillow",
			img: product1,
		},
		{
			name: "Mini Modern Lamp",
			img: product2,
		},
		{
			name: "Blue Living Vintage Chair",
			img: product3,
		},
		{
			name: "Japanese style blue ceramic",
			img: product4,
		},
		{
			name: "Japanese plate floral",
			img: product5,
		},
		{
			name: "Modern Floor Lamp",
			img: product6,
		},
	];

	return (
		<div className="content-wrapper">
			<Header />
			<div className="body-wrapper grid-cols-1 grid-rows-1 font-arimo">
				<div className="flex flex-col">
					<section className="hero bg-home-bg">
						<div className="hero-overlay w-auto">
							<div className="hero-content p-0 md:p-1 flex-col gap-32">
								<div className="flex flex-col gap-y-10 md:p-52 py-10">
									<p className="text-center text-primary-black font-bold text-7xl">
										Minimal Furniture Shop
									</p>
									<p className="text-center text-primary-gray">
										Furniture for your style and budget. Quality, comfort and style. Great service and
										delivery. Find your dream furniture with us today.
									</p>
								</div>
								<div className="py-10 cursor-pointer">
									<p className="text-lg text-center">Explore now</p>
									<div className="text-center">
										<i className="bi bi-arrow-down"></i>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="product-showcase">
						{products.map((product, idx) => {
							if (idx % 2 === 0) {
								return (
									<div
										className="flex md:flex-row flex-col md:border-y-0 border-b-2 md:border-none border-b-accent-red"
										key={idx}
									>
										<div className="md:h-[640px] h-[468px] md:w-1/2 w-full">
											<img src={product.img} alt="product" className="object-fill w-full h-full" />
										</div>
										<div className="md:w-1/2 w-full xl:p-32 lg:p-20 md:p-5 p-2 flex flex-col gap-y-20">
											<div className="product-desc">
												<p className="text-primary-black text-[3.5rem]">{product.name}</p>
												<p className="text-primary-gray">
													Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a
													nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut
													magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus
													quam
												</p>
											</div>
											<div className="flex flex-row items-center">
												<div className="divider bg-primary-black w-1/4 h-[2px] mr-5"></div>
												<Link>
													<p className="font-bold text-primary-black">SHOP NOW</p>
												</Link>
											</div>
										</div>
									</div>
								);
							}
							return (
								<div
									className="flex md:flex-row flex-col md:border-y-0 border-b-2 md:border-none border-b-accent-red"
									key={idx}
								>
									<div className="md:w-1/2 w-full xl:p-32 lg:p-20 md:p-5 p-2 flex flex-col gap-y-20">
										<div className="product-desc">
											<p className="text-primary-black text-[3.5rem]">{product.name}</p>
											<p className="text-primary-gray">
												Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a
												nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut
												magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus
												quam
											</p>
										</div>
										<div className="flex flex-row items-center">
											<div className="divider bg-primary-black w-1/4 h-[2px] mr-5"></div>
											<Link>
												<p className="font-bold text-primary-black">SHOP NOW</p>
											</Link>
										</div>
									</div>
									<div className="md:h-[640px] h-[468px] md:w-1/2 w-full">
										<img src={product.img} alt="product" className="object-fill w-full h-full" />
									</div>
								</div>
							);
						})}
						{/* <div className="flex flex-row">
              <div className="h-[640px] w-1/2">
                <img src={product1} alt="product" className="object-fill w-full h-full" />
              </div>
              <div className="w-1/2 p-32">
                <div className="product-desc">
                  <p className="text-primary-black text-[3.5rem]">Mid-Century 1929 Sofa with Pillow</p>
                  <p className="text-primary-gray">Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="divider bg-primary-black w-1/4 h-[2px] mr-5"></div>
                  <p className="font-bold text-primary-black">SHOP NOW</p>
                </div>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="w-1/2 p-32">
                <div className="product-desc">
                  <p className="text-primary-black text-[3.5rem]">Mini modern lamp</p>
                  <p className="text-primary-gray">Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo. Curabitur blandit ultrices ex. Curabitur ut magna dignissim, dignissim neque et, placerat risus. Morbi dictum lectus quam</p>
                </div>
                <div className="flex flex-row items-center">
                  <div className="divider bg-primary-black w-1/4 h-[2px] mr-5"></div>
                  <p className="font-bold text-primary-black">SHOP NOW</p>
                </div>
              </div>
              <div className="h-[640px] w-1/2">
                <img src={product2} alt="product" className="object-fill w-full h-full" />
              </div>
            </div> */}
					</section>
					<section className="review bg-[#161616] py-40 px-20 flex flex-col gap-y-32">
						<div className="testimony">
							<p className="text-white text-center text-[1.75rem] font-playFair">
								Gave 5 stars for excellent customer service. I had a couple of questions which{" "}
								<br /> they replied quickly to answer. If I could give multiple reasons for my
								rating <br /> it would also be for the design quality and customization to go along
								with the <br /> great service. The theme is excellent, keep up the great work.
							</p>
							<div className="divider bg-secondary-gray opacity-50 h-[2px] w-20 mx-auto"></div>
							<p className="text-white text-center text-lg font-openSans">
								Trevor Rivera - CEO IKEA
							</p>
						</div>
						<div className="logos flex flex-row flex-wrap justify-center gap-y-40 gap-x-40">
							<img src={logo1} alt="logo" className="opacity-30 h-[143px]" />
							<img src={logo2} alt="logo" className="opacity-30 h-[143px]" />
							<img src={logo3} alt="logo" className="opacity-30 h-[143px]" />
							<img src={logo4} alt="logo" className="opacity-30 h-[143px]" />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}

export default Home;
