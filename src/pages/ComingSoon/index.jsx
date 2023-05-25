import React from "react";
import CountdownTimer from "../../components/Footer/CountdownTimer";
import '../../css/ComingSoon.css';
import Footer from "../../components/Footer";

function ComingSoon() {
  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  return (
    <>
    <div className="bg-black overflow-hidden">
      <section className=" pt-[50px] pl-[50px]">
        <p className="text-white handphone:text-titleSoon2 tablet:text-titleSoon laptop:text-[5rem] laptop:pr-[30vw] w-full pr-[50px] pb-[5vw]">We’re Building Something New</p>
        <CountdownTimer targetDate={dateTimeAfterThreeDays} />
        <div className="flex justify-between pr-[5vw] tablet:pr-[10vw] laptop:pr-[27vw] pt-[5vw]">
          <p className="text-white ">Your Email</p>
          <p className="text-white ">Subscribe</p>
        </div>
        <div className='border-b-2 border-solid border-white w-screen mb-[50px] tablet:w-[85vw] laptop:w-[70vw]'></div>
        {/* <div className="flex text-white gap-24 pl-[140px] ">
          <div className="flex max-w-[650px] gap-3 items-center">
            <p className="text-titleSoon2">RAZ</p>
            <p>Donec nunc nunc, gravida vitae diam vel, varius interdum erat. Quisque a nunc vel diam auctor commodo.</p>
          </div>
          <div className="flex gap-5 pl-[100px]">
            <div class="h-10 w-10 rounded-full border my-[10px]"><img className="pl-[12px] pt-[5px]" src={fb} alt="" /></div>
            <div class="h-10 w-10 rounded-full border my-[10px]"><img className="pl-[7px] pt-[8px]" src={twit} alt="" /></div>
            <div class="h-10 w-10 rounded-full border my-[10px]"><img className="pl-[7px] pt-[10px]" src={yt} alt="" /></div>
            <div class="h-10 w-10 rounded-full border my-[10px]"><img className="pl-[7px] pt-[7px]" src={dribble} alt="" /></div>
          </div>
        </div> */}
      </section>
        <Footer/>
      </div>
    </>
  )
}

export default ComingSoon;
