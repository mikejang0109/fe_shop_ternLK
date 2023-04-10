import sofa from "../../assets/img/sofa.png"

const RelatedProducts = () => {
    return (
        <section className="pt-4">
            <h3 className="text-center text-xl md:text-2xl lg:text-4xl xl:text-5xl pb-5 md:pb-20">Related Products</h3>
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
                <div className="w-full md:w-[360px]">
                    <img src={sofa} alt="product" className="w-full"/>
                    <p className="text-lg lg:text-xl xl:text-2xl py-2 md:py-5">Coaster 506222-CO Loveseat</p>
                    <p className="text-lg font-bold">$765.99</p>
                </div>
                <div className="w-full md:w-[360px]">
                    <img src={sofa} alt="product" className="w-full"/>
                    <p className="text-lg lg:text-xl xl:text-2xl py-2 md:py-5">Coaster 506222-CO Loveseat</p>
                    <p className="text-lg font-bold">$765.99</p>
                </div>
                <div className="w-full md:w-[360px]">
                    <img src={sofa} alt="product" className="w-full"/>
                    <p className="text-lg lg:text-xl xl:text-2xl py-2 md:py-5">Coaster 506222-CO Loveseat</p>
                    <p className="text-lg font-bold">$765.99</p>
                </div>
            </div>
        </section>
    )
}

export default RelatedProducts;