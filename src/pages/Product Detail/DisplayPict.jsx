import chair1 from "../../assets/img/chair-1.webp"
import chair2 from "../../assets/img/chair-2.webp"
import chair3 from "../../assets/img/chair-3.webp"
import chair4 from "../../assets/img/chair-4.webp"
import chair5 from "../../assets/img/chair-5.webp"

const DisplayPict = () => {
    const data= [chair1, chair2, chair3, chair4, chair5]
    return (
        <section className="justify-center items-center w-full gap-5 bg-slate-100 hidden md:flex md:mt-10 lg:mt-11">
            <div className="w-1/5">
                {data.map((data, i) => {
                    return (
                        <div key={i} className="w-full">
                            <img src={data} alt="list" className="object-cover w-full p-[3%]" />
                        </div>
                    )
                })}
            </div>
            <div className="w-4/5">
                <img src={chair1} alt="product" className="w-full" />
            </div>
        </section>
    )
}

export default DisplayPict