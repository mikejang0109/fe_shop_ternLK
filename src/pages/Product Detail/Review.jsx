
import avatar1 from "../../assets/avatars/1.png"
import avatar2 from "../../assets/avatars/2.png"
import avatar3 from "../../assets/avatars/3.png"
import avatar4 from "../../assets/avatars/4.png"

const Review = (props) => {
    return (
        <section className={`${props.isShow === 2 ? 'flex' : 'hidden'} w-full md:w-4/5 mx-auto mt-16 flex-col `}>
            <div className="flex justify-start items-center border-b border-solid border-[#d1d1d1] gap-14 py-6 md:py-12 w-full">
                <div className="w-24 h-24 overflow-hidden rounded-full relative">
                    <img src={avatar1} alt="avatar" className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </div>
                <div className="w-4/5">
                    <p className="text-sm md:text-base">“Theme is very flexible and easy to use. Perfect for us. Customer support has been excellent and answered every question we've thrown at them with 12 hours.”</p>
                    <div className="flex justify-start items-center gap-5 pt-5">
                        <p className="text-xs text-[#989898]">35 mins ago, 15 November 2019</p>
                        <button type="button" >Reply</button>
                    </div>
                </div>
            </div>
            <div className="flex justify-start items-center border-b border-solid border-[#d1d1d1] gap-14 py-6 md:py-12 w-full">
                <div className="w-24 h-24 overflow-hidden rounded-full relative">
                    <img src={avatar1} alt="avatar" className="absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" />
                </div>
                <div className="w-4/5">
                    <p className="text-sm md:text-base">“Theme is very flexible and easy to use. Perfect for us. Customer support has been excellent and answered every question we've thrown at them with 12 hours.”</p>
                    <div className="flex justify-start items-center gap-5 pt-5">
                        <p className="text-xs text-[#989898]">35 mins ago, 15 November 2019</p>
                        <button type="button" >Reply</button>
                    </div>
                </div>
            </div>
           
        </section>
    )
}

export default Review;