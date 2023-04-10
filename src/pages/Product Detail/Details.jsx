import { useState } from "react";

const Details = () => {
    const [show, setShow] = useState(1);

    const showContent = (id) => {
        setShow(id)
    }

    return (
        <section className="py-10 ">
           <nav className={`flex justify-around gap-4 items-center p-3`}>
            <p className={`cursor-pointer text-xl xl:text-2xl ${show === 1 && 'font-bold border-b boder-solid border-b-primary-black '} p-3`} onClick={() => showContent(1)}>Description</p>
            <p className={`cursor-pointer text-xl xl:text-2xl ${show === 2 && 'font-bold border-b boder-solid border-b-primary-black '} p-3`} onClick={() => showContent(2)}>Review</p>
            <p className={`cursor-pointer text-xl xl:text-2xl ${show === 3 && 'font-bold border-b boder-solid border-b-primary-black '} p-3`} onClick={() => showContent(3)}>Additional Information</p>
            <p className={`cursor-pointer text-xl xl:text-2xl ${show === 4 && 'font-bold border-b boder-solid border-b-primary-black '} p-3`} onClick={() => showContent(4)}>About Brand</p>
            <p className={`cursor-pointer text-xl xl:text-2xl ${show === 5 && 'font-bold border-b boder-solid border-b-primary-black '} p-3`} onClick={() => showContent(5)}>Shipping & Delivery</p>
           </nav>
            <section>
                
            </section>
        </section>
    )
}

export default Details;