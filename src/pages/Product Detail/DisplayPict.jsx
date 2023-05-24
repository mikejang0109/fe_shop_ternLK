import { useState } from "react"

const DisplayPict = (props) => {
    const [image, setImage] = useState(0)

    return (
        <section className="justify-center items-center w-3/4 mx-auto gap-5 bg-slate-100 hidden md:flex md:mt-10 lg:mt-11">
            <div className="w-1/5 cursor-pointer">
                {props.data?.map((data, i) => {
                    return (
                        <div key={i} className={`w-full ${image === i && 'border-2 border-solid border-primary-black'}`} onClick={() => setImage(i)}>
                            <img src={data} alt="list" className="object-cover w-full p-[3%]" />
                        </div>
                    )
                })}
            </div>
            <div className="w-4/5">
                <img src={props.data && props.data[image]} alt="product" className="w-full" />
            </div>
        </section>
    )
}

export default DisplayPict