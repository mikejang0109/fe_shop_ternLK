import React from "react";

import Header from "../../components/Header";
import Title from "../../components/Title";

import map from "../../assets/img/map.webp";

function OrderTrack() {
	const [isSubmitted, setIsSubmitted] = React.useState(false);

	const submitHandler = (e) => {
		e.preventDefault();

		setIsSubmitted(!isSubmitted);
	};

	document.title = isSubmitted === false ? "Order Tracking" : "Tracking Detail";

	return (
		<div className="content-wrapper">
			<Header />
			<div className="body-wrapper grid grid-cols-1 grid-rows-1">
				<main>
					<Title
						isBreadcrumbs={true}
						breadcrumbs="Tracking"
						breadcrumbs2={isSubmitted === true ? "Tracking Detail" : null}
						title={isSubmitted === false ? "Order Tracking" : "Tracking Detail"}
						description="Track where your order arrived"
					/>
					<section className="tracking-wrapper font-arimo flex lg:flex-row flex-col-reverse">
						<section className="map lg:w-1/2 w-full h-full">
							<img src={map} alt="map illustration" />
						</section>
						{isSubmitted === true ? (
							<section className="tracking-info lg:w-1/2 w-full 2xl:py-32 2xl:px-32 xl:py-28 xl:px-28 lg:py-2 lg:px-6 md:p-32 p-6 flex flex-col gap-y-10">
								<div className="order-info flex flex-row justify-between">
									<div className="order-id">
										<p className="text-primary-gray md:text-base text-xs">Order ID</p>
										<p className="font-bold md:text-xl text-base">ABCD-EFGH-W123</p>
									</div>
									<div className="order-item">
										<p className="text-primary-gray md:text-base text-xs">Order Item</p>
										<p className="font-bold md:text-xl text-base">Fabric Mid Century Chair</p>
									</div>
								</div>
								<div className="divider bg-[#DBDBDB] h-[1px]"></div>
								<div className="tracking-location">
									<div className="relative px-2">
										<div className="absolute h-4/5 border border-dashed border-primary-black"></div>
										<div className="flex md:gap-0 gap-6 items-start w-full mb-24 -ml-4">
											<div className="w-1/12 z-10">
												<div className="w-9 h-9 border border-[#111111] bg-white bg-timeline-bg bg-fill bg-center bg-no-repeat rounded-full"></div>
											</div>
											<div className="w-11/12">
												<p className="md:text-base text-xs text-primary-gray">On Delivery</p>
												<p className="md:text-xl text-sm text-primary-black font-bold">
													Kebun Jeruk, Jakarta Barat
												</p>
											</div>
										</div>
										<div className="flex md:gap-0 gap-6 items-start w-full mt-24 -ml-4">
											<div className="w-1/12 z-10">
												<div className="w-9 h-9 border border-[#111111] bg-white bg-timeline-bg bg-fill bg-center bg-no-repeat rounded-full"></div>
											</div>
											<div className="w-11/12">
												<p className="md:text-base text-xs text-primary-gray">Destination</p>
												<p className="md:text-xl text-sm text-primary-black font-bold">
													Kebun Mangga, Jakarta Selatan
												</p>
											</div>
										</div>
									</div>
								</div>
								<div className="check-btn">
									<button className="btn whitespace-nowrap mt-10 normal-case rounded-none md:w-1/3 w-1/2 bg-primary-black text-white hover:text-primary-black">
										Check on Map
									</button>
								</div>
							</section>
						) : (
							<section className="tracking-info lg:w-1/2 w-full xl:p-32 lg:p-6 md:p-32 p-10 flex flex-col gap-y-10">
								<div className="desc text-center">
									<p className="text-sm">
										To track your order please enter your Order ID in the box below and press the
										"Track" button. This was given to you on your receipt and in the confirmation
										email you should have received.
									</p>
								</div>
								<div className="form-wrapper">
									<form className="flex flex-col gap-y-8">
										<div className="order-id flex flex-col gap-y-4">
											<label htmlFor="orderId" className="font-bold text-xs">
												Order ID
											</label>
											<input
												type="text"
												name="orderId"
												id="orderId"
												placeholder="Found in your order confirmation email."
												className="placeholder:text-primary-black placeholder:text- text-xs border border-[#CECECE] focus:border-2 focus:border-sky-500 appearance-none outline-none h-[4.375rem] px-5"
											/>
										</div>
										<div className="billing-email flex flex-col gap-y-4">
											<label htmlFor="email" className="font-bold text-xs">
												Billing email
											</label>
											<input
												type="text"
												name="email"
												id="email"
												placeholder="Email you used during checkout"
												className="placeholder:text-primary-black placeholder:text-xs text-xs border border-[#CECECE] focus:border-2 focus:border-sky-500 appearance-none outline-none h-[4.375rem] px-5"
											/>
										</div>
										<div className="btn-wrapper flex flex-wrap justify-center">
											<button
												onClick={(e) => submitHandler(e)}
												className="btn whitespace-nowrap mt-10 normal-case rounded-none lg:w-1/4 w-1/3 bg-primary-black text-white hover:text-primary-black font-bold text-sm"
											>
												Track Now
											</button>
										</div>
									</form>
								</div>
							</section>
						)}
					</section>
				</main>
			</div>
		</div>
	);
}

export default OrderTrack;
