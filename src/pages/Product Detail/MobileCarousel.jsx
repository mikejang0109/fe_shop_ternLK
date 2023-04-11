import chair1 from "../../assets/img/chair-1.webp"
import chair2 from "../../assets/img/chair-2.webp"
import chair3 from "../../assets/img/chair-3.webp"
import chair4 from "../../assets/img/chair-4.webp"
import chair5 from "../../assets/img/chair-5.webp"

const MobileCarousel = (props) => {
    return (
        <div className="carousel w-full md:hidden">
            {props.data?.map((data, i) => {
                return (
                    <div id={`slide${i}`} className="carousel-item relative w-full" key={i}>
                        <img src={data} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-0 right-0 top-1/2 ">
                            <a href={`#slide${i-1}`} className={`btn btn-circle bg-primary-black text-white border-primary-black ${i === 0 ? 'invisible' : "visible"}`}>❮</a>
                            <a href={`#slide${i+1}`} className={`btn btn-circle bg-primary-black text-white border-primary-black ${i === props.data?.length-1 ? 'invisible' : 'visible'}`}>❯</a>
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default MobileCarousel