import { useState } from "react";
import Description from "./Description";
import Review from "./Review";

const Details = () => {
    const [show, setShow] = useState(1);

    const showContent = (id) => {
        setShow(id)
    }

    return (
        <section className="py-10 hidden md:block">
           <nav className={`flex justify-around gap-4 items-center p-3`}>
            <p className={`cursor-pointer text-lg lg:text-xl xl:text-2xl text-center ${show === 1 && 'font-bold border-b boder-solid border-b-primary-black '} p-3`} onClick={() => showContent(1)}>Description</p>
            <p className={`cursor-pointer text-lg lg:text-xl xl:text-2xl text-center ${show === 2 && 'font-bold border-b boder-solid border-b-primary-black '} p-3`} onClick={() => showContent(2)}>Review</p>
            <p className={`cursor-pointer text-lg lg:text-xl xl:text-2xl text-center ${show === 3 && 'font-bold border-b boder-solid border-b-primary-black '} p-3`} onClick={() => showContent(3)}>Additional Information</p>
            <p className={`cursor-pointer text-lg lg:text-xl xl:text-2xl text-center ${show === 4 && 'font-bold border-b boder-solid border-b-primary-black '} p-3`} onClick={() => showContent(4)}>About Brand</p>
            <p className={`cursor-pointer text-lg lg:text-xl xl:text-2xl text-center ${show === 5 && 'font-bold border-b boder-solid border-b-primary-black '} p-3`} onClick={() => showContent(5)}>Shipping & Delivery</p>
           </nav>
            <section>
               <Description isShow={show} />
               <Review isShow={show} />
            </section>
        </section>
    )
}

export default Details;