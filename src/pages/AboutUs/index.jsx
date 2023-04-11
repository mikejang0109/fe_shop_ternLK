import React, { Component } from "react";
import path from '../../assets/aboutus/path.svg';
import Mask from '../../assets/aboutus/Mask.png';
import person1 from '../../assets/aboutus/person1.png';
import person2 from '../../assets/aboutus/person2.png';
import person3 from '../../assets/aboutus/person3.png';
import Oval from '../../assets/aboutus/Oval.png';

class AboutUs extends Component {
    render() {
        return (
            <>
                <section className="bg-[#F9F9F9]">
                    <p className="flex gap-2 pl-[50px] pt-[30px]">About <img src={path} alt="" /></p>
                    <div className="flex justify-items-center justify-center">
                        <p className="text-3xl font-normal pt-[30px] pb-[60px]">About Us</p>
                    </div>
                </section>
                <section className="flex px-[150px] gap-10 py-[50px]">
                    <div className="flex-1">
                        <p className="text-5xl">RAZ- Modern Furniture</p>
                        <p className="pt-[50px]">Quisque at justo sagittis, semper lacus a, iaculis tellus. Fusce tempor, leo vel iaculis aliquet, dui turpis maximus tellus, commodo congue Nam fermentum, augue eget pulvinar ullamcorper, dui purus ornare nibh, eu congue ligula felis nec diam liquam mollis nibh eu</p>
                        <ul className="list-disc ml-[25px]">
                            <li className="pt-[30px]">Fusce risus ligula, semper et ultricies vitae</li>
                            <li className="pt-[30px]">Vivamus eget ante id velit varius lacinia</li>
                        </ul>
                        <p className="pt-[50px]">Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue molestie eu et velit. Praesent gravida magna eget interdum iaculis. Aliquam erat volutpat. Integer placerat ipsum quis malesuada vehicula. Vestibulum</p>
                    </div>
                    <div className=" flex flex-1 justify-end">
                        <img className="w-[350px]" src={Mask} alt="" />
                    </div>
                </section>
                <section className="px-[150px] py-[50px]">
                    <div className="flex justify-items-center justify-center">
                        <p className="text-5xl font-normal pt-[30px]">Why Should Choose Us?</p>
                    </div>
                    <div className="flex py-[100px] gap-10 text-center">
                        <div className="basis-1/3">
                            <p className="font-bold text-xl pb-[20px]">Unique Design</p>
                            <p>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</p>
                        </div>
                        <div className="basis-1/3">
                            <p className="font-bold text-xl pb-[20px]">Good Wararanty Policy</p>
                            <p>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</p>
                        </div>
                        <div className="basis-1/3">
                            <p className="font-bold text-xl pb-[20px]">Handcrafted Quality</p>
                            <p>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</p>
                        </div>
                    </div>
                    <div className="flex gap-10 text-center">
                        <div className="basis-1/3">
                            <p className="font-bold text-xl pb-[20px]">Dedicated Support</p>
                            <p>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</p>
                        </div>
                        <div className="basis-1/3">
                            <p className="font-bold text-xl pb-[20px]">Amazing Features</p>
                            <p>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</p>
                        </div>
                        <div className="basis-1/3">
                            <p className="font-bold text-xl pb-[20px]">Easy Customized</p>
                            <p>Fusce risus ligula, semper et ultricies vitae, bibendum non nisl. Nunc in libero quis felis congue</p>
                        </div>
                    </div>
                </section>
                <section className="px-[150px] gap-10 py-[50px]">
                    <div className="flex justify-items-center justify-center">
                        <p className="text-5xl font-normal pt-[30px]">Meet Our Team</p>
                    </div>
                    <div className="flex py-[100px] gap-10">
                        <div className="basis-1/3">
                            <img className="" src={person1} alt="" />
                            <p className="text-lg font-medium">Ainsley Amanda</p>
                            <p className="italic text-slate-400">CEO-Founder</p>
                        </div>
                        <div className="basis-1/3">
                            <img className="" src={person2} alt="" />
                            <p className="text-lg font-medium">Maude Norman</p>
                            <p className="italic text-slate-400">Art Director</p>
                        </div>
                        <div className="basis-1/3">
                            <img className="" src={person3} alt="" />
                            <p className="text-lg font-medium">Connor Shelton</p>
                            <p className="italic text-slate-400">Products Manager</p>
                        </div>
                    </div>
                </section>
                <section className="bg-[#F9F9F9] px-[150px] py-[100px]">
                    <div className="flex justify-items-center justify-center">
                        <p className="text-lg text-center">“Gave 5 stars for excellent customer service. I had a couple of questions which they replied quickly to answer. If I could give multiple reasons for my rating it would also be for the design quality and customization to go along with the great service. The theme is excellent, keep up the great work."</p>
                    </div>
                    <div className="grid justify-items-center justify-center py-[50px]">
                    <img src={Oval} alt="" />
                    <p className="py-[20px] font-bold text-medium">Trevor Rivera - Calinofrnia</p>
                    </div>
                    <div className="flex justify-items-center justify-center gap-2">
                    <div className="w-[14px] h-[14px] rounded-full bg-black"></div>
                    <div className="w-[14px] h-[14px] rounded-full bg-slate-400"></div>
                    </div>
                </section>
            </>
        )
    }
}

export default AboutUs;