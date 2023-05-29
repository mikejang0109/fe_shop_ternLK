import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Title from "../../components/Title";

import map from "../../assets/img/map-contact.webp";

function ContactUs() {
	document.title = "Contact Us";
	return (
		<div className="content-wrapper">
			<Header />
			<div className="body-wrapper grid grid-cols-1 grid-rows-1">
				<main>
					<Title
						isBreadcrumbs={true}
						breadcrumbs="FAQ"
						breadcrumbs2="Contact Us"
						title="Contact Us"
					/>
					<section className="contact-us flex flex-col-reverse lg:flex-row">
						<section className="map-wrapper lg:w-1/2">
							<img src={map} alt="our location" className="w-full" />
						</section>
						<section className="form-wrapper lg:w-1/2 flex flex-col justify-center p-6 md:py-10 md:px-10 lg:py-0 lg:px-12 xl:p-20">
							<form className="flex flex-col gap-y-8">
								<input
									type="text"
									placeholder="Name *"
									className="border-b-2 border-b-primary-gray focus:border-b-[#2F2F2F] placeholder:text-[#2F2F2F] outline outline-none pb-1.5"
								/>
								<input
									type="text"
									placeholder="Your Email *"
									className="border-b-2 border-b-primary-gray focus:border-b-[#2F2F2F] placeholder:text-[#2F2F2F] outline outline-none pb-1.5"
								/>
								<input
									type="text"
									placeholder="Your Website"
									className="border-b-2 border-b-primary-gray focus:border-b-[#2F2F2F] placeholder:text-[#2F2F2F] outline outline-none pb-1.5"
								/>
								<div className="relative">
									<select
										className="border-b-2 border-b-primary-gray rounded-none text-[#2F2F2F] h-10 w-full bg-transparent focus:outline-none appearance-none"
										name="business-plan"
										id="business-plan"
									>
										<option value="">Business Plan</option>
										<option value="premium">Premium</option>
										<option value="ordinary">Ordinary</option>
									</select>
									<i className="bi bi-caret-down absolute top-3 right-1"></i>
								</div>
								<textarea
									name="message"
									id="message"
									cols="30"
									rows="10"
									placeholder="Message"
									className="placeholder:text-[#2F2F2F] outline outline-none border-b-2 border-b-primary-gray resize-none"
								></textarea>
								<button className="btn normal-case rounded-none w-full h-14 md:h-20 bg-primary-black text-white hover:text-primary-black">
									Send Message
								</button>
							</form>
						</section>
					</section>
				</main>
			</div>
			<Footer />
		</div>
	);
}

export default ContactUs;
