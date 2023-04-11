import { Component } from "react";

import fb from "../../assets/icons/facebook-f.svg";
import twit from "../../assets/icons/twitter.svg";
import yt from "../../assets/icons/youtube.svg";
import dribble from "../../assets/icons/dribbble.svg";
import email from "../../assets/icons/letter.svg";
import phone from "../../assets/icons/phone-call.svg";
import clock from "../../assets/icons/clock.svg"

class Footer extends Component {
    render() {
        return (
            <>
                <section className="bg-black px-[50px] py-[70px] flex gap-10 justify-between">
                    <div className="basis-2/4 text-white pr-[170px]">
                        <p className="text-5xl pb-[20px]">RAZ</p>
                        <p className="">Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo.</p>
                        <div className="flex gap-5 mt-[40px]">
                            <div class="h-10 w-10 rounded-full border my-[10px]"><img className="pl-[12px] pt-[5px] flex justify-center items-center" src={fb} alt="icon" /></div>
                            <div class="h-10 w-10 rounded-full border my-[10px]"><img className="pl-[12px] pt-[5px] flex justify-center items-center" src={twit} alt="icon" /></div>
                            <div class="h-10 w-10 rounded-full border my-[10px]"><img className="pl-[12px] pt-[5px] flex justify-center items-center" src={yt} alt="icon" /></div>
                            <div class="h-10 w-10 rounded-full border my-[10px]"><img className="pl-[12px] pt-[5px] flex justify-center items-center" src={dribble} alt="icon" /></div>
                        </div>
                    </div>
                    <div className="basis-1/3 text-white pl-[50px]">
                        <p className="pb-[20px] ">COMPANY</p>
                        <ul>
                            <li>ABOUT US</li>
                            <li>HELP CENTER</li>
                            <li>LICENSES</li>
                            <li>MARKET API</li>
                            <li>SITE MAP</li>
                        </ul>
                    </div>
                    <div className="basis-1/3 text-white">
                        <p className="pb-[20px]">USERFUL</p>
                        <ul>
                            <li>THE COLLECTIONS</li>
                            <li>SIZE GUIDE</li>
                            <li>LOOKBOOK</li>
                            <li>INSTAGRAM SHOP</li>
                        </ul>
                    </div>
                    <div className="basis-1/3 text-white">
                        <p className="pb-[20px]">CONTACT US</p>
                        <ul>
                            <li className="flex"><div class="h-10 w-10 rounded-full border my-[10px]"><img className="pl-[7px] pt-[8px]" src={email} alt="" /></div><p className="py-[15px] px-[7px]">info@la-studioweb.com</p></li>
                            <li className="flex"><div class="h-10 w-10 rounded-full border my-[25px]"><img className="pl-[7px] pt-[8px]" src={phone} alt="" /></div><p className="py-[30px] px-[7px]">+44.954.954.86</p></li>
                            <li className="flex"><div class="h-10 w-10 rounded-full border my-[25px]"><img className="pl-[7px] pt-[7px]" src={clock} alt="" /></div><p className="py-[20px] px-[7px]">9:00am - 19:00pm <br></br> Monday - Sunday</p></li>
                        </ul>
                    </div>
                </section>
            </>
        )
    }
}

export default Footer;