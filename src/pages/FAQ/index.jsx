import React from "react";

import Header from "../../components/Header";
import Title from "../../components/Title";

const Faq = () => {
	return (
		<React.Fragment>
			<Header />
			<Title
				isBreadcrumbs={true}
				breadcrumbs="FAQ"
				title="FAQ"
				description="Frequently Asked Questions"
			/>
		</React.Fragment>
	);
};

export default Faq;
