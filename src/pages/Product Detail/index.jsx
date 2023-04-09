import React from "react";

import Header from "../../components/Header";
import DisplayPict from "./DisplayPict";

const ProductDetail = () => {
    return (
        <React.Fragment>
            <Header />
            <main className="px-[5%] ">
                <div className="text-sm breadcrumbs">
                    <ul>
                        <li>Shop</li>
                        <li>Shop Right Sidebar</li>
                        <li>Product</li>
                    </ul>
                </div>
                <DisplayPict />
            </main>
        </React.Fragment>
    )
}

export default ProductDetail;