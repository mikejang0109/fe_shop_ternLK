import chair1 from "../../assets/img/chair-1.webp"
import chair2 from "../../assets/img/chair-2.webp"
import chair3 from "../../assets/img/chair-3.webp"
import chair4 from "../../assets/img/chair-4.webp"
import chair5 from "../../assets/img/chair-5.webp"

const MobileCarousel = () => {
    const data = [chair1, chair2, chair3, chair4, chair5]
    return (
        <div className="carousel w-full md:hidden">
            {data.map((data, i) => {
                return (
                    <div id={`slide${i}`} className="carousel-item relative w-full" key={i}>
                        <img src={data} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2 ">
                            <a href={`#slide${i-1}`} className="btn btn-circle bg-primary-black text-white border-primary-black">❮</a>
                            <a href={`#slide${i+1}`} className="btn btn-circle bg-primary-black text-white border-primary-black">❯</a>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default MobileCarousel