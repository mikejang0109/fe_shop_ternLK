import React from "react";

import Header from "../../components/Header";
import Title from "../../components/Title";
import Aside from "./Aside";

import howToOpen from "../../assets/img/how-to-open.webp";
import scandinavian from "../../assets/img/scandinavian-style.webp";
import beautifulWorkspace from "../../assets/img/beautiful-workspace.webp";
import designQuote from "../../assets/img/design-quote.webp";
import beautifulCorner from "../../assets/img/beautiful-corner.webp";

import clockIcon from "../../assets/icons/clock-icon.svg";
import tagIcon from "../../assets/icons/tag-icon.svg";

function Blog() {
	const blogs = [
		{
			img: howToOpen,
			title: "How to open interior shop",
		},
		{
			img: scandinavian,
			title: "Scandinavian Style 2019",
		},
		{
			img: beautifulWorkspace,
			title: "Beautiful Workspace for Designer",
		},
		{
			img: designQuote,
			title: "26 Photos of Conner Kid",
		},
		{
			img: beautifulCorner,
			title: "Beautiful Corner",
		},
	];

	document.title = "Blog";

	return (
		<div className="content-wrapper">
			<Header />
			<div className="body-wrapper grid grid-cols-1 grid-rows-1">
				<main>
					<Title
						isBreadcrumbs={true}
						breadcrumbs="Blog"
						title="Our Blog"
						description="Read and enjoy content from us"
					/>
					<section className="blog-wrapper font-arimo flex md:flex-row flex-col md:gap-x-20 gap-x-5 md:gap-y-0 gap-y-20 p-10 md:p-20">
						<Aside />
						<div className="md:w-3/4 flex flex-col gap-y-5">
							{blogs.map((blog, idx) => {
								return (
									<div key={idx} className="flex flex-col gap-y-5">
										<div className="blog-img h-[410px]">
											<img
												src={blog.img}
												alt="blog content illustration"
												className="object-fill w-full h-full"
											/>
										</div>
										<div className="blog-title">
											<p className="text-[2rem] text-primary-black">{blog.title}</p>
										</div>
										<div className="meta-info flex flex-row flex-wrap gap-8">
											<div className="time-created flex flex-row gap-2 whitespace-nowrap text-[#3E3E3E]">
												<img src={clockIcon} alt="clock icon" />
												<p className="text-[0.625rem]">24 Apr 2019, 45 mins ago, by Admin</p>
											</div>
											<div className="tags flex flex-row gap-2">
												<img src={tagIcon} alt="tag icon" />
												<p className="text-[0.625rem]">Kids, Interior, Photos</p>
											</div>
										</div>
										<div className="blog-content">
											<p className="text-sm text-primary-gray">
												Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus
												vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla
												eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget
												unc ornare suscipit nulla sagittis faucibu
											</p>
										</div>
										<div className="flex flex-row items-center gap-4">
											<p className="text-primary-black font-bold cursor-pointer whitespace-nowrap">
												Read More
											</p>
											<div className="divider bg-[#D8D8D8] h-[1px] w-full"></div>
										</div>
									</div>
								);
							})}
							<section className="pagination font-arimo">
								<div className="pagination-buttons gap-x-3 md:gap-y-0 gap-y-3 flex flex-row flex-wrap">
									{[1, 2, 3, 4, 5].map((num) => {
										return (
											<button
												key={num}
												className={`btn rounded-none ${
													num === 1
														? "bg-primary-black text-white border-primary-black"
														: "text-primary-black border border-[#C8C8C8]"
												} hover:bg-primary-black hover:text-white hover:border-primary-black active:bg-primary-black active:text-white active:border-primary-black`}
											>{`0${num}`}</button>
										);
									})}
								</div>
							</section>
						</div>
					</section>
				</main>
			</div>
		</div>
	);
}

export default Blog;
