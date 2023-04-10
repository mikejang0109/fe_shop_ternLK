import { useState } from "react";
import Description from "./Description";
import Review from "./Review";

const Details = (props) => {
    const [show, setShow] = useState(1);

    const showContent = (id) => {
        setShow(id)
    }

    return (
        <section className="py-10 block">
            <nav className={` p-3 overflow-scroll md:overflow-auto`}>
                <div className="w-max flex justify-around gap-4 items-center">
                    <p className={`cursor-pointer text-lg lg:text-xl xl:text-2xl text-center ${show === 1 && 'font-bold border-b boder-solid border-b-primary-black '} p-3`} onClick={() => showContent(1)}>Description</p>
                    <p className={`cursor-pointer text-lg lg:text-xl xl:text-2xl text-center ${show === 2 && 'font-bold border-b boder-solid border-b-primary-black '} p-3`} onClick={() => showContent(2)}>Review</p>
                    <p className={`cursor-pointer text-lg lg:text-xl xl:text-2xl text-center ${show === 3 && 'font-bold border-b boder-solid border-b-primary-black '} p-3`} onClick={() => showContent(3)}>Additional Information</p>
                    <p className={`cursor-pointer text-lg lg:text-xl xl:text-2xl text-center ${show === 4 && 'font-bold border-b boder-solid border-b-primary-black '} p-3`} onClick={() => showContent(4)}>About Brand</p>
                    <p className={`cursor-pointer text-lg lg:text-xl xl:text-2xl text-center ${show === 5 && 'font-bold border-b boder-solid border-b-primary-black '} p-3`} onClick={() => showContent(5)}>Shipping & Delivery</p>
                </div>

            </nav>
            <section>
                <Description isShow={show} images={props.data} />
                <Review isShow={show} />
            </section>
        </section>
    )
}

export default Details;